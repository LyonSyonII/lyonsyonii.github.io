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
  // If you are deploying to https://<USERNAME>.github.io/, set base to '/'.
  // If you are deploying to https://<USERNAME>.github.io/<REPO>/, for example your repository is at https://github.com/<USERNAME>/<REPO>, then set base to '/<REPO>/'.
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
