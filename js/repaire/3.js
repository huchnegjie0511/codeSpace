function foo(a,b){
    console.log(a)//1
    c=0//前面不加var就是全局变量
    var c;
    a=3
    b=2
    console.log(b)//2
    function b (){}
    function d(){}
    console.log(b)//2
}
//执行时才进行赋值操作
// AO:{
//     a:undefined   覆盖为 1                   覆盖为 3
//     b:undefined   覆盖为 function b(){}      覆盖为 2
//     c:undefined   
//     d:function d(){}
// }
foo(1)