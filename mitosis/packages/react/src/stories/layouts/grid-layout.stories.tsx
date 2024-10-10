import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { BoxLayout, GridLayout } from "../../index";

const meta: Meta<typeof GridLayout> = {
  title: "Layouts/Grid",
  tags: ["autodocs"],
  component: GridLayout,
  parameters: {
    layout: "padded",
  },
  args: {},
  render: (args) => (
    <GridLayout {...args}>
      <BoxLayout nativeClass="layout__box--test"></BoxLayout>
      <BoxLayout nativeClass="layout__box--test"></BoxLayout>
      <BoxLayout nativeClass="layout__box--test"></BoxLayout>
      <BoxLayout nativeClass="layout__box--test"></BoxLayout>
      <BoxLayout nativeClass="layout__box--test"></BoxLayout>
    </GridLayout>
  ),
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {},
};
