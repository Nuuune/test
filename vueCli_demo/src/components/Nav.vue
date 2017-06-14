<template>
	<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
		<div class="contain-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#example-navbar-collapse">
					<span class="sr-only">导航菜单切换按钮</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>				
				</button>
				<a class="navbar-brand" href="#">ChatRoom<span class="small">&nbsp;&nbsp;version 0.1.0</span></a>
			</div>
			<div class="collapse navbar-collapse navbar-right" id="example-navbar-collapse">
				<ul class="nav navbar-nav">
					<li class="dropdown"><a herf="#" data-toggle="dropdown" class="dropdown-toggle">字体</a>
					<ul class="dropdown-menu">
						<li v-for="item in fontlist">{{item}}</li>
					</ul></li>
					<li><a herf="#">颜色</a></li>
					<li class="dropdown"><a herf="#" data-toggle="dropdown" class="dropdown-toggle">联系我们<span class="caret"></span></a>
					<ul class="dropdown-menu">
						<li>QQ</li>
						<li>微信</li>
					</ul></li>
				</ul>
			</div>
		</div>
	</nav>
</template>


<script>
export default {
  name: 'nav',
  data () {
    return {
      fontlist: this.$store.state.fontlist
    }
  }
}
</script>


<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
  vertical-align: top;
}

a {
  color: #42b983;
  cursor: pointer;
}
</style>
