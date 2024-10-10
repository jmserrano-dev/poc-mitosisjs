import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "../../index";

const meta: Meta<typeof Label> = {
  title: "Forms/Label",
  tags: ["autodocs"],
  component: Label,
  parameters: {
    layout: "centered",
  },
  args: {},
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    children: "My label",
  },
};
