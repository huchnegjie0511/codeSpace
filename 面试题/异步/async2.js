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
    const num4=yield request(num3);
    return num4
}


//模拟async的实现
function generatorToAsync(generatorFn){
    const gen = generatorFn(); // 通过调用 generator 函数获得 generator 对象
    return function(){
        let next1 = gen.next(); // 启动 generator 函数
        return new Promise((resolve, reject)=>{
           function loop(){
                if(next1.done){
                     resolve(next1.value);
                }else{
                     next1.value.then(res=>{
                          next1 = gen.next(res);
                          loop();
                     }).catch(err => reject(err)); // 添加对 promise 失败的处理
                }
           }
           loop(); // 启动循环
        })
    }
}

const asyncFn = generatorToAsync(gen);
asyncFn().then(res=>{
    console.log(res); // 输出最终结果
}).catch(err => {
    console.error(err); // 错误处理
});
