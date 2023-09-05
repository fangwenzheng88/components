module.exports = {
  extends: ['airbnb-base', 'plugin:vue/vue3-recommended', '@vue/eslint-config-typescript', '@vue/eslint-config-prettier'],
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'prettier/prettier': ['error', { printWidth: 200 }],
    // 重置airbnb-base中的规则
    'no-shadow': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    // 重置airbnb-base中的规则，允许在for循环中使用 `++` 和 `--`
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    // 与@typescript-eslint/no-use-before-define规则重复
    'no-use-before-define': 'off',
    // 重置airbnb-base中的规则，允许对函数参数的属性进行修改
    'no-param-reassign': ['error', { props: false }],
    // 重置airbnb-base中的规则，允许使用ForOfStatement、ForInStatement语法
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    // 重置airbnb-base中的规则
    'no-restricted-exports': 'off',
    // eslint-plugin-import
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    // eslint-plugin-vue
    'vue/no-v-html': 'off',
    'vue/require-v-for-key': 'off',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
    // typescript-eslint
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: false }]
  }
}
