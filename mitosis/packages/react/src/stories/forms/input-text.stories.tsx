import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { InputText, Validation } from "../../index";

const meta = {
  title: "Forms/InputText",
  tags: ["autodocs"],
  component: InputText,
  parameters: {
    layout: "centered",
  },
  args: {
    nativePlaceholder: "Write something...",
  },
} as Meta<typeof InputText>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {},
};

export const WithWarningValidation: StoryObj<typeof meta> = {
  args: {
    maxLength: 10,
    chidren: (
      <Validation variant="warning">This is a warning message</Validation>
    ),
  },
};

export const WithErrorValidation: StoryObj<typeof meta> = {
  args: {
    invalid: true,
    maxLength: 10,
    chidren: <Validation variant="error">This is a error message</Validation>,
  },
};
