console.log('hello')
console.log(process.argv[process.argv.length-1]);
let player=process.argv[process.argv.length-1];
let arr=['rock','scissor','paper'];
let index=Math.floor(Math.random()*3);
let computer =arr[index];

if(computer==player){
    console.log('平局')
};