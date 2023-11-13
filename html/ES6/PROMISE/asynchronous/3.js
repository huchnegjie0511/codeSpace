function a(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('a');
            resolve('yes');
        },1000);
    })
    
}

function b(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('b');
            resolve();
        },1500);
        
    })
    
}

function c(){
    console.log('c');
}

//Promise.all([a(),b()]).then(c)//all要求里面的函数具有返回promise的能力都为resolve，then才会调用
a().then((res)=>{
    console.log(res);
    c();
})

//Promise.race([a(),b()]).then(c)只要其中一个能执行就执行c
