// prettier.config.js
module.exports = {
	printWidth: 100,
	semi: false,
	singleQuote: true,
	jsxSingleQuote: true,
	tabWidth: 2,
	trailingComma: 'none',
	useTabs: true,
	overrides: [
		{
			files: ['*.json', '*.md', '*.toml', '*.yml', '*astro'],
			options: {
				parser: 'astro'
			}
		}
	],
	endOfLine: 'lf',
	plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-astro']
}
