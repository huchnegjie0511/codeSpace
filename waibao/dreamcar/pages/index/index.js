//App->Page的桥梁
//微信提供  应用对象
const app =getApp()
Page({
  //页面的数据
  data:{
    //user:{}
    slides:null,
    entities:null
  },
  //生命周期
  onLoad(){
    //whis->Page
    // console.log(app,'页面显示了')
    //响应式的页面
    setTimeout(()=>{
      //箭头函数里面没有this
      this.setData({
        slides:app.globalData.slides,
        entities:app.globalData.vehicles
      })
    },2000)
    // this.setData({
    //   user:app.globalData.user
    // })
  },
})
