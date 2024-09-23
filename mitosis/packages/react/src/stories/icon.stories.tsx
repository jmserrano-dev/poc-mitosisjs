import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "../index";

const meta = {
  title: "Components/Icon",
  tags: ["autodocs"],
  component: Icon,
  parameters: {
    layout: "centered",
  },
  args: {},
} as Meta<typeof Icon>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    name: "arrow_down",
  },
};
