/* eslint-disable @typescript-eslint/no-var-requires */
const autoprefixer = require('autoprefixer')
const pxtoviewport = require('postcss-px-to-viewport')

module.exports = {
  plugins: [
    autoprefixer(),
    pxtoviewport({
      viewportWidth: 375,
      minPixelValue: 1,
      unitPrecision: 4,
      selectorBlackList: ['ignore']
    })
  ]
}
