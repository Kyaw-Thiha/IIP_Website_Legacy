import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
	experimental: {
		integrations: true,
	},
	integrations: [tailwind(), sitemap(), astroI18next()],
});
