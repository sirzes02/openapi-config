import js from '@eslint/js';
import globals from 'globals';
import tseslint, { ConfigWithExtends } from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

const commonValues: ConfigWithExtends['rules'] = {
  'no-unused-vars': [
    'error',
    {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
    },
  ],
};

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.js'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': commonValues['no-unused-vars'],
      '@typescript-eslint/no-unused-vars': commonValues['no-unused-vars'],
    },
    ignores: ['node_modules', 'dist', 'build', 'coverage', 'src/generated/**'],
  },
  prettier,
]);
