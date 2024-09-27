import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "../index";

const meta = {
  title: "Components/Input",
  tags: ["autodocs"],
  component: Input,
  parameters: {
    layout: "centered",
  },
  args: {
    nativePlaceholder: "Write something...",
    // xClick: fn(),
  },
} as Meta<typeof Input>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {},
};
