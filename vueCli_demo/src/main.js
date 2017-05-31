// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'
import Vue from 'vue'
import App from './App'
import router from './router'
import jQuery from 'jquery'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App :datall="datall"/>',
  components: { App },
  data: {
      datall: [
        {name: 'lzy', time: '15:27', message: 'wo shi li zhi yong'},
        {name: 'lzy', time: '15:27', message: 'wo shi li zhi yong'},
        {name: 'lzy', time: '15:27', message: 'wo shi li zhi yong'},
        {name: 'lzy', time: '15:27', message: 'wo shi li zhi yong'},
        {name: 'lzy', time: '15:27', message: 'wo shi li zhi yong'},
        {name: 'lzy', time: '15:27', message: 'wo shi li zhi yong'},
        {name: 'lzy', time: '15:27', message: 'wo shi li zhi yong'},
        {name: 'lzy', time: '15:27', message: 'wo shi li zhi yong'},
        {name: 'lzy', time: '15:27', message: 'wo shi li zhi yong'},
        {name: 'lzy', time: '15:27', message: 'wo shi li zhi yong'},
        {name: 'lzy', time: '15:27', message: 'wo shi li zhi yong'},
        { name: 'zhz', time: '15:30', message: 'wo shi zhu hao zheng' }]
    }
})
