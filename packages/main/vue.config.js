
const NODE_ENV = process.env.NODE_ENV
module.exports = {
  publicPath: NODE_ENV === 'production' ? '/' : './',
  productionSourceMap: false, // 提升编译速度
  css: {
    // 开启 CSS source maps?
    sourceMap: false,
    loaderOptions: {
      sass: {
        // data: `@import "@/assets/css/variables.scss";`
      }
    }
  },
  devServer: {
    disableHostCheck: true,
    host: 'localhost.qizhidao.com',
    port: 8080
    
  },
}
