const Koa=require('koa')
const app = new Koa()//创建
const Router = require('@koa/router')
const router =new Router()

const main=(ctx)=>{
    ctx.body='首页页面'
}
const about=(ctx)=>{
    ctx.body='about finsih'
}
router.get('/main',main)
router.get('/about',about)
app.use(router.routes())//所有配置路由都生效
app.listen(3000,()=>{
    console.log('项目运行在3000')
})