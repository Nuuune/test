// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './vuex/store'
import jQuery from 'jquery'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App />',
  components: { App }
})
