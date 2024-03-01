const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,//关闭eslint
  devServer: {//配置跨域
    proxy: {//配置跨域
      '/api': {//代理api
        target: 'http://ustbhuangyi.com/sell/',//目标地址
        changeOrigin: true,//允许跨域
        pathRewrite: {//重写路径
          '^/api': '/api'
        }
      }
    }
  }
})
