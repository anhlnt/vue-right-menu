import Vue from 'vue'
import Router from 'vue-router'
import RightMenu from '../components/RightMenu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RightMenu',
      component: RightMenu
    }
  ]
})
