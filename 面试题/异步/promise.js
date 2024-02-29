const { on } = require("koa");

class MyPromise{
    constructor(executor){//Promise构造函数的constructor方法的源码
        executor(resolve, reject);//使得必须拥有resolve和reject方法
        this.state='pending';//promise的状态
        this.value=undefined;//接收resolve的参数 成功的值
        this.reason=undefined;//接收reject的参数 失败的原因
        this.onFulfilledCallbacks=[];//存储成功的回调
        this.onRejectedCallbacks=[];//存储失败的回调
        const resolve =(value)=>
        {
            // 维护状态state的值为fulfilled或者rejected，目的是为了让promise一经改变状态就不能再次改变也就保证了then和catch不可能同时触发
            if(this.state==='pending'){
                this.state='fulfilled';
                this.value=value;
                //把then中的回调触发
                this.onFulfilledCallbacks.forEach(fn=>fn(value));
            }
        }
        const reject =(reason)=>{
            if(this.state==='pending'){
                this.state='rejected';
                this.reason=reason;
                this.onRejectedCallbacks.forEach(fn=>fn(value));
            }
        }
        then(onFulfilled, onRejected){
            //把onFulfilled 存起来 供resolve调用onFulfilled()
            if(this.state==='pending'){
                this.onFulfilledCallbacks.push(onFulfilled);
                this.onRejectedCallbacks.push(onRejected);
            }
            if(this.state==='fulfilled'){
                onFulfilled(this.value);
            }
        }
    then(onFulfilled, onRejected){
        return this._promise.then(onFulfilled, onRejected);
    }
    catch(onRejected){
        return this._promise.catch(onRejected);
    }
    finally(onFinally){
        return this._promise.finally(onFinally);
    }
    static resolve(value){
        return Promise.resolve(value);
    }
    static reject(reason){
        return Promise.reject(reason);
    }
    static all(iterable){
        return Promise.all(iterable);
    }
}
new MyPromise((resolve, b)=>{

})