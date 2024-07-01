import type { Meta, StoryObj } from '@storybook/react';
import { SparklesText } from '@/components/ui/sparks';

const meta: Meta<typeof SparklesText> = {
  title: 'Components/Sparks',
  component: SparklesText,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    sparklesCount: { control: { type: 'range', min: 1, max: 50, step: 1 } },
    colors: {
      control: 'object',
    },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof SparklesText>;

export const Default: Story = {
  args: {
    text: 'Sparkly Text',
    sparklesCount: 10,
    colors: { first: '#A07CFE', second: '#FE8FB5' },
    className: 'text-4xl',
  },
};

export const CustomColors: Story = {
  args: {
    text: 'Custom Colors',
    sparklesCount: 10,
    colors: { first: '#FFD700', second: '#00CED1' },
    className: 'text-4xl font-bold',
  },
};

export const HighSparkleCount: Story = {
  args: {
    text: 'Many Sparkles',
    sparklesCount: 30,
    colors: { first: '#FF6347', second: '#4B0082' },
    className: 'text-6xl font-extrabold',
  },
};

export const LongText: Story = {
  args: {
    text: 'This is a longer piece of text with many sparkles',
    sparklesCount: 20,
    colors: { first: '#32CD32', second: '#FF69B4' },
    className: 'text-3xl font-semibold',
  },
};
