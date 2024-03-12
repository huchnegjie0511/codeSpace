const  fs = require('fs');

//fs.writeFileSync('./target.md','举头望明月，低头思故乡')

const img=fs.readFileSync('./哆啦a梦.jpeg');
console.log(Buffer.isBuffer(img));
fs.writeFileSync('./PIC/哆啦a梦.jpeg',img)