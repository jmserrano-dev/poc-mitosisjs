import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { ClusterLayout, BoxLayout } from "../index";

const meta = {
  title: "Layouts/Cluster",
  tags: ["autodocs"],
  component: ClusterLayout,
  parameters: {
    layout: "padded",
  },
  args: {},
  render: (args) => (
    <ClusterLayout {...args}>
      <BoxLayout nativeClass="layout__box--test"></BoxLayout>
      <BoxLayout nativeClass="layout__box--test"></BoxLayout>
      <BoxLayout nativeClass="layout__box--test"></BoxLayout>
      <BoxLayout nativeClass="layout__box--test"></BoxLayout>
      <BoxLayout nativeClass="layout__box--test"></BoxLayout>
    </ClusterLayout>
  ),
} as Meta<typeof ClusterLayout>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {},
};
