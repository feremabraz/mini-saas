import type { Meta, StoryObj } from '@storybook/react';
import { CardGradient } from '@/components/ui/card-gradient';

const meta: Meta<typeof CardGradient> = {
  title: 'Components/Card Gradient',
  component: CardGradient,
  tags: ['autodocs'],
  argTypes: {
    animate: { control: 'boolean' },
    className: { control: 'text' },
    containerClassName: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof CardGradient>;

const CardContent = () => (
  <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-lg">
    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
      Product Title
    </h2>
    <p className="text-gray-600 dark:text-gray-400 mb-4">
      This is a sample product description. The gradient background is visible
      around this card content.
    </p>
    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
      Buy Now
    </button>
  </div>
);

export const Default: Story = {
  args: {
    animate: true,
    className: 'p-1',
    children: <CardContent />,
    colors: ['#00ccb1', '#7b61ff', '#ffc414', '#1ca0fb'],
  },
};

export const StaticGradient: Story = {
  args: {
    ...Default.args,
    animate: false,
  },
};

export const LargerGradientBorder: Story = {
  args: {
    ...Default.args,
    className: 'p-3',
  },
};

export const CustomColors: Story = {
  args: {
    ...Default.args,
    colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00'],
  },
};
