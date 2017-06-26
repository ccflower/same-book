var webpack = require('webpack')
var prodConfig = require('./webpack.config')

webpack(prodConfig, function (err, stats) {
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
