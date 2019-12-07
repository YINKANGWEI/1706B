import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  }, {
    path: '/index',
    name: 'index',
    beforeEnter: (to, from, next) => {
      //获取token字段 查看字段长度是否为3
      let token = window.localStorage.getItem("token")
      if (token && token.split(".").length === 3) {
        next()
      } else {
        next("/login")
      }
    },
    component: () => import('../views/Index/index.vue')
  }, {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/index.vue')
  }, {
    path: '/registry',
    name: 'registry',
    component: () => import('../views/Registry/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
