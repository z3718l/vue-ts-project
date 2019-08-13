const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // entry: path.join(__dirname, 'src/h5/pages/index.js'),
  entry: './src/pages/index.ts',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },{
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.vue', '.js', '.ts'],
    modules: ['node_modules'],
    alias: {
      vue: 'vue/dist/vue.min.js',
      '@': path.join(__dirname, `../src`)
    }
  },
  plugins: [
    // new webpack.HashedModuleIdsPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html')
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    host: 'localhost',
    open: true,
    port: 8081
  }
}