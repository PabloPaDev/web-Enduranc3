import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./sections/**/*.{js,ts,jsx,tsx,mdx}",
	],
	safelist: [
		{ pattern: /(bg|text|border|ring)-ciclo-activa(\/\d+)?/, variants: ["hover", "focus", "focus-visible"] },
	],
	theme: {
		extend: {
			colors: {
				"ciclo-activa": "#B639C5",
			},
			container: {
				center: true,
				padding: "1rem",
			},
			fontFamily: {
				sans: [
					"var(--font-righteous)",
					"sans-serif",
				],
				heading: [
					"var(--font-righteous)",
					"sans-serif",
				],
			},
		},
	},
	plugins: [],
};
export default config;
