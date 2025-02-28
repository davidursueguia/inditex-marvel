module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:jsx-a11y/recommended",
        "prettier",
    ],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    plugins: ["react", "react-hooks", "prettier"],
    rules: {
        "prettier/prettier": ["error"],
        "react/prop-types": "off",
        "import/no-unresolved": "off",
    },
};
