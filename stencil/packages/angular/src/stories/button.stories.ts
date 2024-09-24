import type { Meta, StoryObj } from "@storybook/angular";

import { StButton } from "../index";

const meta: Meta<StButton & { content: string }> = {
  title: "Components/Button",
  component: StButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    content: {
      type: "string",
      name: "content",
    },
  },
  args: {
    content: "Button",
  },
  render: (args: StButton) => ({
    props: { ...args },
    template: "<st-button>{{content}}</st-button>",
  }),
};

export default meta;

export const Primary: StoryObj<StButton & { content: string }> = {
  args: {},
};
