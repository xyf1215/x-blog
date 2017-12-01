process.env.NODE_ENV = 'production'

const moment = require('moment')
const fs = require('fs')
const ora = require('ora')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const webpackConfig = require('./webpack.prod.conf')
const config = require('./config')

function renameBundle(dir, name, hash) {
  const bundleTime = moment(new Date()).format('YYMMDDHHmmss')
  const oldBundleName = [dir, name, hash, '.js'].join('')
  const newBundleName = [dir, name, hash, '-', bundleTime, '.js'].join('')
  fs.renameSync(oldBundleName, newBundleName)
  console.log(chalk.blue('new bundle is ' + newBundleName))
}

const spinner = ora('building for production...')
spinner.start()

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  if (stats.hasErrors()) {
    console.log(chalk.red('Build failed with errors.\n'))
    process.exit(1)
  } else {
    renameBundle(config.prod.path + '/', 'bundle', stats.hash)
  }
  console.log(chalk.cyan('Build complete.\n'))
})
