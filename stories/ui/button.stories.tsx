import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';
import { Bird } from 'lucide-react';

const meta = {
  title: 'Primitives/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'secondary',
        'destructive',
        'ghost',
        'link',
        'outline',
        'ringHover',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'icon', 'sm', 'lg'],
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// Variants

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Default',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const RingHover: Story = {
  args: {
    variant: 'ringHover',
    children: 'Ring Hover',
  },
};

// Sizes (unchanged)

export const SizeDefault: Story = {
  args: {
    size: 'default',
    children: 'Default Size',
  },
};

export const SizeIcon: Story = {
  args: {
    size: 'icon',
    children: <Bird />,
  },
};

export const SizeLarge: Story = {
  args: {
    size: 'lg',
    children: 'Large Size',
  },
};

export const SizeSmall: Story = {
  args: {
    size: 'sm',
    children: 'Small Size',
  },
};

// Other animations

export const Wobble: Story = {
  args: {
    children: 'Wobble Button',
    variant: 'default',
    size: 'default',
    customAnimation: {
      whileHover: {
        rotate: [0, -10, 10, -10, 10, 0],
        transition: {
          duration: 0.5,
          ease: 'easeInOut',
        },
      },
    },
  },
};

export const NoAnimation: Story = {
  args: {
    children: 'No Animations',
    variant: 'default',
    size: 'default',
    disableAnimation: true,
  },
};
