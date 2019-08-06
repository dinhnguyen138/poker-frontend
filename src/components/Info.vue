<template>
  <div id="nav">
    Poker games
    <div id="info">
      <span style="display:inline" v-text="localAmount" v-if="!noinfo"></span>
      <span style="display:inline" v-text="username" v-if="!noinfo"></span>
      <a href="#" v-on:click="LOGOUT()" v-if="!noinfo">LogOut</a>
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>
<script>
// import router from '../router'
// import store from '../store'
import { mapState, mapActions } from 'vuex'
import { GET_INFO, CLEAR_INFO, LOGOUT } from '../store/actions'

export default {
  name: 'info',
  mounted: function () {
    console.log('info ' + this.isLogged)
    if (this.isLogged) {
      this.GET_INFO(this.jwt)
    }
  },
  computed: {
    ...mapState('authen', [
      'isLogged',
      'jwt'
    ]),
    ...mapState('user', [
      'username',
      'amount',
      'noinfo'
    ]),
    localAmount (state) {
      return '$' + state.amount
    }
  },
  watch: {
    isLogged (newValue, oldValue) {
      console.log('logged in')
      if (newValue === true) {
        // store.dispatch(GET_INFO, store.state.authen.jwt)
        this.GET_INFO('xxxx')
      } else {
        this.CLEAR_INFO()
      }
    }
  },
  methods: {
    ...mapActions('user', [
      GET_INFO,
      CLEAR_INFO
    ]),
    ...mapActions('authen', [
      LOGOUT
    ])
  }
}
</script>
<style scoped>
#info {
  font-weight: bold;
  color: #42b983;
  float: right;
}
#nav {
  padding: 10px;
  text-align: left;
  color: #42b983;
  background: #2c3e50;
}
#info a {
  font-weight: bold;
  color: #42b983;
  padding-left: 10px;
  padding-right: 10px;
}
#info span {
  padding-left: 5px;
  padding-right: 5px;
}
</style>
