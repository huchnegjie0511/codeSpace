// function foo(){
//     let a = 1
//     let b= 2
//     let c = 3
//     return function bar(){
//         console.log(a,b)
//     }
// }

// foo()

// 创建一个ao对象
// 找变量声明值为undefined
// 找函数声明值为函数
// 找形参赋值
// 找一个没有声明的变量先在bar找，找不到再再词法作用域找，找不到就在全局找
//没有人用导致c被销毁
//


function foo(){
    let a = 1
    let b= 2
    let c = 3
    global.bar =  function bar(){
        console.log(a,b)
    }
}

foo()

