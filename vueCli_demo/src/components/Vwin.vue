<template>
	<div class="contain-fluid chatview" id="scrolldIV">
		<div v-for="(item, index) in items" :key="index">
			<article>
			<figure>
				<img :src="item.img" alt="photo of you"/>
				<figcaption>
					<span class="name">{{item.name}}</span>
				</figcaption>
			</figure>
			<p>{{item.message}}</p>
			<span class="time">{{item.time}}</span>
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
.chatview { height: calc(100% - 34px); background: #000; box-sizing: border-box; overflow: auto; padding: 50px 0 0 0;}
.chatview article { width: 100%; box-sizing: border-box; padding-left: 10px; margin: 10px 0; text-align: left;  position: relative;}
.chatview article figure { color: #fff; padding-left: 5px; margin: 10px 0; width: 40%;}
.chatview article figure img { display: inline-block; width: 4rem; height: 4rem; background: pink; border-radius: 50%;}
.chatview article figure figcaption { display: inline-block; margin-left: 1%;}
.chatview article figure figcaption span.name { font-size: 2.5rem;}
.chatview article span.time { display: inline-block; color: #fff; font-size: 2rem;}
.chatview article p { width: 40%; background: #fff; border: 1px solid transparent; border-radius: 1rem; word-wrap: break-word; padding: 0.5rem 1rem; display: inline-block; vertical-align: middle; margin: 0; font-size: 2rem;}	
</style>
