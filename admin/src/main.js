import Vue from 'vue'
import App from './App'
import store from '@store'
import router from './router.js'
import {sync} from 'vuex-router-sync'

Vue.config.productionTip = false

sync(store, router) // sync router to store

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {App}
})
