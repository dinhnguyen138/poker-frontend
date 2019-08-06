import Vue from 'vue'
import Vuex from 'vuex'
import Authen from './modules/authentication'
import User from './modules/user'
import Room from './modules/room'
import Rooms from './modules/rooms'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    authen: Authen,
    user: User,
    room: Room,
    rooms: Rooms
  }
})
