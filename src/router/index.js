import Vue from 'vue'
import Router from 'vue-router'
import Card from '@/components/Card'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Card',
      component: Card
    },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ]
})
