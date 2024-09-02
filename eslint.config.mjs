import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    // Integrate Prettier
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      // Make Prettier errors show up as ESLint errors
      "prettier/prettier": "error",
    },
  },
  // Disable ESLint rules that conflict with Prettier
  configPrettier,
];
