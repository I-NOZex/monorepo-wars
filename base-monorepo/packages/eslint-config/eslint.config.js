import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import unusedImports from 'eslint-plugin-unused-imports';
import sortDestructureKeys from 'eslint-plugin-sort-destructure-keys';
import sortImports from 'eslint-plugin-sort-imports-es6-autofix';
import stylistic from '@stylistic/eslint-plugin';
export default tseslint.config({
  extends: [js.configs.recommended, ...tseslint.configs.recommendedTypeChecked],
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,

    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },

  settings: {
    react: {
      version: 'detect', // Automatically detects the React version
    },
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    react,
    'unused-imports': unusedImports,
    'sort-destructure-keys': sortDestructureKeys,
    'sort-imports-es6-autofix': sortImports,
    stylistic,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,

    'stylistic/jsx-max-props-per-line': ['error', { maximum: 1 }],
    'stylistic/jsx-first-prop-new-line': ['error', 'multiprop'],
    'stylistic/jsx-indent': ['error', 2],
    'stylistic/jsx-indent-props': ['error', 2],

    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-sparse-arrays': 'error',
    'no-trailing-spaces': 'error',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'no-var': 'error',
    'prefer-const': 'error',
    'react/no-typos': 'error',
    eqeqeq: ['error', 'always'],
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': ['off', { accessibility: 'explicit' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'off',
      {
        multiline: { delimiter: 'none', requireLast: true },
        singleline: { delimiter: 'semi', requireLast: false },
      },
    ],
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/naming-convention': [
      'off',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
    ],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-shadow': ['off', { hoist: 'all' }],
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/semi': ['off', null],
    '@typescript-eslint/triple-slash-reference': ['error', { path: 'always', types: 'prefer-import', lib: 'always' }],
    '@typescript-eslint/typedef': 'off',
    '@typescript-eslint/unified-signatures': 'error',
    'unused-imports/no-unused-imports': 'error',
    'sort-destructure-keys/sort-destructure-keys': ['error', { caseSensitive: true }],
    'sort-imports-es6-autofix/sort-imports-es6': [
      'error',
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
  },
});
