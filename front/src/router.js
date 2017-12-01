import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const TestList = () => import('./views/TestList.vue')
const TestView = () => import('./views/TestView.vue')
const Home = () => import('@/views/Home.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({y: 0}),
    routes: [
      {path: '/archive', component: TestList},
      {path: '/test/:id', component: TestView},
      {path: '/', component: Home}
    ]
  })
}
