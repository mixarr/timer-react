import type { Meta, StoryObj } from "@storybook/react";

import { IconButton } from ".";
import { GithubIcon } from "../icons";

const meta = {
  title: "Design System/Buttons/Icon Button",
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    disabled: { type: "boolean", default: false },
  },
  parameters: {},
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    "aria-label": "GitHub",
    icon: <GithubIcon />,
    view: "primary",
    size: "medium",
    shape: "rounded",
    type: "button",
    disabled: false,
  },
};

export const Outline: Story = {
  args: {
    "aria-label": "GitHub",
    icon: <GithubIcon />,
    view: "outline",
    size: "medium",
    shape: "rounded",
    type: "button",
    disabled: false,
  },
};

export const Ghost: Story = {
  args: {
    "aria-label": "GitHub",
    icon: <GithubIcon />,
    view: "ghost",
    size: "medium",
    shape: "rounded",
    type: "button",
    disabled: false,
  },
};
