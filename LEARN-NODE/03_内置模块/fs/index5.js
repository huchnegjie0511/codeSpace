const fs =require('fs');
const { eventNames } = require('process');

// const info = fs.readdirSync('./test');
// console.log(info)读取目录

//fs.mkdirSync('./test-dir')//在特定目录创建文件夹
//不能一次性建多层

//需要提前声明
// fs.mkdirSync('./test-dir/data/list',{recursive:ture})

// fs.readFileSync('./test-dir',{recursive:ture})

// fs.watch('./',)//监听某个路径，也同时

// fs.watch('./',{recursive:ture},(eventType,filename)=>{
//     console.log(`当前文件夹下${filename}变更为:${eventType}`)
// })
