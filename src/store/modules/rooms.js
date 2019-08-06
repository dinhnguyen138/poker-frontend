import { GET_ROOMS } from '../actions'
import { GET_ROOMS_SUCCESS, GET_ROOMS_FAILURE } from '../mutations'

const actions = {
  async [GET_ROOMS] ({ commit }, username, password) {
    // Do log in
    commit(GET_ROOMS_SUCCESS, [
      {
        'id': '1',
        'amount': 500,
        'players': 3
      },
      {
        'id': '2',
        'amount': 500,
        'players': 4
      }
    ])
  }
}

const mutations = {
  [GET_ROOMS_SUCCESS] (state, rooms) {
    state.rooms = rooms
  },
  [GET_ROOMS_FAILURE] (state) {
    state.rooms = []
  }
}

const state = () => ({
  rooms: []
})

export default {
  namespaced: true,
  actions,
  mutations,
  state
}
