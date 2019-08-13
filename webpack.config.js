const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
          'postcss-loader',
          {
            loader: 'sass-resources-loader',
            options: {
                resources: [
                    path.resolve(__dirname, './src/assets/scss/global.scss').toString()
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
    modules: ['node_modules'],
    alias: {
      vue: 'vue/dist/vue.min.js',
      '@': path.join(__dirname, `./src`)
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
    // open: true,
    port: 8081
  }
}