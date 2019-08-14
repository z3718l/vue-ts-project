// const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

module.exports = (env, argv) => {
  return {
    // Node.js 中，__dirname 总是指向被执行 js 文件的绝对路径
    // entry: '../src/pages/index.ts',
    entry: path.resolve(__dirname, '../src/pages/index.ts'),
    output: {
      path: path.resolve(__dirname, '../dist'),
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
          loader: 'ts-loader',
          options: {
            // 如果不加这一块，render方法会出错
            appendTsSuffixTo: [/\.vue$/]
          }
        },
        {
          test: /\.(css|scss)$/,
          use: [
            {
              // 正式环境下，css从js中分离出来
              loader: argv.mode !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader
            },
            'css-loader',   // 解析css
            'sass-loader',  // 解析sass
            'postcss-loader', // 添加浏览器前缀
            {
              // 全局引入global.scss
              loader: 'sass-resources-loader',
              options: {
                  resources: [
                      path.resolve(__dirname, '../src/assets/scss/global.scss').toString()
                  ]
              }
          }
          ]
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [{
            loader: "file-loader",
            options: {
              name: 'style/fonts/[name].[ext]'
            }
          }]
        }
      ]
    },
    resolve: {
      extensions: ['.vue', '.js', '.ts'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.join(__dirname, `../src`)
      }
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        favicon: path.resolve(__dirname, '../src/assets/favicon.ico'),
        inject: true,
        template: path.resolve(__dirname, '../index.html'),
        minify: {
          removeComments: true,
          collapseWhitespace: true
        }
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'style/[name].css',
        chunkFilename: 'style/[name].css'
      })
    ]
  }
}