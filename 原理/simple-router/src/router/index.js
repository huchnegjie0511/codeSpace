// import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { createRouter, createWebHistory} from './myRouter'

const routes=[
    {
        path: '/',
        name: 'Home',
        component: ()=>import('../views/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: ()=>import('../views/About.vue')
    }

]

const router =createRouter({
    history: createWebHistory(),  //history模式   hash模式
    routes

})
export default router
