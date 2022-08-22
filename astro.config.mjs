import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
	experimental: {
		integrations: true,
	},
	integrations: [tailwind(), vue(), sitemap(), astroI18next()],
});
