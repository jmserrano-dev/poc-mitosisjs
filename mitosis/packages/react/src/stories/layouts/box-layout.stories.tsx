import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { BoxLayout } from "../../index";

const meta: Meta<typeof BoxLayout> = {
  title: "Layouts/Box",
  tags: ["autodocs"],
  component: BoxLayout,
  parameters: {
    layout: "centered",
  },
  args: {
    nativeClass: "layout__box--test",
  },
  render: (args) => <BoxLayout {...args} />,
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {},
};
