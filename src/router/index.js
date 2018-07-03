import Vue from 'vue'
import Router from 'vue-router'
import routerPermission from './routerPerimission.js'

import routes from './routes'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes
})

routerPermission(router)

export default router
