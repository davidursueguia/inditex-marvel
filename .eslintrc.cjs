module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:jsx-a11y/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:jest/recommended",              
        "prettier",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        project: "./tsconfig.json", 
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    plugins: ["react", "react-hooks", "prettier", "@typescript-eslint", "jest"],
    rules: {
        "prettier/prettier": ["error"],
        "react/prop-types": "off",
        "import/no-unresolved": "off",
    },
    overrides: [
        {
            files: ["jest.config.ts"], 
            rules: {
                "@typescript-eslint/no-var-requires": "off",
            }
        }
    ],
};
