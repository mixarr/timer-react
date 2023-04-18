import type { Meta, StoryObj } from "@storybook/react";

import { IconButton } from ".";
import { GithubIcon } from "../icons";

const meta = {
  title: "Design System/Buttons/Icon Button",
  component: IconButton,
  tags: ["button"],
  argTypes: {
    disabled: { type: "boolean", default: false },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: <GithubIcon />,
    view: "primary",
    size: "medium",
    disabled: false,
  },
};

export const Outline: Story = {
  args: {
    icon: <GithubIcon />,
    view: "outline",
    size: "medium",
    disabled: false,
  },
};
