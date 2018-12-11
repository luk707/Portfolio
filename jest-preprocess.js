const babelOptions = {
  presets: ['env', 'react'],
  plugins: ['transform-flow-strip-types'],
}

module.exports = require('babel-jest').createTransformer(babelOptions)
