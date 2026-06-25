import js from "@eslint/js";
export default [
  js.configs.recommended,
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: { ecmaVersion: 2022, sourceType: "module", parserOptions: { ecmaFeatures: { jsx: true } } },
    rules: { "no-unused-vars": "warn", "no-console": "warn" },
  },
  { ignores: ["node_modules/", "dist/", "out/"] },
];
