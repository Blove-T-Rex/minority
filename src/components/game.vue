<template>
	<div id="all">
		<ul>
			<li v-for="data in list" @click="handleClick(data.id)" :key="data.id">
				<img :src="`https://cdn.sspai.com/${data.banner}?imageMogr2/quality/95/thumbnail/!828x445r/gravity/Center/crop/828x445`" class="banner">
				<div class="mask">
					<h4>{{data.title}}</h4>
					<footer>
						<p>{{data.articles_count}}篇文章</p>
						<button>收藏</button>
					</footer>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from "axios";
	import gamerouter from "../router";
	export default{
		data(){
			return {
				list:[]
			}
		},
		mounted(){
			axios.get("/api/v1/topics?offset=0&limit=20&include_total=false&tag=%E6%B8%B8%E6%88%8F").then(res=>{
				console.log(res.data);
				this.list = res.data.list
			}).catch(error=>{
				console.log(error);
			})
		},
		methods:{
			handleClick(id){
				gamerouter.push(`/topic/${id}`);
			}
		}
	}
</script>

<style scoped>
	#all ul{
		margin: 0 auto;
	}
	#all ul li{
		margin:0 10px 10px;
		position: relative;
    	display: block;
    	overflow: hidden;
	}
	#all ul li img{
		width: 100%;
		min-height: 160px;
		display: block;
		border-style: none;
	}
	#all .mask{
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(0,0,0,.6);
		transition: all .5s;
		width: 100%;
		height: 100%;
	}
	#all .mask h4{
		margin: 25px 0 0;
    	padding: 0 20px;
    	color: #fff;
    	line-height: 1.5;
    	font-size: 1rem;
    	overflow: hidden;
    	text-overflow: ellipsis;
	}
	#all .mask footer{
		position: absolute;
		width: 100%;
		box-sizing: border-box;
		padding: 20px;
		bottom: 0;
		left: 0;
		text-align: right;
	}
	#all .mask footer p{
		font-size: .75rem;
    	font-weight: 300;
    	font-style: normal;
    	color: #fff;
    	float: left;
    	margin-top: 10px;	
	}
	#all .mask footer button{
		font-size: .75rem;
    	font-weight: 300;
    	display: inline-block;
    	cursor: pointer;
    	background-color: transparent;
    	border-radius: 100px;
    	text-align: center;
    	text-decoration: none;
    	border: 1px solid #fff;	
    	color: #fff;
    	padding: 7px 24px;
	}
</style>