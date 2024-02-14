# 进程vs线程

- 进程：cpu运行指令和保存上下文所需要的时间

- 线程: 进程中更小的单位 描述了一段指令执行所需的时间

## 新开一个tab页面 就是新开一个进程 
需要多个线程 配合才能完成页面展示
1. 渲染线程（gpu）
2. http请求线程
3. js引擎线程

渲染线程（gpu） 和js引擎线程是互斥的

# js单线程

js作为脚本语言被设计出来，原本不愿意消耗太多资源，但是演变成为了一门语言
优点：
1. 节省内存 
2. 单线程没有锁 节约上下文切换的时间


# 异步
- 宏任务（macrotask）：
<script>
setTimeout
setIntercal
setImmediate
I/O
UI-rendering //页面渲染

- 微任务（microtask）
promise.then()
MutationObserver
Process.nextTick()


# event-lop
1.执行同步代码（这属于宏任务）
2.当执行栈为空，查询是否有有异步代码需要执行
3.执行微任务
4.如果有需要，会渲染页面
5.执行宏任务（这也叫下一轮的event-lop开始）

