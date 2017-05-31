<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view :aldata="aldata"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  beforeMount: function () {
    jQuery('body').css('height', jQuery(window).height())
  },
  props: [ 'datall' ],
  data: function () {
    return {
      aldata: this.datall
    }
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
  padding-top: 50px;
  height: 100%;
}
</style>
