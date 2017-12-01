process.env.NODE_ENV = 'dev'

const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const webpackConfig = require('./webpack.dev.conf')
const config = require('./config')
const exec = require('child_process').exec
const server = null

function startServer() {
  if (server) {
    server.kill()
    server = null
  }
  server = exec('node ' + config.dev.path + '/' + config.dev.bundleName)
  server.stdout.on('data', function(data) {
    process.stdout.write(chalk.green(data))
  })
  server.stderr.on('data', function (data) {
    process.stdout.write(chalk.red(data))
  })
  server.on('close', function(data) {
    console.log(chalk.red('server is closed'))
  })
}

rm(config.dev.path + '/' + config.dev.bundleName, err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n')
    if (stats.hasErrors()) {
      console.log(chalk.red('Build failed with errors.\n'))
    } else {
      startServer()
    }
    console.log(chalk.cyan(new Date() + ' Build complete.'))
  })
})
