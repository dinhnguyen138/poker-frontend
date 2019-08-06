import { GET_INFO, UPDATE_AMOUNT, CLEAR_INFO } from '../actions'
import { GET_INFO_SUCCESS, GET_INFO_FAILURE } from '../mutations'

const actions = {
  [GET_INFO] ({ commit }, token) {
    commit(GET_INFO_SUCCESS, {
      username: 'dinh',
      amount: 1000,
      bid: 0
    })
  },
  [UPDATE_AMOUNT] ({ state }, amount) {
    state.amount += amount
  },
  [CLEAR_INFO] ({ state }) {
    state.username = ''
    state.amount = 0
    state.bid = 0
    state.noinfo = true
  }
}

const mutations = {
  [GET_INFO_SUCCESS] (state, userinfo) {
    state.username = userinfo.username
    state.amount = userinfo.amount
    state.bid = userinfo.bid
    state.noinfo = false
  },
  [GET_INFO_FAILURE] (state) {
    state.noinfo = true
  }
}

const state = () => ({
  username: '',
  amount: 0,
  bid: 0,
  noinfo: true
})

export default {
  namespaced: true,
  actions,
  mutations,
  state
}
