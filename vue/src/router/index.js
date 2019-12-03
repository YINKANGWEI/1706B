import Vue from 'vue'
import VueRouter from 'vue-router'

//一级路由
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'

//二级路由
import Index from '../views/Two/index.vue'
import Idea from '../views/Two/Idea.vue'
import Shool from '../views/Two/Shool.vue'
import News from '../views/Two/News.vue'
import Mine from '../views/Two/Mine.vue'

//三级路由
import Attention from '../views/Three/Attention.vue'
import Remend from '../views/Three/Remend.vue'
import HotPam from '../views/Three/HotPam.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/home/index/attention',
    component: Home,
    children: [
      {
        path: "/home/index", //首页
        component: Index,
        children: [
          {
            path: "/home/index/attention", //关注
            component: Attention
          },
          {
            path: "/home/index/remend", //推荐
            component: Remend
          },
          {
            path: "/home/index/hotPam", //热榜
            component: HotPam
          }
        ]
      },
      {
        path: "/home/idea", //想法
        component: Idea
      },
      {
        path: "/home/shool", //大学
        component: Shool
      },
      {
        path: "/home/news", //消息
        component: News
      },
      {
        path: "/home/mine", //我的
        component: Mine
      }
    ]
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
