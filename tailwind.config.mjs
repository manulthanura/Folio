/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			primary: '#facc15',
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			emerald: colors.emerald,
			indigo: colors.indigo,
			yellow: colors.yellow,
		  },
		fontFamily: {
			sans: [
			  'Urbanist',
			  'ui-sans-serif',
			  'system-ui',
			  '-apple-system',
			  'BlinkMacSystemFont',
			  '"Segoe UI"',
			  'Roboto',
			  '"Helvetica Neue"',
			  'Arial',
			  '"Noto Sans"',
			  'sans-serif',
			  '"Apple Color Emoji"',
			  '"Segoe UI Emoji"',
			  '"Segoe UI Symbol"',
			  '"Noto Color Emoji"',
			],
			serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
			mono: [
			  'ui-monospace',
			  'SFMono-Regular',
			  'Menlo',
			  'Monaco',
			  'Consolas',
			  '"Liberation Mono"',
			  '"Courier New"',
			  'monospace',
			]
		}
	},
	plugins: [],
}
