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
    fill: {
      options: ["clear", "outline", "solid", "default"],
      control: { type: 'radio' },
    },
    color: {
      options: ["primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", "dark"],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Button>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    fill: "solid",
    color: "dark",
    disabled: false,
    children: "hi man"
  },
};
