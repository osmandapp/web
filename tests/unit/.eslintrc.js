module.exports = {
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    env: {
        node: true,
        browser: true,
        jest: true,
        es2021: true,
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
};
