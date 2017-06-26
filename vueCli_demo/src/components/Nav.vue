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
					<li class="dropdown"><a herf="#" data-toggle="dropdown" class="dropdown-toggle">颜色</a>
					<ul class="dropdown-menu">
						<li v-for="item in colorlist" :style="{color: item}">{{item}}</li>
					</ul></li>
					<li class="dropdown"><a herf="#" data-toggle="dropdown" class="dropdown-toggle">联系我们</a>
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
      fontlist: this.$store.state.fontlist,
      colorlist: this.$store.state.colorlist
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
  margin: 0 10px;
}

.dropdown-menu {
	text-align: center;
}

.dropdown-menu>li {
  display: inline-block;
  vertical-align: top;
}

a {
  color: #42b983;
  cursor: pointer;
}

nav {
  background-color: #fba52e;
  background-image: linear-gradient(to right, #e05067, #fba52e); 
}

.navbar-header a {
	color: #fff;
}

a.dropdown-toggle {
	transition: all .6s;
}

.navbar-default .navbar-nav>li>a:focus, .navbar-default .navbar-nav>li>a:hover {
	color: #fff;
}

.navbar-default .navbar-nav>.open>a, .navbar-default .navbar-nav>.open>a:focus, .navbar-default .navbar-nav>.open>a:hover {
	background-color: transparent;
	color: #fff;
}
</style>
