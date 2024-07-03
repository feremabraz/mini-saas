import type { Meta, StoryObj } from '@storybook/react';
import { Emoji } from '@/components/ui/emoji';

const meta: Meta<typeof Emoji> = {
  component: Emoji,
  title: 'Components/Emoji',
  tags: ['autodocs'],
  argTypes: {
    animationDuration: { control: 'number' },
    animationDistance: { control: 'number' },
    direction: { control: 'radio', options: ['horizontal', 'vertical'] },
    reverse: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Emoji>;

export const EmojiWTF: Story = {
  args: {
    src: '/assets/emoji-wtf.svg',
    alt: 'WTF Emoji',
    width: 80,
    height: 80,
    animationDuration: 2,
    animationDistance: 5,
    direction: 'vertical',
  },
};

export const EmojiLeft: Story = {
  args: {
    src: '/assets/emoji-left.svg',
    alt: 'Left Emoji',
    width: 80,
    height: 80,
    animationDuration: 3,
    animationDistance: 10,
    direction: 'horizontal',
    reverse: true,
  },
};

export const EmojiRight: Story = {
  args: {
    src: '/assets/emoji-right.svg',
    alt: 'Right Emoji',
    width: 80,
    height: 80,
    animationDuration: 3,
    animationDistance: 10,
    direction: 'horizontal',
  },
};
