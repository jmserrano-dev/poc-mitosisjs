import React from "react";
import type { Preview } from "@storybook/react";
import "../src/auto-generated/assets/css/global.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
