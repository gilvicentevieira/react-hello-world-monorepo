import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/Button';
import { action } from '@storybook/addon-actions'; // Import action from addon-actions

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button'
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonPrimary: Story = {
  args: {
    label: 'Button',
    handleClick: action('button-clicked'), // Log the click action
    size: 'medium'
  },
};

// Small Button
export const SmallButton: Story = {
  args: {
    label: 'Small Button',
    handleClick: () => console.log('clicked'),
    size: 'small',
  },
};

// Medium Button
export const MediumButton: Story = {
  args: {
    label: 'Medium Button',
    handleClick: () => console.log('clicked'),
    size: 'medium',
  },
};

// Large Button
export const LargeButton: Story = {
  args: {
    label: 'Large Button',
    handleClick: () => console.log('clicked'),
    size: 'large',
  },
};