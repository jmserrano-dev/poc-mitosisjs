import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'library',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'single-export-module',
      externalRuntime: false,
      generateTypeDeclarations: true,
    },
    reactOutputTarget({
      outDir: '../packages/react/src/auto-generated/',
    }),
    angularOutputTarget({
      outputType: 'standalone',
      componentCorePackage: '@poc-stencil/library',
      directivesProxyFile: '../packages/angular/src/auto-generated/components.ts',
    }),
  ],
  testing: {
    browserHeadless: 'new',
  },
};
