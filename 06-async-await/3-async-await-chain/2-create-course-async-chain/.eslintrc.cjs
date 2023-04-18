module.exports = {
	extends: ["eslint-config-codely/typescript"],
	root: true,
	overrides: [
		{
			files: ["*.ts"],
			parserOptions: {
				project: ["./tsconfig.json"],
			},
			rules: {
				"@typescript-eslint/no-floating-promises": "warn",
			},
		},
	],
};
