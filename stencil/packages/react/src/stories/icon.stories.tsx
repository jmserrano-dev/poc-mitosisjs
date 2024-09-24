import type { Meta, StoryObj } from "@storybook/react";

import { StIcon } from "../index";

const meta: Meta<typeof StIcon> = {
  title: "Components/Icon",
  // tags: ["!autodocs"],
  component: StIcon,
  parameters: {
    layout: "centered",
  },
  args: {},
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    name: "arrow_down",
  },
};
