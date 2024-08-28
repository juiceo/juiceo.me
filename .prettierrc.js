module.exports = {
	printWidth: 100,
	singleQuote: true,
	semi: true,
	useTabs: true,
	trailingComma: 'all',
	plugins: ['@ianvs/prettier-plugin-sort-imports'],
	importOrder: [
		'^react$',
		'<BUILTIN_MODULES>',
		'',
		'<THIRD_PARTY_MODULES>',
		'',
		'^[./]',
	],
	importOrderParserPlugins: [
		'typescript',
		'jsx',
		'["decorators-legacy", { "decoratorsBeforeExport": true }]',
	],
};