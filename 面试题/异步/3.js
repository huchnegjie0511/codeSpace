const { set } = require("mongoose")

function a(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('a')
            resolve('ok')
        },1000)
    })
}

function b(){
    setTimeout(()=>{
        console.log('b')
    },500)
}
//a因为promise导致返回一个promise对象，然后由于.then()导致变为了异步，变为了a->b
a().then((res)=>{
    b()
})

//或者

a().then(b)
