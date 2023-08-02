/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
// const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Manrope Variable', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				'main-title': '#fdd55c',
				'titles-dark': '#212529',
				'titles-light': '#ffffff',
				'body-light': '#727c93',
				'body-dark': '#2e353e',
				'main-bg': '#ffffff',
				'secondary-bg': '#ecf1f7',
				'tertiary-bg': '#fdd55c'
			}
		}
	},
	plugins: [require('tailwindcss-animated')]
}
