import Vue from 'vue'
import routerconfig from './router-config'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: routerconfig
})

// todo $mount 的作用
new Vue({
  router
}).$mount('#app')
router.push('home')

// 了解多级别路由的使用,了解路由别名的作用
