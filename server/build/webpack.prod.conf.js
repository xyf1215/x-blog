const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base.conf')
const webpack = require('webpack')
const UglifyEsPlugin = require('uglify-es-webpack-plugin')
const config = require('./config')

module.exports = merge(base, {
  output: {
    filename: config.prod.bundleName,
    path: config.prod.path
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve(__dirname, '../src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new UglifyEsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
})
