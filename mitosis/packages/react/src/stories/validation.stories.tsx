import type { Meta, StoryObj } from "@storybook/react";

import { Validation } from "../index";

const meta: Meta<typeof Validation> = {
  title: "Components/Validation",
  tags: ["autodocs"],
  component: Validation,
  parameters: {
    layout: "centered",
  },
  args: {},
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    children: "My validation with error message...",
  },
};
