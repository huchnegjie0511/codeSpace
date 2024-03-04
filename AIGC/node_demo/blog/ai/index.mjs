js 早期的js 没有模块化的概念  文件的加载顺序手动处理
<script src="./a.js" defer></script>
<script src="./b.js"></script>
<script src="./c.js"></script>
// 同时存在可能具有c.js是基于a.js的情况就需要按照顺序加载
// script标签是具有阻塞的特性，会导致文件下载完成以后再继续  加入deffer标签才会并发下载
// css不会阻塞而是并发执行


// 为什么node出现common.js?
node commonjs -> 编译原理  v8引擎  chrominum浏览器 内核 不包含浏览器UI

node c++ 封装了chrominum js运行时  commonjs规范  commonjs  require  module.exports  

后端天生复杂

前端应用随着VUE/React 也变得复杂起来了 esmodule出来了

// 为什么出现es6模块化
1. commonjs 无法在浏览器端运行
2. commonjs是同步的  es6是异步的
3. es6模块化是静态的  commonjs是动态的
4. es6模块化是编译时加载  commonjs是运行时加载
5. es6模块化是单例的  commonjs是动态加载的
6. es6模块化是基于promise的  commonjs是基于回调的

然道 node 用commonjs 前端用ESModul吗? node 也支持 ESModule 

mjs? node 安装的新版本, 可能 直接支持 ESModule 如果老版本用.mjs后缀