//文件系统
// const fs= require('fs');
//同步方式
//const syncData=fs.readFileSync('./data.txt','utf8');
//const syncData=fs.readFileSync('./data.txt','{encoding:utf8}');
//异步方式
//const syncData=fs.readFile('./data.txt','utf8');不加sync是异步,需要添加回调函数，如下
// fs.readFile('./data.txt',{encoding:utf8},(err,res)=>{
//     if(!err)
//     {
//         console.log(res)
//     }
// })
//第三种方式
// fs.promises.readFile('./data.txt','utf8').then(res=>{
//     console.log(res);
// })
const fs=require('fs/promises')
fs.readFile('./data.txt',{encoding:'utf8'}).then(res=>{
    console.log(res)
})
