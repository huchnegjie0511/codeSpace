# ssr 服务器端渲染

- / 网页请求
    - index.html  root挂载点  script main.js
        vue  js
    - 对SEO十分不友好 
        爬虫只会爬取index.html 不能进入js并执行
    - PC or Mobile
        PC端流量来自百度  SEO非常重要
        Mobile来自链接分享，App的内嵌页，SEO 没那么重要  VUE SPA 主流开发 （CSR  client Side Rendering）
    - pc站 google/baidu

    - vue可以在服务器端运行？

- 平台无关性渲染
    - Vue 除了客户端渲染挂载不能做以外，其他都可以在服务器端运行
    - 响应式/组件/虚拟DOM 可以在服务器端 运行
    - 虚拟DOM渲染为何种界面，可以由平台决定
        uniapp小程序
        html
        可以和页面解耦
    - 怎么样把SEO(Sever Side Rendering) 除了挂载其他都做 
        组件内容以界面需要的string返回
        爬虫就能拿到
- CSR SSR 平台无关性渲染  
    @vue/server-renderer  VDOM-> 渲染字符串
    

