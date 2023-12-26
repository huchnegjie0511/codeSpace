# js事件流（面试题：事件触发过程是什么样子的？）
1. 在window上往事件触发处传播，遇到注册的 捕获事件会触发
    捕获事件： windows->html->body->app->wrap  从外向内扩散的行为叫做捕获的行为
2. 到达事件触发处
    事件冒泡
3. 从事件触发处往windows传播，遇到注册的冒泡事件会触发，以反方向向外扩散
    wrap->app->body->html->windows
    冒泡的过程
js默认在冒泡的阶段触发
- event.stopPropagation()可以阻止事件传播，包括触发事件和冒泡事件
- event.stopimmediatePropagation() 阻止同一个dom绑定多个相同事件，也可以阻止事件传播
<!-- addEventListener（）具有三个参数
addEventListener（‘触发事件’ ， 回调函数 ，触发时机）
触发时机默认为false，导致在冒泡阶段就自动触发，如果触发时机选择为true则在触发 -->
 <!-- app.addEventListener('click',()=>{
        console.log('app');
    })
    绑定一个点击事件也叫注册/订阅一个点击事件-->
# 事件委托
    借助冒泡机制将原本要添加在多个子容器的事件，添加到父容器上
