module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "react"],
  rules: {
    "react-refresh/only-export-components": ["warn", {allowConstantExport: true}],
    "indent": ["error", 2],
    "linebreak-style": 0, //
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "no-unused-vars": "off",
  },
};
