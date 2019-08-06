import { CONNECT, DISCONNECT, SEND_MSG } from '../actions'
import { STATUS_CHANGED, HAS_MESSAGE, CLEAR_MESSAGE } from '../mutations'

const actions = {
  [CONNECT] ({ commit }, url) {
    // this.socket = new WebSocket('wss://echo.websocket.org')
    this.socket = new WebSocket(url)
    this.socket.onopen = () => {
      commit(STATUS_CHANGED, `connected`)
      commit(HAS_MESSAGE, { event: 'Connected to', data: 'wss://echo.websocket.org' })
      this.socket.onmessage = ({ data }) => {
        commit(HAS_MESSAGE, { event: 'Recieved message', data })
      }
    }
  },
  [DISCONNECT] ({ commit }) {
    this.socket.close()
    commit(STATUS_CHANGED, `disconnected`)
    commit(CLEAR_MESSAGE)
  },
  [SEND_MSG] ({ commit }, message) {
    this.socket.send(message)
    commit(HAS_MESSAGE, { event: 'Sent message', data: message })
  }
}

const mutations = {
  [STATUS_CHANGED] (state, status) {
    state.status = status
  },
  [HAS_MESSAGE] (state, message) {
    state.logs.push(message)
  },
  [CLEAR_MESSAGE] (state) {
    state.logs = []
  }
}

const state = () => ({
  socket: null,
  logs: [],
  status: `disconnected`,
  players: []
})

export default {
  namespaced: true,
  actions,
  mutations,
  state
}
