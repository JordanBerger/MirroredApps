import nodePath from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = nodePath.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:unicorn/recommended",
  ),
  {
    rules: {
      "unicorn/prevent-abbreviations": "off",
    },
  },
];

export default eslintConfig;
