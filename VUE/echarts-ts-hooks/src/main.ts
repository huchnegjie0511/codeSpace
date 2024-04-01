import { createApp } from 'vue'

import './assets/styles/index.css'//模块化
import App from './App.vue'

/**
 * 响应式适配 大屏应用
 * 动态设置html fontSize，使用rem单位(兼容性好)
 * em  vw/vh（新出的不一定兼容） 
 * 
 */

createApp(App)
    .mount('#app');
(function(doc,win){
    const fn = ()=>{
        const docEl = doc.documentElement;//html标签
        let clientWidth = docEl.clientWidth;//宽度
        if(!clientWidth) return;
        // 设计稿件 1920px 
        docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
    };
    //非浏览器环境 SSR
    if(!doc.addEventListener) return;
    win.addEventListener('resize',fn);
    //html下载完成后立即执行，不用等到css script执行完毕
    doc.addEventListener('DOMContentLoaded',fn);
})(document,window)