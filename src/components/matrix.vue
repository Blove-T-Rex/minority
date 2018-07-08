<template>
	<div id="rr">
		<nav>
			<img style="width:100%;" :src="'https://cdn.sspai.com/article/1af40c38-4c79-b17c-4fac-3a1a3dcb31ef.jpg?imageMogr2/quality/95/thumbnail/!1110x/gravity/Center/crop/1110x'">
		
		</nav>	
		<div style="padding: 15px 0 15px 0; margin-left: 20px;">精选专题文章</div>
		<ul :key="list.length" style="width: 100%;">
			<li v-for="data,index in list" class="name">
				<span @click="xinxi(data.author.id)">
					
				<img  class="require" :src="'https://cdn.sspai.com/'+data.author.avatar" >
				<p>{{data.author.nickname}}</p>
				</span>
				<span @click="hui(data.id)">
					
				<div v-if="data.banner.length>0">
				<img class="tu" :src="'https://cdn.sspai.com/'+data.banner" >
				</div>
				<h2>{{data.title}}</h2>
				<p class="ps">{{data.summary}}</p>
				<div class="right"><i>回复</i>{{data.all_comments_count}}</div>
				</span>
				<div class="right"><i>心</i>{{data.comments_count}}</div>
			</li>
			<button style="width:100%; height: 70px;" @click="hsou()" v-if="list.length!==0">加载更多</button>
		</ul>
		<section>
			<li v-for="data in home" :key="data.id" class="kl" v-if="list.length!==0">
				
				<img class="pian" :src="'https://cdn.sspai.com/'+data.banner"  @click="jj(data.id)">
					
				<div class="sl">
					
				<p class="ti">{{data.title}}</p>

				<p class="pu">{{data.intro}}</p>

				<div class="divv">查看专栏</div>
				</div>
			</li>
		</section>
	</div>
</template>
<script>
	import axios from "axios"
	import router from "../router"
	import {mapState} from "vuex"

	export default{
		data(){

			return{
				list:[],
				offset:0,
				limit:20,
				addlist:[],

			}
		},
		mounted(){
			axios.get(`/v1/articles?offset=0&limit=20&is_matrix=1&sort=matrix_at&include_total=false`).then(res=>{
				// console.log(res.data.list);
				this.list=res.data.list
			}).catch(error=>{
				// console.log(error);
			});
			if (this.home.length==0) {
				this.$store.dispatch("phone")
			}else{

			}

		},
		computed:{
			...mapState(["home"])
		},
		methods:{
			hui(id){
				// console.log(id)
				router.push(`/post/${id}`)
			},
			jj(id){
				router.push(`/famil/${id}`)
			},
			hsou(){

				this.offset += this.limit;


				axios.get(`/v1/articles?offset=${this.offset}&limit=${this.limit}&is_matrix=1&sort=matrix_at&include_total=false`).then(res=>{
				
				this.list = [...this.list,...res.data.list];
			})
			},
			xinxi(id){
				router.push(`/detail/${id}`)
			}
		}

	}
</script>
<style lang="scss" scoped>
section{
	/*height: 100%;*/
}
#rr{
	padding: 0;
	height: 100%;
}
.divv{
	height:32px;
	width: 106px;
	border: 1px solid #000;
	border-radius: 16px;
	padding-right: 0;
	text-align: center;

    line-height: 32px;
    margin-top: 40px;

}
.ti{
	color: #000;
	margin: 0;
	
}
.pu{
	color: #999;
	display:inline;
}
.pian{
	width: 100%;
	height: 246px;
	border-radius: 0px;
	border: 1px solid #ccc;
	border-bottom: none;
	/*padding-bottom:20px;*/
	margin-right: 0px;

}
.tu{
	width: 100%;
	height: 100%;
	border-radius: 0px;
	padding-top: 20px;
}
	.require{
		width: 40px;
		border-radius: 50%;
		float: left;
		height: 40px;
		margin-right: 6px;
	}
	.name{
		list-style: none;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
	
		margin-top: 7px;
	
		padding: 10px;
		
		overflow: hidden;
	}
	.right{
		float: right;
		padding-right: 9px;
		margin-top: 10px;

	}
	h2{
		padding-top: 20px;
	}
	.ps{
		margin-top: 20px;
	}
	.sl{
		border: 1px solid #ccc;
		border-top: none;
		padding: 15px;
		margin-top: 0;
}
.kl{
	padding: 30px;
	list-style: none;
}


</style>

