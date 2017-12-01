const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.conf')
const config = require('./config')

module.exports = merge(base, {
  watch: true,
  watchOptions: {
    aggregateTimeout: 500,
    poll: 1000
  },
  output: {
    filename: config.dev.bundleName,
    path: config.dev.path
  },
  plugins: [
   
  ]
})

console.log(path.resolve(__dirname, '../dist'))