const webpack = require('webpack')

const baseConfig = require('./webpack.base.config')

const webpackConfig = Object.assign({}, baseConfig, {
  devtool: '#inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"test"'
    })
  ]
})

// no need for app entry during tests
delete webpackConfig.entry

module.exports = webpackConfig
