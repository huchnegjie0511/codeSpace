let a= 13
// 13/2=6     1
//
parseInt(2.3)//向下取整
//接收一个参数，第一个是需要转换的数字，第二个是该数字的进制
const arr=[1,2,3]
const newArr=arr.map(parseInt)// = arr.map((item,i)=>parseInt(item,i))
console.log(newArr)//[1,NaN,NaN]