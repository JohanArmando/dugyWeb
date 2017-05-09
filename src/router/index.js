import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/home/Index'
import admin from './admin'
import walker from './walker'
import client from './client'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Index
    },
    admin,
    walker,
    client
  ]
})
