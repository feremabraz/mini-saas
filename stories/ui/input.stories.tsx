import { Meta, StoryObj } from '@storybook/react';
import { Input, InputProps } from '@/components/ui/input';

const meta = {
  title: 'Primitives/Input',
  component: Input,
  args: {
    type: 'text',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password'],
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<InputProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputDefault: Story = {
  args: {
    type: 'text',
    placeholder: 'Name',
  },
};

export const InputDisabled: Story = {
  args: {
    disabled: true,
  },
  render: function (args) {
    return <Input placeholder="Name" {...args} />;
  },
};
