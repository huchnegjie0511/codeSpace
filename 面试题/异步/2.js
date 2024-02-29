let count = 0

function foo (){
    console.log(count)
}
function bar(cb){
    setTimeout(()=>{
        count = 2
        cb()
    },1000)
}

// foo()
bar(foo)