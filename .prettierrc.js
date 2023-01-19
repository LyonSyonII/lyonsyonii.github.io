module.exports = {
  semi: true,
  arrowParens: "always",
  bracketSpacing: true,
  printWidth: 100,
  singleQuote: false,
  tabWidth: 2,
  endOfLine: "auto",
  plugins: [require("prettier-plugin-organize-imports"), require("prettier-plugin-tailwindcss")],
  pluginSearchDirs: false,
  tailwindConfig: "./tailwind.config.js",
};
