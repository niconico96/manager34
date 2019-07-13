import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 整合饿了么ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 全局导入样式
import './assets/base.css'

// 路由相关部分
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 组件
import login from './components/login.vue'
import index from './components/index.vue'

// 规则
const routes = [
  {
    path: '/login',
    component: login
  },
  {
    path: '/index',
    component: index
  }
]

// 实例化路由
const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  // 挂在到Vue实例上
  router
}).$mount('#app')
