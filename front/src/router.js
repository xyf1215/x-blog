import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const ArticleList = () => import('@/views/article/ArticleList.vue')
const CategoryList = () => import('@/views/category/CategoryList.vue')
const ArchiveList = () => import('@/views/archive/ArchiveList.vue')
const AboutIndex = () => import('@/views/about/AboutIndex.vue')

// const TestList = () => import('./views/TestList.vue')
// const TestView = () => import('./views/TestView.vue')
const Home = () => import('@/views/Home.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({y: 0}),
    routes: [
      {path: '/article', component: ArticleList},
      {path: '/category', component: CategoryList},
      {path: '/archive', component: ArchiveList},
      {path: '/about', component: AboutIndex},
      // {path: '/test/:id', component: TestView},
      {path: '/', component: Home}
    ]
  })
}
