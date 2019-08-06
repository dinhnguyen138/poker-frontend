<template>
  <div id="app">
    <Info/>
    <router-view/>
  </div>
</template>
<script>
import router from './router'
import { mapState, mapActions, mapGetters } from 'vuex'
import { REFRESH_TOKEN, GET_INFO } from './store/actions'
import Info from './components/Info'
export default {
  name: 'app',
  created: function () {
    if (this.token !== null) {
      this.REFRESH_TOKEN(this.token)
    }
  },
  computed: {
    ...mapState('authen', ['loading', 'isLogged']),
    ...mapGetters('authen', ['token'])
  },
  watch: {
    isLogged (newValue, oldValue) {
      console.log('logged in' + newValue)
      if (newValue === true) {
        router.push({ path: 'rooms' })
      } else {
        router.push({ path: '/' })
      }
    }
  },
  methods: {
    ...mapActions('authen', [REFRESH_TOKEN]),
    ...mapActions('user', [GET_INFO])
  },
  components: {
    Info
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
