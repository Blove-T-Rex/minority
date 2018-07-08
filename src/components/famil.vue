<template>
	<div>
		
		<ul>
			<li class="kk" v-if="list.length!==0">
				
				<h1>{{list.title}}</h1>
				<p >{{list.intro}}</p>
				<p class="h">{{list.followers_count}}人关注</p>
				<div class="jj">关注专栏</div>
				<img class="ff" :src="`https://cdn.sspai.com/${list.banner}?imageMogr2/quality/95/thumbnail/!1920x385r/gravity/Center/crop/1920x385`">


			</li>
		</ul>
		<footer>
			<li v-for="data,index in help" class="uu">
				<img class="tuu" :src="'https://cdn.sspai.com/'+data.author.avatar">
				<div class="dian" @click="addshow(index)">. . .
					<div v-show="isindex==index&&isshow?'true':''" id="gg">收藏
					     举报</div>
				</div>
				<p class="par">{{data.author.nickname}}</p>
				<img class="pia" :src="'https://cdn.sspai.com/'+data.banner">
				<h3>{{data.title}}</h3>
				<p class="nn">{{data.summary}}</p>
			</li>
		</footer>
		<section>
			<li id="oo">
				<img class="jaxva" :src="'https://cdn.sspai.com/'+photo.avatar">
				<h4>{{photo.nickname}}</h4>
				<p>专栏主编</p><br>
				<hr>
				<div id="kl">
					
				<div class="qq">
					
				<div class="a">专栏编辑      {{list.editors_count}}</div>
				<div class="c">关于</div>
				</div>

				<div class="pp">
					
				<div class="b">专栏作者     {{list.authors_count}}</div>
				<div class="d">投稿</div>
				</div>
				</div>
			</li>
		</section>
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				list:[],
				help:[],
				tate:true,
				isindex:null,
				isshow:false,
				photo:[]
			}
		},
		mounted(){

		axios.get(`/v1/special_columns/${this.$route.params.id}`).then(res=>{
				console.log(res.data.author);
				this.list=res.data;
				this.photo=res.data.author;
			}).catch(error=>{
				// console.log(error);
			});
			axios.get(`/v1/articles?offset=0&limit=20&special_column_ids=${this.$route.params.id}&include_total=false`).then(res=>{
				// console.log(res.data.list);
				this.help=res.data.list
			}).catch(error=>{
				// console.log(error);
			});
		},
		methods:{

			addshow(index){

				this.isindex=index;
				this.isshow=!this.isshow;

			}

			

		}
	}

</script>

<style scoped>
		
        #gg{
        	height: 45px;
        	width: 40px;
        	padding: 10px;
        	border: 1px solid #ccc;
        	padding-right: 50px;
        	position: absolute;
        	top: 30px;
        	background: #fff;
        	left: -67px;
        }
		.dian{
			float: right;
			position: relative;
		}
		.uu{
			padding: 20px;
			margin-top: 20px;
			border-top: 1px solid #ccc;
			border-bottom: 1px solid #ccc;
		}
		.nn{
			padding-top:0;
		}
		.par{
			padding: 0;
			float: left;

		}

	.tuu{
		width: 40px;
		height: 40px;
		border-radius: 50%;
		float: left;
	}
	.pia{
		width: 100%;
		margin-top: 10px;
	}

   .h{
   		font-size: 12px;

}
	.kk{
		color: #fff;
		overflow: hidden;
		background:rgba(0,0,0,.4);
		height: 385px;

		


	}
	.ff{
		width: 100%;
		min-height: 385px;
		z-index: -1;
		position: absolute;
		top: 0;
	}
	h1{
		padding-top: 70px;
		text-align: center;
	}
	p{
	padding-top: 30px;
	text-align: center;
	padding-right: 30px;
	padding-left: 30px;
	/*line-height: 25px;*/
	}
	.jj{
		text-align: center;
		width: 100px;
		height: 34px;
		border: 1px solid #ccc;
		border-radius: 17px;
		line-height: 34px;
		margin: 20px auto;
		margin-bottom: 68px;
	}
	li{
		list-style: none;
	}
	h3{
		margin: 15px;
	}
	.qq{
	display: inline-block;
	padding: 0;
        }
 .jaxva{
			width: 80px;
			height: 80px;
			border-radius: 50%;
			position: relative;
			top: 30px;
			left: 50%;
			margin-left: -40px;
			
		}
		h4{
			text-align: center;
			padding-top: 38px;
		}


		.qq,.pp{
			display: inline-block;
			padding: 0;
			margin: 0 auto;
			width: 48%;
			text-align: center;

		}
		#kl{
			position: relative;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			margin: 0 auto;
			padding-bottom: 30px;
			
			
		}
		.oo{
				/*position:relative;*/
	
		}
		.a{
			padding-bottom: 25px;
			padding-top: 20px;
		}
		.b{
			padding-bottom: 25px;
			padding-top: 20px;
		}
		.c{
			margin-top: 30px;
			border: 1px solid #000;

			display: inline;
			padding-left:20px;
			padding-right:20px;
			border-radius: 11px;


		}
		.d{
			
			border: 1px solid #000;

			display: inline;
			padding-left:20px;
			padding-right:20px;
			border-radius: 11px;

		}
</style>