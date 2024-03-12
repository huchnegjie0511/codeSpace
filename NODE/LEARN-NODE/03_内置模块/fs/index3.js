const fs = require('fs');

fs.statSync('./target.md');
// console.log(fs.statSync('./target.md'));
const info = fs.statSync('./PIC');
console.log(info.isDirectory());//检测文件路径指向文件是否时文件夹
console.log(info.isFile());//检测文件路径指向文件是否是文件