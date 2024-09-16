import type { Meta, StoryObj } from '@storybook/react';
import Header from '../components/Header';

const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const HeaderPrimary: Story = {
  args: {
    primary: true,
    label: 'Header'
  },
};