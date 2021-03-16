/* eslint-disable quotes */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "class-methods-use-this": "off",
    "no-param-reasing": "off",
    camelCase: "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
    "prettier/prettier": "error",
  },
};
