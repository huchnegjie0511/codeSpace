function request(num){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num*10);
        }, 1000);
    });
}



// generator手动的代码控制器
function* gen(){
    const num1=yield request(1);
    const num2=yield request(num1);
    const num3=yield request(num2);
    console.log(num3);
}
let g=gen();
g.next().value.then(res=>{
    g.next(res).value.then(res=>{
        g.next(res).value.then(res=>{
            g.next(res);
        });
    });
});

// think await
async function async1(){
const res1=await request(1);//awaite当成同步代码执行 后面的代码会变为微任务队列
const res2=await request(res1);
console.log(res2);
}
async1();

