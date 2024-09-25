import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { BoxLayout, StackLayout } from "../index";

const meta: Meta<typeof StackLayout> = {
  title: "Layouts/Stack",
  tags: ["autodocs"],
  component: StackLayout,
  parameters: {
    layout: "centered",
  },
  args: {},
  render: (args) => (
    <StackLayout {...args}>
      <BoxLayout nativeClass="layout__box--test"></BoxLayout>
      <BoxLayout nativeClass="layout__box--test"></BoxLayout>
      <BoxLayout nativeClass="layout__box--test"></BoxLayout>
      <BoxLayout nativeClass="layout__box--test"></BoxLayout>
      <BoxLayout nativeClass="layout__box--test"></BoxLayout>
    </StackLayout>
  ),
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {},
};
