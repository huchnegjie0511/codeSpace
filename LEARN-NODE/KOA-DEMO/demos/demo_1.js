const   Koa = require('koa')

const app = new Koa()//创建

app.listen(3000,()=>{
    console.log('项目运行在3000')
})