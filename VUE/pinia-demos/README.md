# vue3 全家桶 MVVM
- vue 响应式组件开发
    - components
        - common
        - 业务组件

    - views/
    - ui组件库 element-plus
- vue-router
    前端有了路由
    spa 快   不需要传统的http request+response
    页面不会白一下（重新请求）    java等是重新请求
    缺点：SEO 搜索引擎优化不够好
- vuex/pinia 
    前端可以管理数据
    - 确保数据流的正确性
        数据在组件里面叫什么？ 状态
    - 将数据与组件剥离，UI组件更单纯
- vue 项目的数据从后端到页面显示经过的所有流程和关键环节
    todolist 
    mysql，mongodb/todolist table
    sql 
    java/node 内存 mvc
    router
    响应
    http GET ：3000/todos
    axios http.js index.js getTodoList
    store actions ->    mutations-> state 
    组件 views/-> props 传给子组件 ui化
    UI component+ state+router=spa
    ui