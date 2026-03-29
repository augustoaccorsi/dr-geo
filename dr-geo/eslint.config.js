import js from '@eslint/js'
import reactPlugin from 'eslint-plugin-react'
import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: reactPlugin,
      '@typescript-eslint': ts,
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // not needed for React 17+
    },
  },
]
