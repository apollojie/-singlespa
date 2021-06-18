// NODE_ENV: 'development'开发环境， 'production'生产环境
const NODE_ENV = process.env.NODE_ENV

const CDN_URL = `/${process.env.VUE_APP_NAME}/`
const StatsPlugin = require('stats-webpack-plugin')

const { name } = require('./package.json');

// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const port = 8062
module.exports = {
  publicPath: NODE_ENV === 'production' ? CDN_URL : `//localhost.qizhidao.com:${port}/`,
  productionSourceMap: false, // 提升编译速度
  css: {
    // 开启 CSS source maps?
    sourceMap: false,
    loaderOptions: {
      sass: {
        // data: `@import "@/assets/UI/variables.scss";`
      }
    }
  },
  devServer: {
    disableHostCheck: true,
    host: 'localhost.qizhidao.com',
    port: 8062,
    headers: {
      'Access-Control-Allow-Origin': '*' // 主应用获取子应用时跨域响应头
    }
  },
  // chainWebpack: config => {
  //   // config.output.filename('js/[name].[hash].js').end()
  //   // config.externals({'lodash': 'lodash'})
  // },
  configureWebpack: {
    output: {
      library: process.env.VUE_APP_NAME,
      libraryTarget: 'window'
      // library: `${name}-[name]`,
      // libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      // jsonpFunction: `webpackJsonp_${name}`,
    },
    plugins: [
      new StatsPlugin('manifest.json', {
        chunkModules: false,
        entrypoints: true,
        source: false,
        chunks: false,
        modules: false,
        assets: false,
        children: false,
        exclude: [/node_modules/]
      })
    ],
    performance: {
      hints: 'warning',
      // 入口起点的最大体积 整数类型（以字节为单位）
      maxEntrypointSize: 50000000,
      // 生成文件的最大体积 整数类型（以字节为单位 300k）
      maxAssetSize: 30000000,
      // 只给出 js 文件的性能提示
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js')
      }
    }
  }
}
