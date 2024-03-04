// main.js入口文件
import { createApp } from 'vue'
import './style.css'
//根组件 vue开发的基本组件
import App from './App.vue'


// 需要挂载的原因：dom低效 #app vue开启新世界  mvvm的世界
// 原生js不支持mvvm
createApp(App).mount('#app')
