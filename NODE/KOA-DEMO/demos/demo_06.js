const   Koa = require('koa')

const app = new Koa()//创建
const fa=(next)=>{
    console.log('a');
    next()//如果不加上next会导致出现 next()类似于递归，可以在next以后调用下一个use（）
    console.log(1)
}

const fb=(next)=>{
    console.log('b');
    next()//如果不加上next会导致出现
    console.log(2)
}

const fc=(next)=>{
    console.log('c');
    next()//如果不加上next会导致出现
    console.log(3)
}
app.use(fa)//所有被use的函数都叫做中间件函数，中间件的执行是有规则的
app.use(fb)
app.use(fc)
//洋葱模型就是与中间件有关的排序顺序，主要是代表着
app.listen(3000,()=>{
    console.log('项目运行在3000')
})