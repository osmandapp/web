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
    // the benchmarks share tests/bench.mjs with the unit benchmarks, the package is never published
    overrides: [
        { files: ['src/bench/**', 'src/options.mjs', 'src/util.mjs'], rules: { 'node/no-unpublished-import': 'off' } },
    ],
};
