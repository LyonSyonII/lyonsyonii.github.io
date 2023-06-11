import { defineConfig } from "astro/config";
import compress from "astro-compress";
import preload from "astro-preload";

// https://astro.build/config
export default defineConfig({
  integrations: [preload(), compress()],
});
