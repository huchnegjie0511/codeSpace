import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    peth:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    name:'home',
    component:()=>import('@/views/home/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
