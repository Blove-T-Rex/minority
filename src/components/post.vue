<template>
	<div>
		
	<section>
			<li v-if="test.length !== 0">
				<img :src="'https://cdn.sspai.com/'+ test.author.avatar">
				<p>{{test.author.nickname}}</p>
				<div v-if="test.banner.length>0">
				<img class="tu" :src="'https://cdn.sspai.com/'+test.banner" >
				</div>
				<h2 @click="hui(data.id)">{{test.title}}</h2>
				<p class="ll">{{test.summary}}</p>

				
				

			</li>
	</section>

	<div class="tt">

		<h4>评论:</h4>
		<li v-for="data,index in list">
			<div>
			<img :src="'https://cdn.sspai.com/'+ data.author.avatar">
			<p class="ww">{{data.author.nickname}}</p>
			<p>{{data.comment}}</p>
			<router-link activeClass="hh" tag="span" to="/logh">111</router-link>
			<router-link activeClass="hh" tag="span" to="/logh">回复</router-link>
			<router-link activeClass="hh" tag="span" to="/logh">举报</router-link>
			</div>

			<!-- <div class="zz" v-if="data.comments.length !== 0"> -->
			<div class="zz" v-for="dete,ind in (data.comments)">
				<img :src="'https://cdn.sspai.com/'+ dete.author.avatar">
				<p class="ww">{{dete.author.nickname}}</p>
				<p>{{dete.comment}}</p>
				<router-link activeClass="hh" tag="span" to="/logh">111</router-link>
				<router-link activeClass="hh" tag="span" to="/logh">回复</router-link>
				<router-link activeClass="hh" tag="span" to="/logh">举报</router-link>
			</div>
		</li>

		
		</div>
		<header>
			<li v-for="data,index in photo" class="gg">

				<!-- <div @click="f"> -->
				<img :src="'https://cdn.sspai.com/'+data.author.avatar" class="tt"/>
				<p>{{data.author.nickname}}</p>
				<!-- </div> -->


				<!-- <div @click="h"> -->
				<img class="ii" :src="'https://cdn.sspai.com/'+ data.banner"/>

				<h3>{{data.title}}</h3>
				<!-- </div> -->
				<p class="ss">{{data.summary}}</p>
			</li>
		</header>
	</div>
</template>
<script>
	import axios from "axios"
	
	export default{
		data(){
			return{
				id:this.$route.params.id,
				test:[],
				list:[],
				photo:[]

			}
		},
		mounted(){
			axios.get(`/v1/comments?article_id=${this.$route.params.id}&limit=10&offset=0`).then(res=>{
				// console.log(res.data.list);
				this.list=res.data.list;
				// console.log(this.$route.params.id)
			}).catch(error=>{
				
			});
		axios.get("/v1/articles?offset=0&limit=20&is_matrix=1&sort=matrix_at&include_total=false").then(res=>{
				console.log(res.data.list);
				// console.log(this.id);
				var datalist = res.data.list;
				for (var i = 0; i < datalist.length; i++) {
					
					if (datalist[i].id == this.id) {

						this.test = datalist[i]

					}

				};
				// console.log(this.test)
			}).catch(error=>{
				
			});
			axios.get(`/v1/articles/${this.$route.params.id}/similars`).then(res=>{
				// console.log(res.data);
				// console.log(res.data)
				this.photo=res.data
			}).catch(error=>{
				
			});

		},
		methods:{
			// f(){
			// 	router.push("/home/${}")
			// },
			// h(){
			// 	router.push("/jaxa/${}")
			// }
		}

	}
</script>
<style lang="scss" scoped>
.ll{
	padding: 30px;
}
.tu{
	width: 100%;
	height: 100%;
	margin: 0;
}
.tt{
	margin-left: 25px;
}
.gg{
	border-top: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
	margin-top: 30px;
	padding-top: 20px;

}
.ww{
	padding-bottom: 18px;
}
section img{
	width: 40px;
	height: 40px;
	float: left;
	margin-right: 20px;
	border-radius: 50%;
	margin-bottom: 40px;
}

.ii{
	width: 100%;
	border-radius: 0%;
	height: 100%;
	/*padding-bottom: 30px;*/
	padding-top: 30px;
	
}
li{
	list-style: none;
	padding-bottom: 30px;
}
div{
	margin-top: 20px;
}
.zz{
	margin-top: 60px;
	margin-left: 140px;
}
span{
	float: right;
	margin-right: 10px;
	margin-top: 5px;
}
.tt{
	position: relative;
	border-bottom: 1px solid #ccc;
}
.ui{
	margin-top: 10px;
	float: left;
	position: absolute;
	bottom: 100px;
	left: 0;

}
section{
	position: relative;
	border-bottom: 1px solid #ccc;
}

.ss{padding-top: 20px;

	

}

</style>

