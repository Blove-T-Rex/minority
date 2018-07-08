<template>
	<section>
		
			
	<div v-for="data,index in list" style="margin-bottom: 30px;">
		<footer style="margin-top: 30px; border-bottom: 1px solid #ccc;  border-top: 1px solid #ccc; padding: 0 20px 0 20px;">
			
		<div style="display: flex; padding: 20px 10px 20px 10px;">
		<img style="width: 40px; height: 40px; border-radius: 50%; padding-right: 15px;" :src="'https://cdn.sspai.com/'+data.author.avatar">
		<p style="padding-right: 20px;">{{data.author.nickname}}</p>
		<p>{{data.action}}</p>
		</div>
		
			
		<img style="width: 100%;" :src="'https://cdn.sspai.com/'+data.banner+'?imageMogr2/quality/95/thumbnail/!360x220r/gravity/Center/crop/360x220'" lazy="loaded">

		<div style="margin-bottom: 30px;">	
		<h3 style="padding: 20px 0 20px 0;">{{data.title}}</h3>
		<p>{{data.summary}}</p>
		</div>
		
		</footer>
	</div>
	<!-- <button @click="jiazai()" style="width: 100%; height: 50px;" v-if="list.length>hello">{{name}}</button> -->
	
		
	</section>
</template>
<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				list:[]
			}
		},
		mounted(){
			
		axios.get(`/v1/articles?offset=0&limit=20&author_ids=${this.$route.params.id}&include_total=false`).then(res=>{
				console.log(res.data.list)
				this.list=res.data.list;
				

				
			})
		
		}
	}
</script>
<style scoped>

	img{
		width: 346px;
		height: 145px;
	}
</style>