import { createRouter, createWebHistory } from 'vue-router'
// 导入组件：
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Column from '../components/ColumnDeatil/ColumnDetail.vue'
import CreatePost from '../views/CreatePost.vue'

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
      component: Login
    },
    {
      path: '/column/:id',
      name: 'Column',
      component: Column
    },
    {
      path: '/create',
      name: 'CreatePost',
      component: CreatePost
    }
  ]
})

export default router
