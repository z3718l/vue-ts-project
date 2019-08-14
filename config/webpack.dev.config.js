const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const path = require('path')

module.exports = (env, argv) => {
  return merge(base(env, argv), {
    target: 'web',
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: [path.join(__dirname, '../dist')],
      hot: true,
      host: 'localhost',
      port: 8081,
      stats: 'errors-only',
    }
  })
}