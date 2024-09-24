import { Config } from "@stencil/core";
import copy from "rollup-plugin-copy";
import { reactOutputTarget } from "@stencil/react-output-target";
import { angularOutputTarget } from "@stencil/angular-output-target";

export const config: Config = {
  namespace: "library",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "dist-custom-elements",
      customElementsExportBehavior: "single-export-module",
      externalRuntime: false,
      generateTypeDeclarations: true,
    },
    reactOutputTarget({
      outDir: "../packages/react/src/auto-generated/",
    }),
    angularOutputTarget({
      outputType: "standalone",
      componentCorePackage: "@poc-stencil/library",
      directivesProxyFile: "../packages/angular/src/auto-generated/components.ts",
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
  // globalStyle: "src/assets/css/global.css",
  rollupPlugins: {
    after: [
      copy({
        verbose: true,
        copySync: true,
        targets: [
          {
            src: "src/assets",
            dest: "dist",
          },
        ],
      }),
    ],
  },
};
