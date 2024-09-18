import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../index";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    xClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    type: "button",
    children: "Hello",
  },
};
