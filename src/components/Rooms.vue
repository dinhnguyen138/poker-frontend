<template>
  <div class="rooms">
    <p v-text="totalRooms"></p>
    <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Num Player</th>
            <th>Join</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in rooms" :key="index">
            <td>{{item.id}}</td>
            <td>{{item.amount}}</td>
            <td>{{item.players}}</td>
            <td><button @click="joinRoom(index)">Join</button></td>
          </tr>
        </tbody>
    </table>
  </div>
</template>
<script>
import router from '../router'
import { mapState, mapActions } from 'vuex'
import { GET_ROOMS } from '../store/actions'
export default {
  name: 'rooms',
  mounted: function () {
    if (this.isLogged) {
      this.GET_ROOMS(this.jwt)
    } else {
      router.push({ path: '/' })
    }
  },
  computed: {
    ...mapState('authen', [
      'isLogged',
      'jwt'
    ]),
    ...mapState('rooms', [
      'rooms'
    ]),
    totalRooms (state) {
      return state.rooms.length
    }
  },
  methods: {
    ...mapActions('rooms', [
      GET_ROOMS
    ]),
    joinRoom (index) {
      console.log('Join room')
      router.push({ path: 'room' })
    }
  }
}
</script>
<style scoped>
</style>
