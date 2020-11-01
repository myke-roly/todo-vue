import '@/assets/css/tailwind.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import addTwo from '@/helpers/filter'

Vue.filter('addTwo', addTwo)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
