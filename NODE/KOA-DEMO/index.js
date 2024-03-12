//后端启动一个一直运行的服务，提供一个接口给前端请求
//提供多个接口给前端请求
const http = require('http');

const server=http.createServer((req,res)=>{
    res.end('Welcom the node')
    //提供不同的接口地址
    if(req.url.startsWith('/home')){//只能通过if判断
        res.end('welcome to the home page!')
    }else if(req.url.startsWith('/detail')){
        res.end('Welcome to detail');
    }
    else{
        res.end('Not found')
    }
})
server.listen(3000,()=>{

    console.log('server listening on port 3000')
})