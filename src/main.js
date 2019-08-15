// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import axios from 'axios'
import Vuex from 'vuex'
import store from '@/store/store.js'
import 'signalr'
// import '@/static/UE/ueditor.config.js'
// import '@/static/UE/ueditor.all.min.js'
// import '@/static/UE/lang/zh-cn/zh-cn.js'
// import '@/static/UE/ueditor.parse.min.js'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>'
})
