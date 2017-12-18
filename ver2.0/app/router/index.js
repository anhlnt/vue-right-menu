import Vue from 'vue'
import Router from 'vue-router'
import RightMenu from '../components/RightMenu'
import Hello from '../components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RightMenu',
      component: RightMenu
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
