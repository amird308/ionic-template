import Button from '@components/button';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

    
  },
} satisfies Meta<typeof Button>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    disabled: false,
    color: "dark",
    children: "hi man"
  },
};

export const Secondary: Story = {
  args: {
  },
};

export const Large: Story = {
  args: {

  },
};

export const Small: Story = {
  args: {

  },
};
