import type { Meta, StoryObj } from '@storybook/react';
import { StickyNav, StickyNavProps } from '@/components/ui/sticky-nav';

const meta: Meta<typeof StickyNav> = {
  title: 'Components/Nav-StickyNav',
  component: StickyNav,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="min-h-[300vh] bg-gradient-to-b from-[rgba(255,255,255,.1)] to-[rgba(255,255,255,0)]">
        <Story />
        <div className="mt-20 p-4">
          <h1 className="text-2xl font-bold mb-4 mt-20">
            Scroll down to see sticky behavior
          </h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris.
          </p>
          {/* Add more content here to make the page scrollable */}
          {Array(20)
            .fill(0)
            .map((_, i) => (
              <p key={i} className="mb-4">
                <br />
              </p>
            ))}
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof StickyNav>;

const Template: Story = {
  render: (args: StickyNavProps) => <StickyNav {...args} />,
};

export const Default: Story = {
  ...Template,
  args: {
    links: [
      { href: '#products', label: 'Products' },
      { href: '#services', label: 'Services' },
      { href: '#about', label: 'About' },
      { href: '#contact', label: 'Contact' },
    ],
  },
};
