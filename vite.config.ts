import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
import tailwindConfig from "./tailwind.config.js";
import { visualizer } from "rollup-plugin-visualizer";
import config from "./gitprofile.config.js";

function getTailwindConfig() {
  let cfg = tailwindConfig;
  cfg.daisyui.themes = [...config.themeConfig.themes, { procyon: config.themeConfig.customTheme }];
  return cfg;
}

export default defineConfig({
  base: "/",
  plugins: [preact(), visualizer()],
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
    },
  },
  css: {
    postcss: {
      plugins: [tailwind(getTailwindConfig()), autoprefixer],
    },
  },
});
