import { createApp } from 'vue'
import router from './router/router'
import store from './store/store'
import App from './App.vue'
// 全局导入 bootstrap 样式
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)
app.use(router).use(store).mount('#app')
