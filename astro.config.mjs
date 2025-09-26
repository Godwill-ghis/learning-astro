// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://68d5450ccdae8215112ae7d4--astroblog234.netlify.app",
  integrations: [preact()]
});