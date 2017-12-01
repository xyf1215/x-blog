const path = require('path')

module.exports = {
  dev: {
    bundleName: 'devBundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  prod: {
    bundleName: 'bundle[hash].js',
    path: path.resolve(__dirname, '../dist/prod')
  }
}