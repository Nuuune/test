import Vue from 'vue'
import Router from 'vue-router'
import My from '@/components/My'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myindex',
      component: My
    }
  ]
})
