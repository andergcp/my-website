/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'main-titles': '#FF7F5B',
        'secondary-titles': '#E8F9FD',
        'main-bg': '#FFFFFF',
        'secondary-bg':'#D2EBCD',
      },
    },
  },
  plugins: [],
};
