import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../components/App.vue'
import { router } from '../router/index'
import { store } from '../store/'
Vue.use(VueRouter)
// Vue.config.devtools = true

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})