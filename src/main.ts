import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
// 导入组件：
import Home from './views/Home.vue'
import Login from './views/Login.vue'
// 全局导入 bootstrap 样式
import 'bootstrap/dist/css/bootstrap.min.css'

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
    }
  ]
})
const app = createApp(App)
app.use(router).mount('#app')
