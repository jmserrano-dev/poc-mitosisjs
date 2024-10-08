// import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";

import { StButton } from "../index";

const meta: Meta<typeof StButton> = {
  title: "Components/Button",
  // tags: ["!autodocs"],
  component: StButton,
  parameters: {
    layout: "centered",
  },
  args: {},
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    type: "button",
    children: "Hello",
  },
};
