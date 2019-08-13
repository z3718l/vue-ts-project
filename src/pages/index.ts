import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../components/App.vue'
import { router } from '../router/index'
Vue.use(VueRouter)


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})