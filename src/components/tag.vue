<template>
	<div class="container" :key="$route.params.id">
		<div>tag{{$route.params.id}}</div>
		<div class="main" v-if="mainList.length">
			<ul class="dataList" v-for="data in mainList">
				<li>
					<div class="top">
						<a class="photo l" href="#">
							<img :src="`https://cdn.sspai.com/${data.author.avatar}?imageMogr2/quality/95/thumbnail/!80x80r/gravity/Center/crop/80x80`">
						</a>
						<span><a href="">{{data.author.nickname}}</a></span>
						<!-- <span>06月30日</span> -->
						<span class="r T-right">...</span>
					</div>
					<div class="center">
						<a href="#" v-if="`${data.banner}`">
							<img :src="`https://cdn.sspai.com/${data.banner}?imageMogr2/quality/95/thumbnail/!360x220r/gravity/Center/crop/360x220`">	
						</a>
					</div>
					<div class="bottom">
						<section>
							<h3><a href="#">{{data.title}}</a></h3>
							<summary>{{data.promote_intro}}</summary>
						</section>
					</div>
					<footer class="meta">
					</footer>
				</li>	
			</ul>
			<div class="load-more-wrapper loaded">
				<a href="javascript:;" class="load-more" @click="addmainList()">
			        加载更多
			    </a>
			</div>
		</div>
		<div class="side">
			<dl>
				<dt>
					<h3>推荐专题</h3>
					<a href="#" class="all">查看全部</a>
				</dt>
				<dd v-for="data in sideList">
					<a href="#" class="ddphoto">
						<img :src="`https://cdn.sspai.com/${data.banner}?imageMogr2/quality/95/thumbnail/!828x445r/gravity/Center/crop/828x445`">
					</a>
					<div class="mask">
						<h4>{{data.title}}</h4>
						<span>查看专题</span>
					</div>
				</dd>
			</dl>
			<dl>
				<dt>
					<h3>推荐专栏</h3>
					<a href="#" class="all">查看全部</a>
				</dt>
				<dd class="column-card" v-for="data in columnList">
					<a href="#" class="column">
						<img :src="`https://cdn.sspai.com/${data.banner}?imageMogr2/quality/95/thumbnail/!828x442r/gravity/Center/crop/828x442`">	
						<section class="column-content">
							<h4 class="title">{{data.title}}</h4> 
							<p>{{data.intro}}</p> 
							<footer>
								<label>
									<var>{{data.followers_count}}</var>人关注
								</label> 
								<div class="action">
									<span class="btn dark-out-line">查看专栏</span>
								</div>
							</footer>
						</section>
					</a>
				</dd>
			</dl>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	export default{

		data(){

			return{

				mainList:[],
				offset:0,
				limit:20,
				sideList:[],
				columnList:[]

			}

		},

		mounted(){

			axios.get(`/api/v1/articles?offset=${this.offset}&limit=${this.limit}&has_tag=1&tag=${this.$route.params.id}&include_total=false&type=recommend_to_home`).then(res=>{

				// console.log(this.$route.params.id);
				// console.log(res);
				this.mainList = res.data.list;
				// console.log(this.mainList);

			})
			axios.get("/api/v1/topics?limit=4&offset=0&sort=recommended_at&include_total=false&recommended=1").then(res=>{

				// console.log(res);
				this.sideList = res.data.list;
			

			}),
			axios.get(`https://sspai.com/api/v1/special_columns?limit=4&offset=0&sort=followers_count&include_total=false&tag=${this.$route.params.id}`).then(res=>{

				console.log(res);
				this.columnList = res.data.list;
			

			})


		},


		 watch: {
		    // 如果路由有变化，会再次执行该方法
		    '$route': 'fetchData'
		  },

		methods:{

			addmainList(){

				this.offset += this.limit;

				axios.get(`/api/v1/articles?offset=${this.offset}&limit=${this.limit}&has_tag=1&tag=${this.$route.params.id}&include_total=false&type=recommend_to_home`).then(res=>{

					// console.log(res);
					this.mainList = [...this.mainList,...res.data.list];
				 

				})
			},

			fetchData(){
				axios.get(`/api/v1/articles?offset=${this.offset}&limit=${this.limit}&has_tag=1&tag=${this.$route.params.id}&include_total=false&type=recommend_to_home`).then(res=>{

					// console.log(this.$route.params.id);
					// console.log(res);
					this.mainList = res.data.list;
					// console.log(this.mainList);

				})
			}

		}

	}
</script>

<style scoped>
	
	.container{

		width: 100%;
		height: 100%;
		padding-top: 26px; 
		padding-bottom: 20px;

	}
	.main .dataList li{

		padding: 20px;
		border: 1px solid #dbe2e8;
		border-radius: 2px;
		background-color: #fff;
		box-shadow: 0 1px 2px rgba(46,61,73,.08);
		margin-bottom: 15px;
	/*	width: 100%;
		height: 100%;*/

	}
	.main .dataList li .top{
		
		width:100%;
	
		position: relative;
		margin-bottom: 20px;
		overflow: hidden;

	}
	.main .dataList li .top	span{
		
		display: block;
		font-size: .75rem;
		line-height: 1.66666667;
		color: #9b9b9b;

	}
	.main .dataList li .top .photo{
		
		margin-right: 10px;
   		display: inline-block;
    	vertical-align: middle;
    	outline: none;
    	overflow: hidden;
    	width: 40px;
    	height: 40px;
    	border-radius: 50%;


	}
	.main .dataList li .top .photo img{
	
		width: 100%;
		height: 100%;
	}
	.main .dataList li .top .T-right{

		position: absolute;
		top:-14px;
		right: 0;
		font-size:20px;
		display: block;
		width: 24px;
		height: 24px;

	}
	.main .dataList li .center{

		width: 100%;
		height: 46%;
		margin-bottom: 15px;

	}
	.main .dataList li .center a{

		display: block;
		width: 335px;
		height: 204px;

	}
	.main .dataList li .center a img{

		width: 100%;
		height: 100%;

	}
	h3{
		margin-bottom: 10px;
		font-size: 1.25rem;
		line-height: 1.4;
	}
	summary{
	
		font-size: .875rem;
		line-height: 1.85714286;

	}
	.side{

	
		padding: 20px;
	

	}
	.side dt{

		padding-bottom: 6px;
		border-bottom: 1px solid #e9e9ea;
		margin-bottom: 15px;
		height: 1.42857143rem;
		position:relative;
	}
	.side h3{

		font-size: .875rem;
		line-height: 1.42857143rem;
		color: #292525;
		border-bottom: 1px solid #292525;
		position: absolute;
		top: 6px;
	}
	.side .all{

		color: #9b9b9b;
		font-size: .875rem;
		line-height: 1.42857143rem;
		position: absolute;
		right: 0;
		top: 6px;

	}
	.side dd{

		position:relative;

	}
	.side dd .ddphoto{
		
		margin-bottom: 10px;
		display: block;

	}
	.side dd img{
		
		width: 100%;
		height: 100%;

	}
	.side dd .mask{

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(0,0,0,.6);
		width: 100%;
		height: 100%;
	}
	.side dd .mask h4{

		margin: 0;
		padding: 0 20px;
		color: #fff;
		margin-bottom: 24px;
		line-height: 1.55555556;
		font-size: 18px;
		font-size: 1.125rem;
		font-weight: 500;
		overflow: hidden;
		display: -webkit-box;
		text-overflow: ellipsis;

	}
	.side dd .mask span{
		
		font-size: .75rem;
		font-weight: 500;
		padding: 7px 24px;
		display: inline-block;
		cursor: pointer;
		background-color: transparent;
		border-radius: 100px;
		text-align: center;
		text-decoration: none;
		border: 1px solid #fff;
		color: #fff;

	}
	.side .column-card .column{
		
		display: block;
		margin:20px 18px;
		cursor: pointer;
		border: 1px solid #dbe2e8;
		box-shadow: 0 1px 2px rgba(46,61,73,.08);
		padding: 0;
		position: relative;

	}
	.side .column-card .column-content{

		padding: 16px 20px 20px;
		display: block;

	}
	.side .column-card .column-content h4{
	
		font-size: 1.125rem;
		line-height: 1.22222222;
		padding-bottom: 2px;
		font-weight: 400;
		display: block;
		color: #292525;

	}
	.side .column-card .column-content p{

		font-size: .875rem;
		line-height: 1.57142857rem;
		color: #9b9b9b;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		font-weight: 400;

	}
	.side .column-card .column-content label{

	 
		color: #666666;
		font-style: normal;
		font-size: .75rem;
		float: left;
		margin-top: 9px;
		

	}
	.side .column-card .column-content label var{

		margin-right: 2px;
		font-style: normal;
		font-size: .75rem;
		color: #9b9b9b;
    	font-weight: 400;
    	margin-right: 2px;

	}
	footer{

		margin-top: 23px;
		color: #9b9b9b;
		font-size: 12px;
		font-size: .75rem;
		display: block;
		overflow: hidden;
	}
	footer .action{

		float: right;
		font-size: .75rem;
		color: #9b9b9b;
		line-height: 1.15rem;
		box-sizing: border-box;


	}
	footer .action span{
		
		display: inline-block;
	    cursor: pointer;
	    background-color: transparent;
	    border-radius: 100px;
	    text-align: center;
	    text-decoration: none;
	    padding: 7px 24px;
	    font-size: .875rem;
	    border-color: #292525;
	    color: #292525;
	    border:1px solid;

	}
	.load-more-wrapper.loaded a{

		border: 1px solid #dbe2e8;
    	box-shadow: 0 1px 2px rgba(46,61,73,.08);
    	margin-top: 29px;
   		display: block;
   		height: 70px;
    	background-color: #fff;
    	text-align: center;
    	line-height: 70px;
   		width: 100%;
   		cursor: pointer;
   		color: #292525;
   		outline: none;
	}
	.load-more-wrapper.loaded a:hover{
		cursor: pointer;
		color: #d7191a;
	}
</style>