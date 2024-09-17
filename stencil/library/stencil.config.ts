import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'library',
  outputTargets: [
    {
      type: 'docs-readme',
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    reactOutputTarget({
      // Relative path to where the React components will be generated
      outDir: '../packages/react/src/components/',
    }),
    // {
    //   type: 'www',
    //   serviceWorker: null, // disable service workers
    // },
  ],
  testing: {
    browserHeadless: 'new',
  },
};
