<template>
	<div class="contain-fluid chatview" id="scrolldIV">
		<div v-for="(item, index) in items" :key="index">
			<article>
			<figure>
				<img :src="item.img" alt="photo of you"/>
				<figcaption>
					<span class="name">{{item.name}}</span>
					<span class="time">{{item.time}}</span>
				</figcaption>
			</figure>
			<p>{{item.message}}</p>
			</article>
		</div>
	</div>
</template>

<script>
import CHAT from '../api'

export default {
  name: 'vwin',
  created: function () {
    CHAT.init()
  },
  computed: {
    items () {
      return this.$store.state.datalist
    }
  },
  updated: function () {
    jQuery('.chatview').scrollTop(jQuery('.chatview')[0].scrollHeight)
  }
}
</script>

<style scoped>
.chatview { height: 90%; background: #000; box-sizing: border-box; overflow: auto;}
.chatview article { width: 100%; box-sizing: border-box; padding-left: 10px; margin: 10px 0; text-align: left;}
.chatview article figure { color: #fff; padding-left: 5px; margin: 10px 0;}
.chatview article figure img { display: inline-block;}
.chatview article figure figcaption { display: inline-block;}
.chatview article p { width: 40%; background: #fff; border: 1px solid transparent; border-radius: 1rem; word-wrap: break-word; padding: 0.5rem 1rem;}	
</style>
