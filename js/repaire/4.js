// Go:{
//     global:undifined 100
//     fn:function fn(){}
// }编译全局   执行全局  编译作用域 执行作用域

var global=100
function fn(){
    console.log(global)
}
//总共两个作用域 一个是全局作用域 一个是局部作用域 
//由于在编译过程中在局部作用域找不到global变量，因此只能在局部变量外部找全局变量进行输出
// AO:{

// }
fn()