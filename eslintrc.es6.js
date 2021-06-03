module.exports = {
  extends: [
    "eslint:recommended",
    "airbnb-base",
    "plugin:import/errors",
    "plugin:import/warnings",
    "./eslintrc.base.js",
  ],
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: "module",
  },
  parser: "babel-eslint",
  env: {
    es6: true,
    node: true
  },
  globals: {
    Promise: true,
    Analytics: true,
  },
};
