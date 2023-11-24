# 企业级开发

- 代码的健壮性
    校验一下参数
    进程的安全性
    单线程 简单+ event loop  太脆了
    throw + try catch() 一但出现错误不会导致整个程序出现问题，而是会记录日志

- cache 自由变量  key 设置
    1+12    11+2    
    argument 伪数组   兼容性差  使用下面的方法需要使用es6 浏览器必须要支持es6
    [...arguments].join('')
    Array.from(arguments)
    Object.prototype.toString
    Array.prototype.join.call(arguments)
    [1,2,3].join(',') this指向数组
- fibonacci 爬楼梯
    - 递归的通用问题，不停的入栈
        自顶向下 CEO 递归的不停入栈
    - 记忆函数   备忘录 
    - 自底向上
        f(1)=1  f(2)=2    f(3)=f(1)+f(2)
        f(n)=f(n-1)+f(n-2)
- 使用递归，快速的，基于自顶向下的思想解决问题
    - 程序栈的问题 40%
- 可以先使用memoize 备忘录模式，优化
    空间 {}   key：value
- 都可以自底向上解决，每一步都有一个公示 f(n)=f(n-1)+f(n-2) 动态规划 dp
    for 循环 （自底向上）88%
- 99.9%
    空间上再次优化  不需要数组   只要最后的结果
    [a,b]=[b,a+b]

