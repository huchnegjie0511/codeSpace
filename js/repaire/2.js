function fn(a){
    console.log(a) //打印的是function a(){}
    var a=123//覆盖为123
    console.log(a)//输出为123
    function a(){}//函数声明
        console.log(a)//123
        var b=function(){}//函数表达式
        console.log(b)//function b{}
        function d(){}
        var d=a//赋值123
        console.log(d)//123
}
// AO:{
//     a:undefined  变形态覆盖 1 变形态覆盖  a:function a(){}  变形态覆盖  123（执行）//原本是变量，后面被覆盖成函数声明
//     b:undefined     b:function b(){}
//     d:undefined      d:function d(){}
//    //编译时会调用一个储存空间储存成此样
// }
fn(1)