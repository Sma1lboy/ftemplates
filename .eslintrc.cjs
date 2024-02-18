module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {ecmaVersion: "latest", sourceType: "module"},
  settings: {react: {version: "18.2"}},
  plugins: ["react"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "indent": ["error", 2],
    "linebreak-style": 0, //
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "no-unused-vars": "off",
  },
};
