# NodeJS
    是一个给予chrome V8引擎的js运行环境
    
    
# node
    c/c++打造的平台
    作用：后端开发
            建立前端工作群
    后端开发：crud
    后端开发的语言需要能够与机器打交道，例如需要和机器的接口api对接
js 脚本语言 设计之初没有用于后端开发 node的出现使得js可以与计算机底层进行交互，将js变为操作系统能识别的c语言
目前的作用在于介于前后端之间，让大家能够增加后端的性能
js的某些东西只有浏览器才能识别

argv 指令
'C:\\SoftWare\\Node\\node.exe'node的文件夹的位置
'C:\\Users\\74719\\Desktop\\codespace\\SPIDER\\base\\1.js'目前文件的位置


node 项目 创建文件夹直接在文件夹操作
PS C:\Users\74719\Desktop\codespace\SPIDER\base\npm> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (npm)
version: (1.0.0)                                                                                                                                                                        
description: test a time                                                                                                                                                                
entry point: (index.js)                                                                                                                                                                 
test command:                                                                                                                                                                           
git repository:                                                                                                                                                                         
keywords:                                                                                                                                                                               
author:
license: (ISC)
About to write to C:\Users\74719\Desktop\codespace\SPIDER\base\npm\package.json:

{
  "name": "npm",
  "version": "1.0.0",
  "description": "test a time",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes) yes



在项目文件夹控制台 输入 npm i 可以自动下载之前使用过的包
npm init -y可以自动创建新的包
const https=require('https')调用相应包