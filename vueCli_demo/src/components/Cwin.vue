<template>
	<footer class="contain-fluid">
		<div class="input-group">
            <span class='input-group-btn'>
                <button class="btn btn-default" type='button'>emoji</button>
            </span>
            <input type='text' class="form-control" v-model="message" placeholder="say something ···">
            <span class='input-group-btn'>
                <button class="btn btn-default" type='button' @click="send">ah-play</button>
            </span>
        </div>
	</footer>
</template>

<script>
import CHAT from '../api'

export default {
  name: 'cwin',
  data () {
    return {
      message: ''
    }
  },
  methods: {
    send () {
      let message = this.message
      let time = new Date()
      let name = 'shepi'
      let img = '#'

  //  this.$store.dispatch({
  //    type: 'updata',
  //    item: {
  //    name: name,
  //    time: time.getHours() + ':' + (time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()),
  //    message: message,
  //    img: img
  //    }
  //  })
      CHAT.submit({
        name: name,
        time: time.getHours() + ':' + (time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()),
        message: message,
        img: img
      })

      this.message = ''
    }
  }
}
</script>

<style>
	
</style>
