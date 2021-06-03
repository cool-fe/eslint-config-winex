module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
  },
  plugins: ["vue"],
  extends: [
    "plugin:vue/recommended", // extends base config with recommended rules
    "./eslintrc.es6.js",
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".vue", ".jsx", ".json"],
      },
    },
  },
  rules: {},
};
