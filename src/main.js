// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './vuex/store'
// ===== Bootstrap and JQuery  ======
window.$ = window.jQuery = require('jquery')
require('bootstrap-sass')
window.$toast = require('toastr')
window.$(function () {
  window.$('[data-toggle="tooltip"]').tooltip()
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
