<template>
	<nav>
		<div class="left">
			<a href="#"><img src="static/image/logo.png"></a>
		</div>
		<div class="right">
			<slot></slot>
			<span>登录</span>
		</div>
	</nav>
</template>

<script>
	export default{

	}
</script>

<style scoped>
	nav{
		position: relative;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 50px;
		background: #292525;
		line-height: 50px;
		color:white;
		z-index: 10;
	}
	.left{
		float: left;
	}
	.right{
		float:right;
		padding-right: 12px;
	}
	.right span{
		padding-left: 14px;
	}
	nav .left a img{
		width: 40px;
		height:38px;
		margin-top: 6px;
		padding-left: 5px;
	}
	
</style>