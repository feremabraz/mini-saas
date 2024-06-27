import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { BentoGrid, BentoCard } from '@/components/ui/bentogrid';
import { Bird, Coffee, Sun, Moon, Star, Heart, Zap, Cloud } from 'lucide-react';

const meta = {
  title: 'UI/BentoGrid',
  component: BentoGrid,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: { type: 'select' },
      options: [1, 2, 3, 4],
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-16">
        <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <Story />
        </section>
      </div>
    ),
  ],
} satisfies Meta<typeof BentoGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

const cardData = [
  {
    name: 'Bird Watching',
    Icon: Bird,
    description: 'Explore the world of ornithology',
    href: '#',
    cta: 'Start Birding',
  },
  {
    name: 'Coffee Brewing',
    Icon: Coffee,
    description: 'Master the art of coffee making',
    href: '#',
    cta: 'Brew Now',
  },
  {
    name: 'Solar Energy',
    Icon: Sun,
    description: 'Harness the power of the sun',
    href: '#',
    cta: 'Go Solar',
  },
  {
    name: 'Night Sky',
    Icon: Moon,
    description: 'Discover the wonders of astronomy',
    href: '#',
    cta: 'Stargaze',
  },
  {
    name: 'Stellar Phenomena',
    Icon: Star,
    description: 'Uncover cosmic mysteries',
    href: '#',
    cta: 'Explore Space',
  },
  {
    name: 'Wellness Journey',
    Icon: Heart,
    description: 'Embark on a path to better health',
    href: '#',
    cta: 'Get Healthy',
  },
  {
    name: 'Energy Efficiency',
    Icon: Zap,
    description: 'Optimize your power consumption',
    href: '#',
    cta: 'Save Energy',
  },
  {
    name: 'Cloud Computing',
    Icon: Cloud,
    description: 'Navigate the world of cloud tech',
    href: '#',
    cta: 'Deploy Now',
  },
];

export const Default: Story = {
  args: {
    columns: 3,
    children: cardData
      .slice(0, 6)
      .map((card, index) => <BentoCard key={index} {...card} />),
  },
};

export const TwoColumns: Story = {
  args: {
    columns: 2,
    children: cardData
      .slice(0, 6)
      .map((card, index) => <BentoCard key={index} {...card} />),
  },
};

export const FourColumns: Story = {
  args: {
    columns: 4,
    children: cardData.map((card, index) => (
      <BentoCard key={index} {...card} />
    )),
  },
};

export const WithHeading: Story = {
  render: (args) => (
    <>
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
        Our Services
      </h2>
      <BentoGrid {...args} />
    </>
  ),
  args: {
    columns: 3,
    children: cardData
      .slice(0, 6)
      .map((card, index) => <BentoCard key={index} {...card} />),
  },
};
