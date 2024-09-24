import type { Meta, StoryObj } from "@storybook/angular";

import { StIcon } from "../index";

const meta: Meta<StIcon> = {
  title: "Components/Icon",
  component: StIcon,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Primary: StoryObj<StIcon> = {
  args: {
    name: "arrow_down",
  },
};
