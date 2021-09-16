module.exports = {
  parser: 'vue-eslint-parser',
  env: {
    browser: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser'
  },
  plugins: ['vue', '@typescript-eslint', 'import'],
  rules: {
    // vue base
    'vue/no-unused-vars': [
      'error',
      {
        ignorePattern: '^_'
      }
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/no-v-html': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-indent': 0,
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 0,
    'vue/custom-event-name-casing': 0,
    'vue/eqeqeq': [2, 'always', { null: 'ignore' }],
    // common
    'no-unused-vars': ['error', { args: 'none' }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: [2, 'never'],
    'semi-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'comma-dangle': [2, 'never'],
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'comma-style': [2, 'last'],
    'arrow-parens': [2, 'as-needed'],
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    'jsx-quotes': 2,
    'no-async-promise-executor': 0,
    'space-before-function-paren': 0,
    'no-empty': 0,
    'spaced-comment': ['error', 'always'],
    'no-undef': 0,
    // import
    'import/order': 2,
    'import/first': 2,
    // typescript
    '@typescript-eslint/no-explicit-any': 0
  }
}
