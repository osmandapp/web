module.exports = {
    extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:node/recommended'],
    env: {
        node: true,
        es2021: true,
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'node/no-unsupported-features/es-syntax': 'off',
    },
};
