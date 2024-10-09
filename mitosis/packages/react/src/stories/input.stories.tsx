import type { Meta, StoryObj } from "@storybook/react";

import { InputText } from "../index";

const meta = {
  title: "Components/InputText",
  tags: ["autodocs"],
  component: InputText,
  parameters: {
    layout: "centered",
  },
  args: {
    nativePlaceholder: "Write something...",
    // xClick: fn(),
  },
} as Meta<typeof InputText>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {},
};
