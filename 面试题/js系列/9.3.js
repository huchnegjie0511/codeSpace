let obj={
    a:1,
    foo:foo
}

let obj2={
    a:2,
    obj:obj
}

function foo(){
    console.log(this.a)
}

obj2.obj.foo()//1
// 当多个对象链式调用函数时，this的绑定是在最近对象的调用者上的