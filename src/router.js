import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import About from './components/About.vue'
import Rooms from './components/Rooms.vue'
import Room from './components/Room.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: Rooms
    },
    {
      path: '/room',
      name: 'room',
      component: Room
    }
  ]
})
