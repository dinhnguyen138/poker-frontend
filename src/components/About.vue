<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { GET_ROOMS } from '../store/actions'
export default {
  name: 'about'
}
</script>
