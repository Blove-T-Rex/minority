<template>
	<nav>
		<ul>
			<li><a @click="addmodel='all'" :class="addmodel=='all'?addclass:''">全部</a></li>
			<li><a @click="addmodel='yj'" :class="addmodel=='yj'?addclass:''">硬件</a></li>
			<li><a @click="addmodel='xl'" :class="addmodel=='xl'?addclass:''">效率</a></li>
			<li><a @click="addmodel='game'" :class="addmodel=='game'?addclass:''">游戏</a></li>
		</ul>	
		<keep-alive>
		<component :is='addmodel'></component>
		</keep-alive>
	</nav>
</template>

<script>
	import All from "./all";
	import Yj from "./yj";
	import Xl from "./xl";
	import Game from "./game";
	import axios from "axios";
	export default{
		data(){
			return{
				addmodel:'all',
				addclass:'addclass'
			}
		},
		components:{
			All,
			Yj,
			Xl,
			Game
		},
		mounted(){
			this.$store.commit("changeTitle","# 全部专题")
		}
		
	}
</script>

<style scoped>
	nav{
		margin: 0px;
		padding: 0px;	
	}
	nav ul{
		margin-bottom: 30px;
    	background-color: #fff;
    	box-shadow: 0 2px 0 rgba(41,67,73,.01), 0 1px 0 rgba(0,0,0,.05);
    	height: 50px
	}
	nav ul li{
		float: left;
	}
	nav ul li a{
		padding: 0 15px;
	    color: #9b9b9b;
	    font-size: .875rem;
	    display: inline-block;
	    line-height: 50px;
	    text-decoration: none;
	}
	nav .addclass{
		color: #292525;
	}
</style>