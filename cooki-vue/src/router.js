import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Kitchen from './views/Kitchen.vue'
import Content from './views/Content.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:"/kitchen",
      component: Kitchen
    },
    {
      path:"/content",
      component: Content
    },
    {
      path:"/login",
      component: Login
    },
  ]
})
