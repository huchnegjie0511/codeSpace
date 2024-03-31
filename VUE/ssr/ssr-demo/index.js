const express = require('express');//老牌node框架
const app = express()//实例化express
const renderer3 = require('@vue/server-renderer')  //vue3的ssr渲染器
const vue3Compile = require('@vue/compiler-ssr')  //ssr进行模板编译
const Vue = require('vue')//vue3
const vueapp = {
    template:`
    <div>
    <h1 @click="add>{{num}}</h1>
    <ul>
        <li v-for="(todo,n) in todos">{{n+1}}--{{todo}}</li>
        </ul>
    </div>`,
    data(){
        return {
            num: 1,
            todos: ['吃饭','睡觉','打豆豆']
        }
    },
    methods: {
        add(){
            this.num++
        }
    },
}
//服务器渲染
vueapp.ssrRender =new Function('require',vue3Compile(vueapp.template).code)(require) 
// 路由中间件
app.get('/',async function(req,res){
    let vapp =  vue.createSSRApp(vueapp)
    let html = await renderer3.renderToString(vapp)
    const title = "Vue SSR"
    let ret = 
    `<!DOCTYPE html>
    <head>
        <meta charset="utf-8">
        <meta rel = "viewport" content = "width=device-width,initial-scale=1.0">
        <title>${title}</title>
    </head>
        <body>
            <div id="app">${html}</div>
        </body>
    </html>
    `
    res.send(ret)
})

app.listen(1234, () => {
    console.log('listen 1234');
})
