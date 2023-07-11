module.exports = {
  extends: ['stylelint-config-recommended-vue', 'stylelint-config-rational-order'],
  overrides: [
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less'
    }
  ]
}
