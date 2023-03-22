module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-html',
    'stylelint-config-recommended-vue',
    'stylelint-config-recommended-less'
  ],
  overrides: [
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less'
    }
  ],
  plugins: ['stylelint-order'],
  rules: {
    'order/order': ['declarations', 'custom-properties', 'dollar-variables', 'rules', 'at-rules'],
    'order/properties-order': ['position', 'top', 'right', 'bottom', 'left', 'float'],
    'order/properties-alphabetical-order': null,
    'media-feature-name-no-vendor-prefix': true,
    'selector-no-vendor-prefix': null,
    'property-no-vendor-prefix': null,
    'rule-empty-line-before': null,
    'selector-pseudo-class-no-unknown': null,
    'font-family-no-missing-generic-family-keyword': null,
    'no-descending-specificity': null,
    'declaration-empty-line-before': null,
    'at-rule-no-unknown': null,
    'property-no-unknown': null,
    'declaration-block-single-line-max-declarations': null,
    'value-no-vendor-prefix': null,
    'no-empty-source': null,
    'at-rule-no-vendor-prefix': null,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep', 'deep']
      }
    ],
    'function-calc-no-unspaced-operator': null,
    'selector-class-pattern': null,
    'max-nesting-depth': null,
    'font-family-name-quotes': null,
    'selector-max-compound-selectors': null,
    'selector-no-qualifying-type': null,
    'selector-max-id': null,
    'color-function-notation': null,
    'alpha-value-notation': null
  }
}
