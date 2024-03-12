// path模块的集中方法

const path =require('path') 
// node自带模块不需要安装

//console.log(path.join('a','b','c'));//  输出a\b\c  windows输出    mac输出a/b/c
//console.log(process.cwd())//目录的绝对路径
console.log(path.join(process.cwd(),"/model",'index'));//可以直接读到专门盘的文件
// 输出：c:\Users\74719\Desktop\codespace\model\index
console.log(path.resolve('a','b','c'));    
//输出：c:\Users\74719\Desktop\codespace\a\b\c
console.log(path.dirname(process.cwd())); 
//输出： c:\Users\74719\Desktop    返回路径所在的目录名
console.log(path.dirname('/a/b/c')); 
//输出：/a/b 返回路径的目录名
console.log(path.basename('a/b/c.js'));
//输出：c.js  返回文件名
console.log(path.basename(__filename))//读取文件的文件名 输出：index.js
console.log(path.basename(__filename,'.js'))//会把文件名删除  输出：index
console.log(path.extname(__filename))//获取路径中文件的拓展名  输出：.js
console.log(path.normalize('a/b//c.js'));//将路径中不标准的变为标准的   输出：a\b\c.js
console.log(path.normalize(__filename));//将路径格式化为标准路径  输出：c:\Users\74719\Desktop\codespace\LEARN-NODE\03_内置模块\path\index.js
console.log(path.parse(__filename))//相当于url，与路径有关的都用parse相关方法解决
// 输出：
//{
//     root: 'c:\\',
//     dir: 'c:\\Users\\74719\\Desktop\\codespace\\LEARN-NODE\\03_内置模块\\path',
//     base: 'index.js',
//     ext: '.js',
//     name: 'index'
//   }
console.log(path.sep)//提供特定于平台的路径片段分隔符,例如windows提供\
console.log('foo/bar/baz'.split('/'))//以/进行分割
console.log('foo\\bar\\baz'.split(path.sep))//对其以\进行分割

