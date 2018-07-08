<template>
	<section>
		
			
	<div v-for="data,index in list" v-if="data.action!=='关注专栏'" style="margin-bottom: 30px;">
		<footer v-show="data.action!=='关注用户'" style="margin-top: 30px; border-bottom: 1px solid #ccc;  border-top: 1px solid #ccc; padding: 0 20px 0 20px;">
			
		<div style="display: flex; padding: 20px 10px 20px 10px;">
		<img style="width: 40px; height: 40px; border-radius: 50%; padding-right: 15px;" :src="'https://cdn.sspai.com/'+data.user.avatar">
		<p style="padding-right: 20px;">{{data.user.nickname}}</p>
		<p>{{data.action}}</p>
		</div>
		<div v-for="whese,index in (data.targets)" v-if="whese!==null">
			
		<img style="width: 100%;" v-if="whese.banner.length>0" :src="'https://cdn.sspai.com/'+whese.banner+'?imageMogr2/quality/95/thumbnail/!360x220r/gravity/Center/crop/360x220'">

		<div style="margin-bottom: 30px;">	
		<h3 style="padding: 20px 0 20px 0;">{{whese.title}}</h3>
		<p>{{whese.summary}}</p>
		</div>
		</div>
		</footer>
	</div>
	<button @click="jiazai()" style="width: 100%; height: 50px;" v-if="list.length>hello">{{name}}</button>
	<!-- <div style="width: 100%; text-align: center;height: 50px; color: #f0f; line-height: 35px; font-size: 35px;" v-else>到底了...</div> -->
		
	</section>
</template>
<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				list:[],
				help:0,
				kill:20,
				hello:0,
				name:"加载更多"

			}
		},
		

		mounted(){
			axios.get(`/v1/user_activities?offset=0&limit=20&user_id=${this.$route.params.id}&include_total=false`).then(res=>{
				console.log(res.data)
				this.list=res.data.list;
				if(res.data.list.length<20){
					this.name="到 底 了 ..."
				}

				
			})
		},
	
		methods:{
			jiazai(){
				this.name="正在加载..."

					this.help+=this.kill
				axios.get(`/v1/user_activities?offset=${this.help}&limit=${this.kill}&user_id=${this.$route.params.id}&include_total=false`).then(res=>{
				this.list=[...this.list,...res.data.list]

				this.name="加载更多"
				if (res.data.list.length<20) {
					
					this.name="到 底 了 ..."
				}
						})

			}
		}
	}
</script>
<style scoped>

	/*<img alt="自己动手做智能家居之：智能空调控制" src="https://cdn.sspai.com/2018/07/06/c0adf8b55f6af1bb832f736a21ceacf2.jpg?imageMogr2/quality/95/thumbnail/!360x220r/gravity/Center/crop/360x220" lazy="loaded">*/
</style>