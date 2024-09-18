import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";

import { StButton } from "../index";

const meta = {
  title: "Example/Button",
  component: StButton,
  parameters: {
    layout: "centered",
  },
  args: {
    onClicked: fn(),
  },
} satisfies Meta<typeof StButton>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    type: "button",
    children: "Hello",
  },
};
