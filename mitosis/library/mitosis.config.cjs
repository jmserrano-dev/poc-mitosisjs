const injectCssPlugin = require("./plugins/inject-css.cjs");
const copyAssetsPlugin = require("./plugins/copy-assets.cjs");

const getTargetPath = ({ target }) => {
  return `../packages/${target}/src/auto-generated`;
};

const getTargetAssetsPath = ({ target }) => {
  return getTargetPath({ target }) + "/assets";
};

/**
 * @type {import('@builder.io/mitosis').MitosisConfig}
 */
module.exports = {
  files: "src/**",
  targets: ["react", "angular"],
  dest: "../packages",
  getTargetPath,
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
          destination: getTargetAssetsPath({ target: "react" }),
        }),
      ],
    },
    angular: {
      standalone: true,
      plugins: [
        copyAssetsPlugin({
          source: "./src/assets",
          destination: getTargetAssetsPath({ target: "angular" }),
        }),
      ],
    },
  },
};
