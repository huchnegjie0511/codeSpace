// node后端自定义事件
//node commonjs 
//mjs 使用es6的模块化
//babel 转译  es6=>es5    style=>css
const geektime = require('./geektime')
//注册了一个newlesson自定义(相对于click等自带)事件
//回调函数
//添加自定义事件的能力
geektime.on('newlesson', ({price}) => {
    console.log('yeah! new lesson')
    if(price < 80){
        console.log('buy')
    }
})

// setTimeout(()=>{
//     for(let i = 0; i<100;i++){
//         geektime.on('newlesson', ({price}) => {
//             console.log('hehe',price)
        
//         })
//     }
// })
