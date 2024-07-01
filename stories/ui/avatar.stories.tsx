import { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const meta = {
  title: 'Primitives/Avatar',
  render: (args) => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>Shadcn</AvatarFallback>
    </Avatar>
  ),
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<{}>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AvatarWithImage: Story = {
  args: {},
  render: (args) => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>Shadcn</AvatarFallback>
    </Avatar>
  ),
};

export const AvatarWithFallback: Story = {
  args: {},
  render: (args) => (
    <Avatar>
      <AvatarImage src="" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};
