import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// const TestList = () => import('./views/TestList.vue')
// const TestView = () => import('./views/TestView.vue')
const Home = () => import('@/views/Home.vue')
const Waiting = () => import('@/views/Waiting.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({y: 0}),
    routes: [
      {path: '/article', component: Waiting},
      {path: '/category', component: Waiting},
      {path: '/archive', component: Waiting},
      {path: '/bbs', component: Waiting},
      {path: '/about', component: Waiting},
      // {path: '/test/:id', component: TestView},
      {path: '/', component: Home}
    ]
  })
}
