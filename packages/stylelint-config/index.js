module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recommended-less',
    'stylelint-config-recess-order',
  ],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less',
    },
  ],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep'], // 忽略 :deep 选择器
      },
    ],
  },
}
