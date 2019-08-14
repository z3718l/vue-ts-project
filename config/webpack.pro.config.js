const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')

module.exports = (env, argv) => {
  return merge(base(env, argv), {
    mode: 'production',
    // webpack中的externals配置提供了不从bundle中引用依赖的方式
    /**
     * 怎么理解呢，意思是如果需要引用一个库，但是又不想让webpack打包（减少打包的时间），
     * 并且又不影响我们在程序中以CMD、AMD或者window/global全局等方式进行使用（一般都以import方式引用使用），
     * 那就可以通过配置externals。
     * 这样做的目的就是将不怎么需要更新的第三方库脱离webpack打包，不被打入bundle中，
     * 从而减少打包时间，但又不影响运用第三方库的方式，例如import方式等
     */
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'axios': 'axios',
      'vuex': 'Vuex',
      'element-ui': 'ELEMENT'
    },
    plugins: [
      new HtmlWebpackIncludeAssetsPlugin({
        // 通过允许您指定要包含的JS或CSS资产来增强HTML Webpack插件功能。
        assets: [
          {
            path: '//cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.min.js',
            type: 'js'
          }
        ],
        append: false,
        publicPath: ''
      })
    ]
  })
}
