import { createRouter, createWebHistory } from 'vue-router'
// 导入组件：
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Column from '../components/ColumnDeatil/ColumnDetail.vue'
import CreatePost from '../views/CreatePost.vue'

import store from '@/store/store'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { redirectAlreadyLogin: true }
    },
    {
      path: '/column/:id',
      name: 'Column',
      component: Column
    },
    {
      path: '/create',
      name: 'CreatePost',
      component: CreatePost,
      meta: { requiredLogin: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiredLogin && !store.state.user.isLogin) {
    next({ name: 'Login' })
    console.log(11111)
  } else if (to.meta.redirectAlreadyLogin && store.state.user.isLogin) {
    console.log(111)
    next('/')
    console.log(222)
  } else {
    next()
    console.log(333)
  }
})

export default router
