module.exports = {
	env: {
		node: true,
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeature: {
			jsx: true,
		},
	},
	plugins: ['react'],
	rules: {
		'react/prop-types': ['off'],
		'react/react-in-jsx-scope': 'off',
	},
}