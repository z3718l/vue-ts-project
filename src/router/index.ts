import Router from 'vue-router'
import Login from '../components/Login.vue'
import ImgEnlarge from '../components/ImgEnlarge.vue'
import ImgEnlargeZoomer from '../components/ImgEnlargeZoomer.vue'

const routes = [
  { path: '/login', component: Login },
  { path: '/imgEnlarge', component: ImgEnlarge },
  { path: '/imgEnlargeZoomer', component: ImgEnlargeZoomer }
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