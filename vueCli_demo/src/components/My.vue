<template>
<div>  
  <myNav></myNav>
  <Vwin :dataItems="dataItems"></Vwin>
</div>    
</template> 

<script>
import myNav from './Nav.vue'
import Vwin from './Vwin.vue'

export default {
  props: [ 'aldata' ],
  name: 'myindex',
  components: {myNav, Vwin},
  data: function () {
    return { dataItems: this.aldata }
  }
}
</script>

<style scoped>
  div { height: 100%; }	
</style>
