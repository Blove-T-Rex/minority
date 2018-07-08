<template>
	<div>
		
	<section style="border-bottom: 1px solid #999;">
		
	<div style="overflow: hidden; padding-top: 100px; display:flex; margin: 20px;margin-top: 0;  padding-bottom: 40px;">
		<img style="width: 60px; height:60px; border-radius: 50%; padding-right: 20px;" :src="'https://cdn.sspai.com/'+data.avatar">
		<div style=" width:100%;float: left;">
			
		<h1 style="padding-bottom: 30px;">{{data.nickname}}</h1>
		<p style="padding-bottom: 20px;">{{data.bio}}</p>
		<div style="display:flex; padding-bottom: 30px;">
			<label style="margin-right: 15px; color: #999; height: 19px; display: block;">写作总数字   {{data.articles_word_count}}</label>
			<label style="margin-right: 15px; color: #999;">获赞数  {{data.liked_count}}</label>
			<a style="margin-right: 15px; color: #999;">   关注   {{data.following_count}}</a>
			<a style="margin-right: 15px; color: #999;">  被关注  {{data.followed_count}}</a>

		</div>
		<a href="#"><div style="float: left; border: 1px solid #000; height: 32px; line-height: 32px; padding: 0 20px 0 20px; border-radius: 16px; margin-right: 30px;">关注</div></a>
		<a href="#"><div style="float: left; border: 1px solid #000; height: 32px; line-height: 32px; padding: 0 20px 0 20px; border-radius: 16px;">私信</div></a>
		</div>
	</div>
	</section>
	<div style="border-bottom: 1px solid #999;height: 51px; line-height: 51px; padding: 0 30px 0 30px; display: flex;">
		
	<div @click="change(index,htle)" :class="isIndex==index?'jj':'' " style="margin-right:20px; padding-bottom: 14px;  text-decoration: none; color: #999;"  v-for="listData,index in list">
		{{listData}}
	</div>	
	
	</div>
	<router-view></router-view>
	</div>
</template>
<script>
	import router from "../router"
	import axios from 'axios'
	export default{
		data(){
			return{
				data:[],
				htle:'',
				bus:true,
				but:false,
				bug:false,
				isIndex:null,
				list:["动态","个人文章","拥有专栏"]
			}
		},
		mounted(){
			axios.get(`/v1/users/${this.$route.params.id}`).then(res=>{
				
				this.data=res.data
				this.htle=res.data.id

				if (this.$route.path==`/detail/${res.data.id}/updates`) {

					this.isIndex=0;

				};
				if (this.$route.path==`/detail/${res.data.id}/poss`) {

					this.isIndex=1;

				};
				if (this.$route.path==`/detail/${res.data.id}/columns`) {

					this.isIndex=2;

				}
				
			});
		},
		methods:{
			
			change(index,id){

				// this.isIndex=index;
				// console.log(index);
				// console.log(this.isIndex)
				// console.log(this.$route.path)
				if (index==0) {

					router.push(`/detail/${id}/updates`);
					this.isIndex=0;

				};
				if (index==1) {

					router.push(`/detail/${id}/poss`);
					this.isIndex=1;

				};
				if (index==2) {

					router.push(`/detail/${id}/columns`);
					this.isIndex=2;

				}

			}
		}
	}
</script>
<style scoped>
	.jj{
		border-bottom: 2px solid #000;
	}

	.clase{
		border-bottom: 2px solid #000;
	}
</style>