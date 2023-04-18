import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

const meta = {
  title: "Design System/Buttons/Button",
  component: Button,
  tags: ["button"],
  argTypes: {
    disabled: { type: "boolean", default: false },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Кнопка",
    view: "primary",
    size: "medium",
    disabled: false,
  },
};

export const Outline: Story = {
  args: {
    children: "Кнопка",
    view: "outline",
    size: "medium",
    disabled: false,
  },
};
