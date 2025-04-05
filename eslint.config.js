export default [
    {
        files: ["**/*.js", "**/*.ts"],
        languageOptions: {
            sourceType: "module",
            ecmaVersion: 2021,
            globals: {
                window: "readonly",
                console: "readonly",
            },
        },
        rules: {
            "no-console": "off",
            "semi": ["error", "always"],
            "quotes": ["error", "single"],
        },
    },
];
