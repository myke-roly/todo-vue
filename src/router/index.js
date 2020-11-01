import Vue from 'vue'
import Router from 'vue-router'
import Card from '@/components/Card'
import OtherRouter from '@/components/Other/'
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
      path: '/other',
      name: 'OtherRouter',
      component: OtherRouter
    },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ]
})
