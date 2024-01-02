const   Koa = require('koa')

const app = new Koa()//创建
//错误的集中处理
const main=(ctx)=>{
    // ctx.body='hello world'
    throw(500)
}
const handle = async(ctx,next)=>{
    try{
        await next();
    }catch(error){
        console.log(error,'-------')
        ctx.response.status = error||500
        // ctx.body={
        //     message:error
        // }
        ctx.response.type='html'//告诉浏览器是什么类型
        ctx.body='<p>页面找不到了，请稍后再试</p>'
    }
}



app.use(handle)
app.use(main)
app.listen(3000,()=>{
    console.log('项目运行在3000')
})