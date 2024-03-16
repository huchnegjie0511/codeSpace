const router = require('koa-router')

router.post('/login',(ctx)=>{
    let user=ctx.request.body //读取前端的参数
    console.log(user)
    //去数据库中查看是否存在user中一样的账号密码
    if(1){
        ctx.body={
            code:0,
            data:`你好${user.username}`,
            token:'xxxxxxxxx'//如何打造一个token
        }
    }else{
        ctx.body={
            code:1,
            data:'用户名或密码错误'
        }
    }
})

module.exports=router