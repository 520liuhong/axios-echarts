import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import pie from '@/views/pie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pie',
      component: pie
    }
  ]
})
