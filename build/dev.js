var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var opn = require('opn')
var devConfig = require('./webpack.config')

devConfig.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/");

var compiler = webpack(devConfig);
var server = new WebpackDevServer(compiler, {
    contentBase:'dist/'
});

server.listen(8080, err => {
  if (err) {
    console.log(err)
    return
  }
  const uri = 'http://localhost:8080'
  console.log('Listening at ' + uri + '\n')
  opn(uri)
})