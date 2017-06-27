<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  beforeMount: function () {
    jQuery('body').css('height', jQuery(window).height())
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
  height: 100%;
}
@media screen and (max-width: 767px) {
  html {
    font-size: 4px;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  html {
    font-size: 6px;
  }
}
@media (min-width: 992px) and (max-width: 1919px) {
  html {
    font-size: 8px;
  }
}
</style>
