import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = () => import(/* webpackChunkName: "index" */ '@/views/Index.vue')
const Home = () => import(/* webpackChunkName: "index" */ '@/views/Home.vue')

const ArticleList = () => import(/* webpackChunkName: "article" */ '@/views/article/ArticleList.vue')
const ArticleView = () => import(/* webpackChunkName: "article" */ '@/views/article/ArticleView.vue')

const CategoryList = () => import(/* webpackChunkName: "category" */ '@/views/category/CategoryList.vue')

const ArchiveList = () => import(/* webpackChunkName: "archive" */ '@/views/archive/ArchiveList.vue')

const AboutIndex = () => import(/* webpackChunkName: "about" */ '@/views/about/AboutIndex.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({y: 0}),
    routes: [
      {
        path: '/',
        component: Index,
        children: [
          {
            path: 'article',
            component: ArticleList
          },
          {
            path: '/article/:id',
            component: ArticleView
          },
          {
            path: '/category',
            component: CategoryList
          },
          {
            path: '/archive',
            component: ArchiveList
          },
          {
            path: '/about',
            component: AboutIndex
          },
          {
            path: '',
            component: Home,
            meta: {
              sidebar: false
            }
          }
        ]
      }
    ]
  })
}
