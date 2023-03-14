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
				"no-console": "off",
				"@typescript-eslint/no-floating-promises": "warn",
			},
		},
	],
};
