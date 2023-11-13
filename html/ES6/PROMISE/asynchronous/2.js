function xq(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('龙哥相亲了');
            resolve('相亲成功');
        },2000)
        
    })
    
}

function marry(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('龙哥结婚了!');
            resolve('结婚完成')
        },1000)
    })
}


function baby(){
    setTimeout(()=>{
        console.log('小龙女出生')
    },500)
}
xq()
.then((res)=>{//xq（）函数结束以后通过then后加一个回调函数
    console.log(res);
    return marry();
    
})
.then(res2=>{
    console.log(res2)
    baby();
});
