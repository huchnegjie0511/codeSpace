// 普通函数
function foo(){

}

// 箭头函数
let bar = ()=>{

}

//匿名函数
()=>{

}


// 箭头函数没有原型
// 箭头函数的this永远指向外层函数的this    普通函数的this指向的是执行上下文（动态的），即this的值取决于函数本身如何被调用
//Object.create(null)创建的对象没有原型 没有显式原型会导致没有原型链