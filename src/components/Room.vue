<template>
  <div id='room'>
    <div id='poker_table'>
      <div id='poker_hands'>
        <div id='poker_hand1'></div>
        <div id='poker_hand2'></div>
        <div id='poker_hand3'></div>
        <div id='poker_hand4'></div>
      </div>
      <div id='poker_control'></div>
    </div>
    <div id='chat_box'>
      <button @click="disconnect" v-if="status === 'connected'">Disconnect</button>
        <button @click="connect" v-if="status === 'disconnected'">Connect</button> {{ status }}
        <br /><br />
        <div v-if="status === 'connected'">
          <form @submit.prevent="sendMessage" action="#">
            <input v-model="message"><button type="submit">Send Message</button>
          </form>
          <ul id="logs">
            <li v-for="(log, index) in logs" v-bind:key="index" class="log">
              {{ log.event }}: {{ log.data }}
            </li>
          </ul>
        </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { CONNECT, DISCONNECT, SEND_MSG } from '../store/actions'
export default {
  name: 'room',
  data: () => ({
    message: ''
  }),
  computed: {
    ...mapState('room', [
      'logs',
      'status'
    ])
  },
  methods: {
    ...mapActions('room', [
      CONNECT,
      DISCONNECT,
      SEND_MSG
    ]),
    connect () {
      this.CONNECT('wss://echo.websocket.org')
    },
    disconnect () {
      this.DISCONNECT()
    },
    sendMessage (e) {
      this.SEND_MSG(this.message)
      this.message = ''
    }
  }
}
</script>
<style scoped>
#room {
    /* height: 100% */
}
#poker_table {
  position: absolute;
  display: block;
  width: 80%;
  height: 100%;
  left: 0px;
}
#poker_hands {
  background-image:url('~@/assets/poker_table.png');
  background-size: contain;
  height: 85%;
}
#chat_box {
  width: 20%;
  height: 100%;
  position: absolute;
  right: 0px;
}
#poker_control {
  background-color: blue;
  height: 15%;
  width: 100%;
  position: absolute;
  bottom: 0px;
}
#poker_hand1 {
  height: 145px;
  background-color: black;
  position: absolute;
  top: 0px;
  left: 30%;
  right: 30%;
}
#poker_hand2 {
  width: 145px;
  background-color: black;
  position: absolute;
  top: 20%;
  left: 0px;
  bottom: 40%;
}
#poker_hand3 {
  width: 145px;
  background-color: black;
  position: absolute;
  top: 20%;
  right: 0px;
  bottom: 40%;
}
#poker_hand4 {
  height: 145px;
  background-color: black;
  position: absolute;
  left: 30%;
  right: 30%;
  bottom: 15%;
}
</style>
