import type { Meta, StoryObj } from '@storybook/react';
import { Scroller } from '@/components/ui/scroller';

const meta: Meta<typeof Scroller> = {
  title: 'Components/Scroller',
  component: Scroller,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Scroller>;

export const Default: Story = {
  args: {},
};

export const CustomAnimation: Story = {
  args: {
    animate: { x: [0, 500], opacity: [1, 0.5, 1] },
    transition: {
      x: {
        duration: 20,
        repeat: Infinity,
      },
      opacity: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  },
};
