
import type { Meta, StoryObj } from '@storybook/react';
import FormProvider from '@components/form/provider';
import TextField from '@components/form/text-field';
import Button from '@components/button';
const meta = {
  title: 'Example/Form',
  component: FormProvider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    
  },
} satisfies Meta<typeof FormProvider>;

export default meta;
type Story = StoryObj<typeof FormProvider>;

export const Primary: Story = {
  args: {
    onSubmit: (values)=> {
      console.log(values);
    },
    defaultValues: {
      name: "amir",
      family: "damirchi"
    },
  },
  render: ({ ...args }) => {
    return (
      <FormProvider {...args}>
        <TextField label='name' name='name' />
        <TextField label='family' name='family' />
        <Button type='submit'>
          Submit
        </Button>
      </FormProvider>
    );
  },
};
