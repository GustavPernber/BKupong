/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			sans: ["Inter", ...defaultTheme.fontFamily.sans],
		},

		extend: {
			colors: {
				bgBlue: "#151520",
				greyBlue: "#25323F",
				blueStroke: "#163451",
				ctaGreen: "#228945",
				greenStroke: "#17DB59",
				white: "#EBF2F5",
			},
		},
	},
	plugins: [],
}
