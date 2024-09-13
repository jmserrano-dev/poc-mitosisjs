/**
 * @type {import('@builder.io/mitosis').MitosisConfig}
 */
module.exports = {
  files: "src/**",
  targets: ["react", "angular"],
  dest: "../packages",
  commonOptions: {
    typescript: true,
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
