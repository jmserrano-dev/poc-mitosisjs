import React from "react";
import type { Preview } from "@storybook/react";
import { defineCustomElements } from "@poc-stencil/library-react";

import "../../../../node_modules/@poc-stencil/library/dist/assets/css/global.css";

// import "../src/auto-generated/assets/css/global.css";

defineCustomElements();

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
