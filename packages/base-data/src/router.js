import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
let Wrapper = () => import('@/App.vue')

const isSingleSpaNav = window.singleSpaNavigate;
const singleRoutes =  [
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about.vue'),
  }
];
const singleSpaRoutes = [
  {
          path: "/*",
          component: Wrapper,
          children:[
            {
              path: 'index',
              name: 'index',
              component: () => import('@/views/index.vue'),
            },
            {
              path: 'about',
              name: 'about',
              component: () => import('@/views/about.vue'),
            }
          ]
        }
]
export default new Router({
  routes: isSingleSpaNav ? singleSpaRoutes : singleRoutes
})
