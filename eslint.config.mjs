import nextPlugin from "@next/eslint-plugin-next";
import eslintConfigNext from "eslint-config-next";

export default [
  ...eslintConfigNext,
  {
    plugins: {
      "@next/next": nextPlugin
    },
    rules: {
      "@next/next/no-html-link-for-pages": "off"
    }
  }
];
