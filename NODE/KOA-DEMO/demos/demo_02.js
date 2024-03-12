const   Koa = require('koa')

const app = new Koa()//创建

//返回数据
const main = (ctx)=>{//只要被 app use 掉的函数一定有ctx函数
    //const server=http.createServer((req,res)=>{原生node的两个参数，koa将req和res并为ctx
    // ctx.body={
    //     msg:'hello world'

    // }
    if(ctx.url.startsWith('/home')){
        ctx.response.type='json'//声明传输的body是个json代码，浏览器不会识别h2
        ctx.body='<h2>hello world</h2>'
    }else if(ctx.url.startsWitch('/detail')){
    
    }else{
        ctx.body='NotFound'
    }

}
app.use(main)//让main函数生效返回数据
app.listen(3000,()=>{
    console.log('项目运行在3000');
})