import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Design',
    component: () => import('../views/Design/index.vue')
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
