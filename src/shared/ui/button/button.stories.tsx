import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

const meta = {
  title: "Design System/Buttons/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Кнопка",
    view: "primary",
    size: "medium",
    shape: "rounded",
    type: "button",
    disabled: false,
  },
};

export const Outline: Story = {
  args: {
    children: "Кнопка",
    view: "outline",
    size: "medium",
    shape: "rounded",
    type: "button",
    disabled: false,
  },
};

export const Ghost: Story = {
  args: {
    children: "Кнопка",
    view: "ghost",
    size: "medium",
    shape: "rounded",
    type: "button",
    disabled: false,
  },
};
