import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout/index.vue'

Vue.use(Router)
export default new Router({
 
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children: [
        {
          path: '/*',
          name: 'web',
          component: () => import(/* webpackChunkName: "WEB" */ '@/views/web/index.vue')
        }
      ]
    }
  ]
})
