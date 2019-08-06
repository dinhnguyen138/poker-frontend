import { LOGIN, LOGOUT, REFRESH_TOKEN } from '../actions'
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, LOGOUT_FAILURE, REFRESH_SUCCESS, REFRESH_FAILURE, LOADING } from '../mutations'

function getCookie (name) {
  var value = '; ' + document.cookie
  var parts = value.split('; ' + name + '=')
  if (parts.length === 2) return parts.pop().split(';').shift()
}

const actions = {
  async [LOGIN] ({ commit }, username, password) {
    // Do log in
    commit(LOADING)
    commit(LOGIN_SUCCESS, 'sample_jwt')
  },
  async [LOGOUT] ({ dispatch, commit }) {
    // Do log out
    commit(LOGOUT_SUCCESS)
  },
  [REFRESH_TOKEN] ({ commit }, token) {
    console.log('refresh')
    // Do refresh token
    commit(LOADING)
    commit(REFRESH_SUCCESS, token)
  }
}

const mutations = {
  [LOGIN_SUCCESS] (state, token) {
    state.loading = false
    state.isLogged = true
    state.jwt = token
    document.cookie = `token=${state.jwt}`
  },
  [LOGIN_FAILURE] (state) {
    state.loading = false
    state.isLogged = false
    state.jwt = null
  },
  [LOGOUT_SUCCESS] (state) {
    console.log('logout_success')
    state.loading = false
    state.isLogged = false
    state.jwt = null
    document.cookie = 'token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT'
  },
  [LOGOUT_FAILURE] (state) {
  },
  [REFRESH_SUCCESS] (state, token) {
    console.log('refresh_success')
    state.loading = false
    state.isLogged = true
    state.jwt = token
    document.cookie = `token=${state.jwt}`
  },
  [REFRESH_FAILURE] (state) {
    state.loading = false
  },
  [LOADING] (state) {
    state.loading = true
  }
}

const getters = {
  token: state => {
    if (state.jwt != null) {
      return state.jwt
    }
    return getCookie('token')
  }
}

const state = () => ({
  loading: false,
  isLogged: false,
  jwt: null
})

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters
}
