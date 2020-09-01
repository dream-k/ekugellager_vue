import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
<<<<<<< HEAD
import './assets/styles/main.css'
=======

import VueI18n from 'vue-i18n'
import messages from './lang'

>>>>>>> 1f329de29373e5a098e834b9bcac350ddcebf599
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueI18n)
export const i18n = new VueI18n({
  locale: 'de',
  fallbackLocale: 'de',
  messages
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
