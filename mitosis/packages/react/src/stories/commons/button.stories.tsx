import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../index";

const meta = {
  title: "Commons/Button",
  tags: ["autodocs"],
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    // xClick: fn(),
  },
} as Meta<typeof Button>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    children: "Hello",
  },
};
