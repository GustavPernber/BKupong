import { defineConfig } from "astro/config"

// https://astro.build/config
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
import svelte from "@astrojs/svelte"

import AstroPWA from "@vite-pwa/astro"

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		svelte(),
		AstroPWA({
			// mode: "development",
			base: "/",
			scope: "/",
			includeAssets: ["favicon.ico"],
			registerType: "autoUpdate",
			manifest: {
				icons: [
					{ src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
					{ src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
				],

				display: "standalone",
				name: "BKupong",
				short_name: "BKupong",
				theme_color: "#151520",
				background_color: "#151520"
			},
			workbox: {
				globPatterns: ["**/*.{css,js,html,svg,png,ico,txt}"]
			}
			// devOptions: {
			// 	enabled: true
			// }
		})
	]
})
