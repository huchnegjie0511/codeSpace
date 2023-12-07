import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routers =[//路由帮助切换代码，等同于原本html的切换页面的a标签的链接作用，需要的代码将会被切换出来
    {
        path:'/home',//路径
        component:Home,//组件,指的是引入的变量
        children:[
            {
                path:'/home',
                redirect:'/home/newest'//路由的重定向通常用于首页，可以切换

            }
            {
                path:'newest',
                component:Newest
            },
            {
                path:'/recommend',
                component:()=>import('../views/homeChild/recommend.vue')
            }
        ]
    },
    {
        path:'/about',
        component:About
    }
]

const router = createRouter({
    history:createWebHistory(),//路由history模式，hash模式
    routes
})

export default routers