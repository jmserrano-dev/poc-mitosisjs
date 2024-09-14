const injectCssPlugin = require("./plugins/inject-css.cjs");

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
    },
    angular: {
      standalone: true,
    },
  },
};
