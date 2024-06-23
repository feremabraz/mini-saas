#!/usr/bin/env node

import {
  intro,
  outro,
  text,
  select,
  confirm,
  isCancel,
  multiselect,
} from '@clack/prompts';
import { Edge } from 'edge.js';
import color from 'picocolors';
import fs from 'fs/promises';
import path from 'path';

const edge = new Edge();
const templatesDir = path.join(process.cwd(), 'cli/templates');
edge.mount(templatesDir);

const predefinedFields = [
  { name: 'name', type: 'string', required: true },
  { name: 'email', type: 'string', required: true },
  { name: 'age', type: 'number', required: false },
  { name: 'isActive', type: 'boolean', required: false },
  { name: 'createdAt', type: 'Date', required: true },
];

async function main() {
  intro(color.inverse(' mini-saas MVC tool '));

  const modelName = await text({
    message: 'What is the name of your model?',
    validate: (value) => {
      if (value.length === 0) return 'Model name is required';
      if (!/^[A-Z][a-zA-Z]*$/.test(value))
        return 'Model name must start with a capital letter and contain only letters';
    },
  });

  if (isCancel(modelName)) {
    outro(color.yellow('Operation cancelled'));
    process.exit(0);
  }

  const selectedPredefinedFields = await multiselect({
    message: 'Select the predefined fields for your model:',
    options: predefinedFields.map((field) => ({
      value: field.name,
      label: field.name,
    })),
    required: false,
  });

  if (isCancel(selectedPredefinedFields)) {
    outro(color.yellow('Operation cancelled'));
    process.exit(0);
  }

  const fields = predefinedFields.filter((field) =>
    selectedPredefinedFields.includes(field.name)
  );

  const customFieldsInput = await text({
    message:
      'Enter which custom fields do you want (comma separated, empty if none):',
  });

  if (isCancel(customFieldsInput)) {
    outro(color.yellow('Operation cancelled'));
    process.exit(0);
  }

  const customFieldNames = customFieldsInput
    .split(',')
    .map((f) => f.trim())
    .filter(Boolean);

  for (const fieldName of customFieldNames) {
    const fieldType = await select({
      message: `Select the type for ${fieldName}:`,
      options: ['string', 'number', 'boolean', 'Date'].map((type) => ({
        value: type,
        label: type,
      })),
    });

    if (isCancel(fieldType)) {
      outro(color.yellow('Operation cancelled'));
      process.exit(0);
    }

    const isRequired = await confirm({
      message: `Is ${fieldName} required?`,
    });

    if (isCancel(isRequired)) {
      outro(color.yellow('Operation cancelled'));
      process.exit(0);
    }

    fields.push({ name: fieldName, type: fieldType, required: isRequired });
  }

  const templateData = {
    modelName,
    fields,
    timestamp: new Date().toISOString(),
    camelCase: (str) => str.charAt(0).toLowerCase() + str.slice(1),
    upperFirst: (str) => str.charAt(0).toUpperCase() + str.slice(1),
  };

  const renderedModel = await edge.render('model', templateData);

  const outputPath = path.join(
    process.cwd(),
    'cli',
    'templates',
    `${modelName}.ts`
  );

  try {
    await fs.writeFile(outputPath, renderedModel);
  } catch (error) {
    console.error(color.red('Error while writing a file:'), error.message);
    process.exit(1);
  }

  outro(
    color.green(`✔ Model ${modelName} has been generated at ${outputPath}`)
  );
}

main().catch((err) => {
  console.error(color.red('An unexpected error has occurred:'), err);
  process.exit(1);
});
