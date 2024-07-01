import { Meta, StoryObj } from '@storybook/react';
import { BorderBeam } from '@/components/ui/border-beam';

const meta = {
  title: 'Components/BorderBeam',
  component: BorderBeam,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'blue', 'green'],
    },
    duration: { control: 'number' },
    borderWidth: { control: 'number' },
    delay: { control: 'number' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BorderBeam>;

export default meta;
type Story = StoryObj<typeof meta>;

const BorderBeamWrapper: React.FC<React.ComponentProps<typeof BorderBeam>> = (
  props
) => (
  <div
    style={{
      width: 300,
      height: 200,
      position: 'relative',
      background: '#f0f0f0',
      borderRadius: '8px',
    }}
  >
    <BorderBeam {...props} />
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#333',
      }}
    >
      Border Beam Effect
    </div>
  </div>
);

export const Default: Story = {
  render: (args) => <BorderBeamWrapper {...args} />,
  args: {
    variant: 'default',
    duration: 5,
    borderWidth: 2,
    delay: 0,
  },
};

export const Blue: Story = {
  render: (args) => <BorderBeamWrapper {...args} />,
  args: {
    ...Default.args,
    variant: 'blue',
  },
};

export const Green: Story = {
  render: (args) => <BorderBeamWrapper {...args} />,
  args: {
    ...Default.args,
    variant: 'green',
  },
};

export const ThickBorder: Story = {
  render: (args) => <BorderBeamWrapper {...args} />,
  args: {
    ...Default.args,
    borderWidth: 4,
  },
};

export const FastAnimation: Story = {
  render: (args) => <BorderBeamWrapper {...args} />,
  args: {
    ...Default.args,
    duration: 5,
  },
};
