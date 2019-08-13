import Router from 'vue-router'
import Login from '../components/Login.vue'

const routes = [
  { path: '/login', component: Login }
]

export const router = new Router({
  mode: 'hash',
  routes,
  scrollBehavior () {
    return {
      x: 0,
      y: 0
    }
  }
})