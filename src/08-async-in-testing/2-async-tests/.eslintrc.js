module.exports = {
	extends: ["react-app", "react-app/jest", "eslint-config-codely/typescript"],
	settings: {
		"import/resolver": {
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
		},
	},
	overrides: [
		{
			files: ["**/*.ts"],
			parserOptions: {
				project: ["./tsconfig.json"],
			},
		},
		{
			files: ["**/tests/e2e/**/*.spec.ts"],
			rules: {
				"testing-library/await-async-query": 0,
				"@typescript-eslint/no-unsafe-member-access": 0,
				"@typescript-eslint/no-unsafe-call": 0,
				"testing-library/prefer-screen-queries": 0,
			},
		},
	],
};
