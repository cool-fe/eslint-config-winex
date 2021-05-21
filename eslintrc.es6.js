module.exports = {
  extends: ["airbnb-base", "./eslintrc.base.js"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  parser: "babel-eslint",
  env: {
    es6: true,
  },
  globals: {
    Promise: true,
    Analytics: true,
  },
  rules: {
    // 禁止使用commonjs规范
    "import/no-unresolved": ["error", { commonjs: false }],
  },
};
