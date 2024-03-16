function foo() {
    console.log(this);
}
foo(); // 在浏览器中，输出 window 对象
// 函数调用是影响不了this的绑定的 函数的调用方式决定了this的绑定

let a=1

function bar(){
    function foo(){
        console.log(this.a)
    }
    foo()
}

bar()

// 词法作用域是一个环境，而找到生效作用域是需要找到底的
// foo()是在bar的作用域里面调用的，foo的词法作用域是bar的作用域，所以foo的this是bar的this
// 但是bar的词法作用域是全局作用域，所以foo的this是全局作用域的this