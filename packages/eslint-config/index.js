module.exports = {
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier'
  ],
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // eslint-plugin-import
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    // eslint-plugin-vue
    'vue/no-v-html': 'off',
    'vue/require-v-for-key': 'off',
    // typescript-eslint
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
}
