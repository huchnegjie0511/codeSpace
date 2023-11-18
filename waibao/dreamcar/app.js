//应用
//page（）页面

const { composeRawBufferEntity2D } = require("XrFrame/kanata/lib/index")

//配置
App({
  globalData:{
    
  },
  onLaunch(){
    // console.log('应用启动')
    wx.request({
      url: 'https://resources.ninghao.net/wxapp-case/db.json',
      success:(response)=>{
        // console.log(response);
        Object.assign(this.globalData,response.data)
        // console.log(this,'-----')
      }
    })
  }
})