/*
 * @Description: 
 * @Version: 2.0
 * @Autor: zhangxin
 * @Date: 2022-11-30 09:45:35
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-01-09 15:38:59
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭elint
  publicPath: './', // 基本路径
  outputDir: 'dist', // 输出文件目录
  lintOnSave: false, // eslint-loader 是否在保存的时候检查
  assetsDir: 'static', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  devServer: {
    host: '0.0.0.0',
    port: 8001, // 端口号
    https: false, // https:{type:Boolean}
    open: false, //配置自动启动浏览器 
    hot: true, // 热更新
    proxy: {
      '/api': {
        target: 'http://192.168.119.194:8083',
        changeOrigin: true, // 是否需要跨域
        ws: true,
        secure: false,  // 接收对方是htrtps的接口,能够接收无效证书的https请求
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
})
