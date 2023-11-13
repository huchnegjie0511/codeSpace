let flag=false;
//定义开关变量，确定a已经执行完再执行b

function a(cb){
    setTimeout(()=>{
        console.log('阿臻');
        cb()
    },1000);
   
}
function b(){
    console.log('10亩地');
}
a()
b()
//