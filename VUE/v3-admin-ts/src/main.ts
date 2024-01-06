import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './assets/css/main.css'
import './assets/css/color-dark.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import * as 全部引入  ElementPlusIconsVue 对象
const app=createApp(App);
// object.entries()可以将{a:1,b:2}变为[[a,1][b,2]] 将对象转为实体
for(const [key,component] of Object.entries(ElementPlusIconsVue)){
    app.component(key,component)
    // 给app组件挂载一个全局组件 组件的名字是key 类是component（考点）
}
app
    .use(createPinia())
    .use(router)    
    .mount('#app')
