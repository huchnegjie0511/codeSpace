# 手写封装ajax 功能，只考虑get url，思考 同步变异步
- promise
    ajax是异步，放到 promise 里面 async await 
    1.Promise 实例化  经历以下流程
        - new 该做的 p 初始状态  state='pending'
        - constructor executor 执行
        都是同步的
        - executor是异步任务的容器
            executor 同步，setTime/ajax...异步的  - >eventLoop
            resolve()时  将 p.state = fulfilled
        - 流程如何？
           - .then 微任务 如果没有resolve（）结束任务，那么还会继续等待  执行机会是在p.state ->fullfilled
           - await  比then更简洁 ，更像同步代码， resolve（data） data交给左边