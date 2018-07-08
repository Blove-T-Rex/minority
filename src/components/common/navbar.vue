<template>
	<nav>
		<div class="left">
			<a href="/"><img src="static/image/logo.png"></a>
		</div>
		<!-- <div class="title">{{changeTitle}}</div> -->
		<div class="title">
			<span>{{changeTitle}}</span>
		</div>
		<div class="right">
			<slot></slot>
			<router-link to="/login" tag="span">登录</router-link>
		</div>
	</nav>
</template>

<script>
	import {mapState} from "vuex";
	export default{
		computed:{
			...mapState(["changeTitle"])
		}
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
		overflow: hidden;
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
	nav .title{
		font-size: 1.125rem;
		text-align: center;
	    color: #fff;
	    margin: 0;
	    height: 50px;
	    line-height: 50px;
	    font-weight: 400;
	    position: absolute;
	    margin-left: 50%;
		transform: translateX(-50%);
	}
	nav .title span{
		display: inline-block;
	}
	nav .left a img{
		width: 40px;
		height:38px;
		margin-top: 6px;
		padding-left: 5px;
	}
	
</style>