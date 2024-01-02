# 使用yarn进行安装
    yarn create vite my-vue-app --template vue
    创建一个前端项目  my-vue-app为前端项目名字
    
    yarn
    直接在前端项目创建依赖 配置环境
    
    yarn run  dev
    运行前端项目


# 配置
- 删除components里的hello.vue
- main.js的全局     import './style.css'
- 配置app.vue为
    <template>
    <div>hello world</div>
    </template>
    <script setup>

    </script>

    <style lang="less"scoped>
    </style>


1. 移动端适配  使用'amfe-flexible'  自动适配字体  npm|Home   
    yarn add amfe-flexible
    main.js引入'import 'amfe-flexible''
2. 常见标签样式初始化  reset
    在src 的assets的style中创建reset.css  粘贴
    在main.js中引入   'import './assets/style/reset.css''
3. 使用vant4的组件进行设计
    yarn add vant
    安装vant4框架
    对照文件进行操作添加