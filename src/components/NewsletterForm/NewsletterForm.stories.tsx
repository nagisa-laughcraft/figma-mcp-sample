import type { Meta, StoryObj } from '@storybook/react';
import { NewsletterForm } from '.';

const meta: Meta<typeof NewsletterForm> = {
  title: 'Components/NewsletterForm',
  component: NewsletterForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NewsletterForm>;

export const Default: Story = {
  args: {
    onSubmit: (email) => {
      console.log('Submitted email:', email);
    },
  },
};

export const WithCustomWidth: Story = {
  args: {
    ...Default.args,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '338px' }}>
        <Story />
      </div>
    ),
  ],
}; 