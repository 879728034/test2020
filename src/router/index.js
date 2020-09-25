import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: template =>  require(['../view/login'], template)
    },
    {
      path: '/tours',
      name: 'Tours',
      component: template => require(['../view/tours'], template)
    },
    {
      path: '/iview',
      name: 'Iview',
      component: template => require(['../view/iview'], template)
    }
  ]
})
