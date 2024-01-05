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
