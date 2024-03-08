import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/common.less'
import './config/rem.js'

createApp(App).use(store).use(router).mount('#app')
