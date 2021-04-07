module.exports = {
    root: true,
    plugins: ['import'],
    extends: ['eslint:recommended', 'plugin:import/errors', 'plugin:import/warnings'],
    env: {
        es6: true,
        node: false,
    },
    ignorePatterns: ['./node_modules', './package.json', './package-lock.json'],
    rules: {
        'no-inner-declarations': 'off',
        'semi': 'error',
        'space-infix-ops': 'error',
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            plugins: ['@typescript-eslint'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                tsconfigRootDir: __dirname,
                project: ['./tsconfig.json'],
            },
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'plugin:import/typescript',
            ],
            rules: {
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/no-use-before-define': 'off',
                '@typescript-eslint/no-enum': 'off',
                '@typescript-eslint/no-namespace': 'off',
                '@typescript-eslint/no-non-null-assertion': 'error',
                'no-restricted-syntax': [
                    'error',
                    {
                        selector: 'TSEnumDeclaration',
                        message: "Don't use enums. Use union type instead.",
                    },
                ],
            },
        },
        {
            files: ['.eslintrc.js', '.prettierrc.js', 'babel.config.js', 'jest.config.js'],
            env: {
                node: true,
            },
        },
    ],
};
