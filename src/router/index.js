import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

import { i18n } from '../main.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:lang',
    component: {
      template: '<router-view></router-view>'
    },
    beforeEnter (to, from, next) {
      const lang = to.params.lang
      if (!['en', 'de'].includes(lang)) return next('de')
      if (i18n.locale !== lang) {
        i18n.locale = lang
      }
      return next()
    },
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        component: About
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  },
  {
    path: '*',
    redirect: '/de'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
