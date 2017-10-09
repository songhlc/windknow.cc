import Vue from 'vue'
import routerconfig from './router-config'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueRouter)
Vue.use(ElementUI)

const router = new VueRouter({
  routes: routerconfig
})

// todo $mount 的作用 有el的时候可以忽略$mount
/*eslint-disable */
new Vue({
  el: '#app',
  router
})
/*eslint-disable */
router.push('home')

// 了解多级别路由的使用,了解路由别名的作用
