const fs = require('fs')
const chalk = require('chalk')
const config = require('./config')
const exec = require('child_process').exec

fs.readdir(config.prod.path, function(err, files) {
  if (err) throw err
  if (files.length === 0) {
    console.log(chalk.red('not found bunde.\n'))
    return
  }
  const last = files.map(function(name) {
    const r = name.match(/bundle([^-]+)-(\d+)\.js/)
    return {
      hash: r[1],
      time: parseInt(r[2] || '0', 10)
    }
    return parseInt(name.match(/-(\d+)\.js/)[1] || '0', 10)
  }).sort(function(a, b) {
    return b.time - a.time 
  }).map(function(r) {
    return [config.prod.path, '/', 'bundle', r.hash, '-', r.time, '.js'].join('')
  })[0]
  console.log('start bundle is ' + last)
  server = exec('node ' + last)
  server.stdout.on('data', function(data) {
    process.stdout.write(chalk.green(data))
  })
  server.stderr.on('data', function (data) {
    process.stdout.write(chalk.red(data))
  })
  server.on('close', function(data) {
    console.log(chalk.red('server is closed'))
  })
})