module.exports = {
  env: {
    browser: true,
  },
  plugins: ['@builder.io/mitosis'],
  extends: ['plugin:@builder.io/mitosis/recommended', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
