<template>
  <div id="app">
  	<ul>	
	 	<li v-for="data in list" @click='addRouter(data)'>
	 		{{data}}
	 	</li>
  	</ul>
  	<router-view></router-view>
  </div>
</template>

<script>

import axios from 'axios';
import router from './router';

export default {

	data(){

		return {



			list:["效率工具","手机摄影","生活方式","游戏","硬件"]

		}

	},
	methods:{

		addRouter(id){
			// console.log(id);
			router.push(`/tag/${id}`)

		}

	}

}
</script>

<style>
/*-------样式重置-------*/
body,html{
	height:100%

}
body,h1,h2,h3,h4,h5,h6,p,ul,li,ol,dl,dt,dd,img,a,input{
	padding:0; margin:0;}

ul,ol{
	list-style:none;}	
header,footer,section,figcaption,figure,main,nav,aside,summary,details{
	display:block;}
html{
	font-size: 16px;
	color: #666666;
	}
img{
	display: block;
}
.w{
	width: 286px;
	margin: 0 auto;
}
.l{
	float: left;
}
.r{
	float: right;
}

a{
	text-decoration: none;
	color: #292525;
}
</style>
