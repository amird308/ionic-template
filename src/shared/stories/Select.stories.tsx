import Select, { SelectOption } from '@components/select';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    fill: {
      options: ['outline', 'solid'],
      control: { type: 'radio' },
    },
    color: {
      options: ["primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", "dark"],
      control: { type: 'radio' },
    },
    label: {
      type: "string",
    },
    labelPlacement: {
      options: ['start', 'end', 'floating', 'stacked', 'fixed'],
      control: { type: 'radio' },
    }
  },
} satisfies Meta<typeof Select>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    fill: "solid",
    color: "dark",
    label: "",
    disabled: false
  },
  render: ({ ...args }) => {
    return (
      <Select {...args}>
          <SelectOption value="hi">
            hi man
          </SelectOption>
          <SelectOption value="bye">
            good bye
          </SelectOption>
      </Select>
    );
  },
};
