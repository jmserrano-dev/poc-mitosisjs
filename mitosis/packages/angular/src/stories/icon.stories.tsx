import type { Meta, StoryObj } from "@storybook/angular";

import { Icon } from "../index";

const meta: Meta<Icon> = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Primary: StoryObj<Icon> = {
  args: {
    name: "arrow_up",
  },
};
