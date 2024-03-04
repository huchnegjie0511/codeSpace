- 何为TypeScript
   JavaScript 的超集
- 如何使用ts？
 - 像js一样写
 - 加点啥？
      - 类型检测
         你在乎的地方（容易出问题的地方进行变量检测） -> 数据
## 项目两点
- 使用了 ElementPlus 进行开发
   - 登录 注册页面 表单
     - 表单的目的是搜集数据， ：model="" 双向绑定
         每一个el-input v-model='.username'
      - 表单的校验配置一下就好
      - 用户体验做好
         - 自动聚焦
         - @keyup.enter 面试官会关注这个位置  这是事件修饰符，使用vue的原因
         - ref 属性 DOM标记
            - const login = ref();
            - mouted <from ref="login">
         - 表单提交
            - validate验证一次
- 为什么element-plus图标如此复杂？
   - 按需加载 
      图标库太大 用户使用其他图标，省空间
   - 其他选择
   - 单独安装图标库
      app.component()全局挂载 用到哪些挂载哪些
## ts
- 写js就好，再做点加法
- 最关心的数据
   - ref
   - reactive
   - props 
   - store
- 函数的参数
- 
## vue 考题
- <component :is="comName"/>   
   占位符  常用于循环中动态输出组件
- <template />
   模板集合 一般与slot 结合
   不显示到页面上 接受指令  不添加标签 

## 项目亮点
   - 带有角色校验的菜单
      - 菜单
         el-menu>el-sub-menu>el-menu-item
      - 当前选中的菜单
         :default-active="route.path"
      - 哪些菜单可以看到
         指令  自定义指令
         store>permiss roleList user includes ?
         添加一个数据项 key 任何组件都可以调用
         setkeys action
         localStorage
      - 自定义指令
         app.directives(name)
         v-name
         mounted(el,binding)
         el['hidden']= true
         el.style.opacity = 0 v-show
## 项目难点
   - 多组件状态的共享和设计
      - vuex 和 pinia
         用pinia vuex modules 很灵活，加一个defineStore
         没有vuex的树状约束·执行函数就能拿到hook
         语法很简洁
         学vuex  设计模式， state mutation action getter 更加安全 同时也导致比较麻烦
      - 学过一些项目 github 开源 vue-music
      vue-admin
      - 因为当我在多个组件，尤其为兄弟或跨页面级别组件，
         有共享状态需求时，封装成一个store 函数
         原来用ref＋props + emits 换成store