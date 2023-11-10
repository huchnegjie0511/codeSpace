// GO:{
//     global:undefined     覆盖为100
//     fn: function fn(){}
// }

global=100
function fn(){
    console.log(global)//undifined
    global=200
    console.log(global)//200
    var global=300
}
// AO:{
//     global:undefined   覆盖为200 覆盖为300
// }
fn()

var global