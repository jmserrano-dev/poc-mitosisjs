import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { ImposterLayout, BoxLayout, StackLayout } from "../../index";

const meta = {
  title: "Layouts/Imposter",
  tags: ["autodocs"],
  component: ImposterLayout,
  parameters: {
    layout: "padded",
  },
  args: {},
  render: (args) => (
    <StackLayout>
      <BoxLayout nativeClass="layout__box--test"></BoxLayout>
      <BoxLayout nativeClass="layout__box--test"></BoxLayout>
      <BoxLayout nativeClass="layout__box--test"></BoxLayout>
      <BoxLayout nativeClass="layout__box--test"></BoxLayout>
      <BoxLayout nativeClass="layout__box--test"></BoxLayout>

      <ImposterLayout {...args} nativeClass="layout__box--imposter">
        <BoxLayout></BoxLayout>
      </ImposterLayout>
    </StackLayout>
  ),
} as Meta<typeof ImposterLayout>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {},
};
