const injectCssPlugin = require("./plugins/inject-css.cjs");
const copyAssetsPlugin = require("./plugins/copy-assets.cjs");

/**
 * @type {import('@builder.io/mitosis').MitosisConfig}
 */
module.exports = {
  files: "src/**",
  targets: ["react", "angular"],
  dest: "../packages",
  commonOptions: {
    typescript: true,
    plugins: [injectCssPlugin("src/components")],
  },
  options: {
    react: {
      stylesType: "style-tag",
      plugins: [
        copyAssetsPlugin({
          source: "./src/assets",
          destination: "../packages/react/src/assets",
        }),
      ],
    },
    angular: {
      standalone: true,
      plugins: [
        copyAssetsPlugin({
          source: "./src/assets",
          destination: "../packages/angular/src/assets",
        }),
      ],
    },
  },
};
