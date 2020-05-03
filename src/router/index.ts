import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sitio-web',
    name: 'Website',
    // route level code-splitting
    // this generates a separate chunk (calcular.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "calcular" */ '../views/WebSite/index.vue')
  },
  {
    path: '/diseño',
    name: 'Design',
    // route level code-splitting
    // this generates a separate chunk (calcular.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "calcular" */ '../views/Design/index.vue')
  },
  {
    path: '/resultado',
    name: 'Resultado',
    component: () => import('../views/Form.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
