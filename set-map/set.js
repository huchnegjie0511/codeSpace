let set =new Set([1,1,2,2,3,4])
set.add()
var arr=[1,2,1,1,'1']
function unique(arr){
    let     s=new Set(arr)
    let res=Array.from(s)
    return res
}
unique(arr)
set.forEach((item,index,set)=>{
    console.log(item,index,set)
});
console.log(set.has(6));
console.log(set.keys())/*拥有迭代器属性的数据结构才能被遍历*/