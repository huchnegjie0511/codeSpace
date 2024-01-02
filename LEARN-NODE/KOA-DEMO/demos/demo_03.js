const   Koa = require('koa')

const app = new Koa()//创建

const main=(ctx)=>{
    if(ctx.url.startsWith('/user')){
        //fs读取文件
        const data=fs.readFileSync('./data.json','utf8')
        ctx.body=data

    }else if(ctx.url.startsWith('/home')){
        ctx.response.type='application/json'
        const page=fs.readFileSync('./template.html','utf8')    
        ctx.body=page
    }
}
app.use(main)

app.listen(3000,()=>{
    console.log('项目运行在3000');
})