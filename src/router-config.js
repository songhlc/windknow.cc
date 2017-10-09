import App from './App.vue'

const HOME = resolve => require(['./components/Home.vue'], resolve)
const BLOG = resolve => require(['./pages/bloglist/index.vue'], resolve)
const routerconfig = [
  // 动态路径参数 以冒号开头
  { path: '/',
    component: App,
    children: [
      {
        path: 'home',
        component: HOME
      }, {
        path: 'blog',
        component: BLOG
      }
    ]
  }
]

export default routerconfig
