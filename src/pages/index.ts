import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../components/App.vue'
import { router } from '../router/index'
import { store } from '../store/'
import axios from '../util/axios'
import VueAxios from 'vue-axios'
Vue.use(VueRouter)
// Vue.config.devtools = true
Vue.use(VueAxios, axios)


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})