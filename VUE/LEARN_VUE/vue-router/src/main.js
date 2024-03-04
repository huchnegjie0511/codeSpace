import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'//将index.js抛出的路由引入进去

createApp(App).use(router).mount('#app')//配置路由，让路由生效
