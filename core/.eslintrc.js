module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint",
        "prettier"
    ],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier",
        "prettier/@typescript-eslint",
        "../.eslintrc.js"
    ],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./src/tsconfig.json", "./spec/src/tsconfig.json"]
    },
    env: {
        "jasmine": true,
    },
    rules: {
        "@typescript-eslint/no-throw-literal": "error",
        "@typescript-eslint/no-implied-eval": "warn",
        "@typescript-eslint/no-unnecessary-condition": "warn",
        "@typescript-eslint/prefer-nullish-coalescing": "warn",
        "@typescript-eslint/prefer-optional-chain": "warn",
        "@typescript-eslint/no-dynamic-delete": "warn",
        "@typescript-eslint/no-extra-non-null-assertion": "warn",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "warn",
        "@typescript-eslint/prefer-readonly": "warn",
        "@typescript-eslint/consistent-type-assertions": [
            "warn",
            {
                "assertionStyle": "angle-bracket"
            }
        ],
        "@typescript-eslint/no-floating-promises": "error",
    }
};
