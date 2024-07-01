import type { Meta, StoryObj } from '@storybook/react';
import { FixedNav } from '@/components/ui/fixednav';

const meta: Meta<typeof FixedNav> = {
  title: 'Components/FixedNav',
  component: FixedNav,
  tags: ['autodocs'],
  argTypes: {
    links: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<typeof FixedNav>;

const defaultLinks = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const Default: Story = {
  args: {
    links: defaultLinks,
  },
};

export const WithMoreLinks: Story = {
  args: {
    links: [
      ...defaultLinks,
      { href: '/services', label: 'Services' },
      { href: '/blog', label: 'Blog' },
    ],
  },
};
