// let a= 1
// let b = a
// a= 2
// console.log(b) // 1


// v8会创建调用栈  调用栈是为了整理函数的关系
// 全局引用  变量环境和词法环境   由于把let和const 区分开来

// a先进入词法作用域   然后b进入词法作用域    编译结束后进入执行栈
// 先读a的值是1 然后b的值是a的值  然后a的值变成2  然后打印b的值是1
//原始类型 存在调用栈里面   引用类型的值不在调用栈


// 闭包的问题  闭包的问题是因为引用类型的值不在调用栈里面

// let a={
//     age:18
// }

// let b = a 
// a.age=19
// console.log(b.age) // 19
// 由于对象是引用类型，b=a其实存放的是a的引用地址，实际上改变了a，对于b来说也改变了
// 对象放在堆里面 原因是对象很大可能会导致爆栈  不能放在调用栈里面  但是对象的引用放在调用栈里面

// 引用类型的赋值都是浅拷贝
// 拷贝是通过copy的手段把对象的引用地址拷贝一份


// let a={
//     age:18
// }

// let b = new Object(a)//与拷贝无关，新对象与原来无关
// let b = Object.create(a)//与拷贝无关，新对象与原来无关    继承新对象能 通过原对象的属性
// let b = Object.assign({},a)//浅拷贝 接收多个属性值，把后面的变为第一个对象的属性值
// 浅拷贝是把对象的引用地址拷贝一份，但是对象的属性值还是指向原来的对象
// 深拷贝是把对象的引用地址和对象的属性值都拷贝一份

// let a={
//     age:18,
//     like:[1,2,3]
// }
// let b=a
// a.like.push(4)
// console.log(b.like) // [1,2,3,4]


// 深拷贝是无论什么情况都不受影响
// 解构也是浅拷贝
// let a = [1,2,3,{n:3}]
// let b =[...a]
// a[0]=2
// a[3].n=4
// console.log(b) // [1,2,3,{n:4}]


// let b = a.slice(0)//不影响原数组,会返回新数组   浅拷贝


// 常见深拷贝方法
// let a=[1,2,{n:3}]
// let b = JSON.parse(JSON.stringify(a))//深拷贝
// a[3].n=4
// console.log(b) // [1,2,{n:3}]


// let a = {
//     n:1,
//     m:Symbol(2),
//     o:function(){},
//     g:undefined,
//     p:null,
//     k:123n,
//     h:{
//         e:3
//     }
// }
// // 循环引用 报错
// a.f=a.k
// a.k.e=a.f
// let b = JSON.parse(JSON.stringify(a))
// console.log(b) // {n:1,k:123}  无法拷贝symbol,undefined,null,函数,大数字

//js自带深拷贝  使用postMessage 跨域的方法实现深拷贝 无法拷贝 symbol,undefined,null,函数
// let a={
//     age:18,
//     like:[1,2,3]
// }
// let b = structuredClone(a)

// 拷贝函数只需要原班转化函数的字符串形式，然后再转化为函数

let fn = function(){
    console.log('1')
}

function copy(fn){
    fn = fn.toString()
    return new Function(`return ${fn}`)()//字符串转函数 
}

let foo =copy(fn)
foo() // 1