#!/usr/bin/env node

/**
 * 2D visual image into a 1D text representation
 * but using colors and Unicode characters for higher fidelity
 * and a resolution doubling technique.
 */

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import Jimp from 'jimp';
import pc from 'picocolors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Prepares the image data for terminal output.
 * @param {Jimp} image - The Jimp image object.
 * @param {number} maxWidth - Maximum width of the output image in characters.
 * @param {number} aspectRatio - Aspect ratio adjustment for terminal output.
 * @returns {Object} An object containing the prepared image data.
 * @property {number} width - The width of the prepared image.
 * @property {number} height - The height of the prepared image.
 * @property {Array<Array<{upper: Jimp.RGBA, lower: Jimp.RGBA}>>} data - The color data for each pixel.
 */
async function prepareImage(image, maxWidth, aspectRatio) {
  const originalWidth = image.getWidth();
  const originalHeight = image.getHeight();

  const width = Math.min(maxWidth, originalWidth);
  const height = Math.floor(
    (width / originalWidth) * originalHeight * aspectRatio
  );

  image.resize(width, height * 2);

  const preparedData = [];
  for (let y = 0; y < height; y++) {
    const row = [];
    for (let x = 0; x < width; x++) {
      const upperColor = Jimp.intToRGBA(image.getPixelColor(x, y * 2));
      const lowerColor = Jimp.intToRGBA(image.getPixelColor(x, y * 2 + 1));
      row.push({ upper: upperColor, lower: lowerColor });
    }
    preparedData.push(row);
  }

  return { width, height, data: preparedData };
}

/**
 * Prints the prepared image data to the console.
 * @param {Object} imageData - The prepared image data.
 * @param {number} imageData.width - The width of the image.
 * @param {number} imageData.height - The height of the image.
 * @param {Array<Array<{upper: Jimp.RGBA, lower: Jimp.RGBA}>>} imageData.data - The color data for each pixel.
 */
function printImage(imageData) {
  for (const row of imageData.data) {
    let line = '';
    for (const pixel of row) {
      const { upper, lower } = pixel;
      /**
       * Construct the ANSI color codes for each pixel:
       * \x1b[38;2;R;G;Bm sets the foreground color (upper half)
       * \x1b[48;2;R;G;Bm sets the background color (lower half)
       * ▀ (U+2580) is the Unicode upper half block character
       */
      line +=
        `\x1b[38;2;${upper.r};${upper.g};${upper.b}m` +
        `\x1b[48;2;${lower.r};${lower.g};${lower.b}m▀`;
    }
    console.log(line + pc.reset(''));
  }
}

/**
 * Main function to read, prepare, and print the image.
 * @async
 * @param {string} filePath - The path to the image file.
 * @param {Object} options - Configuration options.
 * @param {number} [options.maxWidth=100] - Maximum width of the output image in characters.
 * @param {number} [options.aspectRatio=0.5] - Aspect ratio adjustment for terminal output.
 * @throws {Error} If the terminal is not TTY or if there's an error processing the image.
 */
export async function show(filePath, options = {}) {
  const { maxWidth = 100, aspectRatio = 0.5 } = options;

  if (!process.stdout.isTTY) {
    throw new Error('This script requires a TTY terminal.');
  }

  try {
    const image = await Jimp.read(filePath);
    const preparedImage = await prepareImage(image, maxWidth, aspectRatio);
    printImage(preparedImage);
  } catch (error) {
    throw new Error(`Error processing image.\n${error.message}`);
  }
}

show(join(__dirname, '../assets/sample.png')).catch((error) =>
  console.error(pc.red(error.message))
);
