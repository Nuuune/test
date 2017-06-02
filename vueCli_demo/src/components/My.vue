<template>
<div>  
  <myNav></myNav>
  <Vwin></Vwin>
  <Cwin></Cwin>
</div>    
</template> 

<script>
import myNav from './Nav.vue'
import Vwin from './Vwin.vue'
import Cwin from './Cwin.vue'

export default {
  name: 'myindex',
  components: {myNav, Vwin, Cwin}
}
</script>

<style scoped>
  div { height: 100%; position: relative;}	
</style>
