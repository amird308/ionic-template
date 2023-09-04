
import Input from '@components/input';
import type { Meta, StoryObj } from '@storybook/react';
import { FC, useState } from 'react';

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    fill: {
      options: ['outline', 'solid'],
      control: { type: 'radio' },
    },
    type: {
      options: ['date', 'email', 'number', 'password', 'search', 'tel', 'text', 'url', 'time', 'week', 'month', 'datetime-local'],
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
} satisfies Meta<typeof Input>;


export default meta;
type Story = StoryObj<typeof meta>;

const Template:FC<Story["args"]> = (props) => {    
  const [localValue, setValue] = useState<string | number>('');
  const onChangeInput = (inputValue: string | number) => {
      setValue(inputValue);
  }
  return (
      <Input
          {...props}
          value={localValue}
          onIonInput={(value)=> {
            onChangeInput(value?.target?.value || "");
          }}
      />
  )
}

export const Primary: Story = {
  args: {
    fill: "solid",
    color: "dark",
    label: "amir",
    disabled: false
  },
  render: ({...arg})=> {
    return <Template {...arg} />
  },
};

