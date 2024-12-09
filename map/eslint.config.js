const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const prettierPlugin = require('eslint-plugin-prettier');
const reactCompiler = require('eslint-plugin-react-compiler');

module.exports = [
    {
        files: ['**/*.js', '**/*.jsx', '**/*.mjs', 'src/resources/scripts/*.mjs'],
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                window: 'readonly',
                document: 'readonly',
                console: 'readonly',
                module: 'readonly',
                require: 'readonly',
                process: 'readonly',
            },
        },
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            prettier: prettierPlugin,
            'react-compiler': reactCompiler,
        },
        rules: {
            'prettier/prettier': 'warn',
            'react-hooks/rules-of-hooks': 'warn',
            'react/no-children-prop': 'warn',
            'react/jsx-no-target-blank': 'warn',
            'react-compiler/react-compiler': 'off',
            'react-hooks/exhaustive-deps': 'off',
            'react/no-array-index-key': 'off',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
