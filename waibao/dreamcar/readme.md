#小程序业务架构
-App和Page的概念
 App 全局 pages共享的
 app.js 共享 globalData
 app.wxss样式
 app.json 应用配置
-globalData如何来到page中的
  - const app = getApp()
    全局对象
  -data 初始化占位符
  {
    data：{
      user：{}//空的
    }
  }
  - 生命周期
    数据来自于后端接口
    onLoad wxml+wxss 显示
    这是请求数据的最佳时机
  - this.setData({
    user:真正的值
  })
  - 页面会热更新 重新绘制{{}}这部分