module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
        createDefaultProgram: true,
    },
    plugins: ['prettier', '@typescript-eslint', 'react'],
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    env: {
        es6: true,
        node: true,
    },
    ignorePatterns: ['./node_modules', './package.json', './package-lock.json'],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-non-null-assertion': 'error',
        'no-inner-declarations': 'off',
        'semi': 'error',
        'space-infix-ops': 'error',
        'prettier/prettier': [
            'error',
            {
                tabWidth: 4,
                singleQuote: true,
                printWidth: 140,
                quoteProps: 'consistent',
            },
        ],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/react-in-jsx-scope': 'error',
    },
};
