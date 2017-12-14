import Vue from 'vue'
import Router from 'vue-router'

import Login from '@components/Login'

import Index from '@/components/'
import SubIndex from '@/components/SubIndex'
import SiteHome from '@/components/site/Home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: 'site',
          component: SubIndex,
          children: [
            {
              path: 'home',
              component: SiteHome
            }
          ]
        }
      ]
    }
  ]
})
