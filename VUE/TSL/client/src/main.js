import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import 'animate.css/animate.min.css'
import 'animate.css'
// 页面切换带来动态效果
import App from './App.vue'
import router from './router'

import './assets/reset.css'

const store = createPinia()
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(store)
app.use(router)
//优化 按需加载 多写一些.use可以加快页面加载速度
// app.use(ElPopover)
// app.use(ElButton)
app.use(ElementPlus)

// router.beforeEach((to, from, next) => {    // 全局路由守卫
//     console.log(to);
//     console.log(store.state._rawValue.accountStore.useAccount);
//     if(store.state._rawValue.accountStore.useAccount){   // 未登陆
//         next()
//     }
    
// })

app.mount('#app')