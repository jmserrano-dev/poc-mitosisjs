import type { Meta, StoryObj } from "@storybook/angular";

import { Button } from "../index";

const meta: Meta<Button & { content: string }> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    content: {
      type: "string",
      name: "content",
    },
    // xClick: {
    //   action: "clicked",
    //   table: { category: "Events" },
    // },
  },
  args: {
    content: "My button",
  },
  // render: (args: Button) => ({
  //   props: { ...args },
  //   template: `<x-button (xClick)="{{args.xClick}}">{{content}}</x-button>`,
  // }),
};

export default meta;

export const Primary: StoryObj<Button & { content: string }> = {
  args: {},
};
