import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'library',
  outputTargets: [
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'single-export-module',
      externalRuntime: false,
    },
    reactOutputTarget({
      outDir: '../packages/react/src/components/',
    }),
    angularOutputTarget({
      outputType: 'standalone',
      componentCorePackage: '@poc-stencil/library',
      directivesProxyFile: '../packages/angular/src/components/components.ts',
      // directivesArrayFile: '../packages/angular/src/index.ts',
    }),
    // {
    //   type: 'www',
    //   serviceWorker: null, // disable service workers
    // },
    // {
    //   type: 'docs-readme',
    // },
    // {
    //   type: 'dist',
    //   esmLoaderPath: '../loader',
    // },
  ],
  testing: {
    browserHeadless: 'new',
  },
};
