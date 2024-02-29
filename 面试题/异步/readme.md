# js为什么要有异步
- 因为js是单线程的编程语言，同一时间只能执行一个任务

# js为什么不设计成多线程？
1. 节约内存
2. 没有锁与解锁的过程 节约上下文切换的时间

# 请你聊聊异步的发展史
- 是什么
    js中从最早的异步处理方式到现在的最新的异步处理方式

- 发展史
    1. 最早的解决方案：回调函数
        代码维护困难（回调地狱）
    2. es6出现的新方法:Promise：
        （1） 维护了一个状态，state，值为：pending  fulfilled   rejected
                维护状态state的值为fulfilled或者rejected，目的是为了让promise一经改变状态就不能再次改变也就保证了then和catch不可能同时触发
        （2）内部的resolve函数会修改state为fulfilled，并触发then中的回调
- js原本是一个脚本语言
