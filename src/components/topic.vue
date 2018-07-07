<template>
	<div id="detail" :key="$route.params.id">
		<div class="topic-banner" :style="{backgroundImage: 'url(\''+`https://cdn.sspai.com/${dataFilm.banner}?imageMogr2/quality/95/thumbnail/!1440x330r/gravity/Center/crop/1440x330`+'\')',backgroundPosition:'center center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}" v-if="dataFilm.intro">
			<div class="mask"></div>
			<div class="text">
				<h1>{{dataFilm.title}}</h1>
				<h2>{{dataFilm.intro}}</h2>
				<div class="tags">
					<a class="tag">#{{dataFilm.tags[0].title}}</a>
				</div>
				<div class="console">
					<button class="btn">收藏</button>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="main">
				<h3 class="newTitle">最新</h3>
			</div>
		</div>

		<ul v-for="data,index in userlist">
			<li>
				<dl class="article-card">
					<dt>
						<div class="user-card">
							<a class="avatar">
								<img :src="`https://cdn.sspai.com/${data.author.avatar}?imageMogr2/quality/95/thumbnail/!80x80r/gravity/Center/crop/80x80`">
							</a>
							<h4>
								{{data.author.nickname}}
							</h4>
							<p></p>
						</div>
					</dt>
					<dd>
						<a class="thumb">
							<img :src="`https://cdn.sspai.com/${data.banner}?imageMogr2/quality/95/thumbnail/!360x220r/gravity/Center/crop/360x220`">
						</a>
						<section>
							<h3 class="title">
								{{data.title}}
							</h3>
							<summary class="desc">
								{{data.promote_intro}}
							</summary>
						</section>
					</dd>
				</dl>
			</li>
		</ul>

		<div class="side">
			<div class="side-section">
				<div class="title">
					<h3>推荐专题</h3>
					<a href="/topics" class="more">查看全部</a>
				</div>

				<ul v-for="data in sidelist">
					<li class="topic-card">
						<img :src="`https://cdn.sspai.com/${data.banner}?imageMogr2/quality/95/thumbnail/!828x445r/gravity/Center/crop/828x445`">
						<div class="mask">
							<h4>
								{{data.title}}
							</h4>
							<span class="btn">查看专题</span>
						</div>
					</li>
				</ul>			
			</div>
		</div>

	</div>
</template>

<script>
	import axios from "axios"
	export default{
		data(){
			return {
				dataFilm:{},
				userlist:[],
				datetime:{},
				date:new Date(),
				sidelist:[]			
			}
		},
		mounted(){
			axios.get(`/api/v1/topics/${this.$route.params.id}`).then(res=>{
				
				this.dataFilm=res.data;
			}).catch(error=>{
				console.log(error);
			}),
// https://sspai.com/api/v1/topics?limit=4&offset=0&sort=recommended_at&include_total=false&recommended=true

			axios.get(`/api/v1/articles?offset=0&limit=20&topic_id=${this.$route.params.id}&sort=created_at&include_total=false`).then(res=>{
				
				this.userlist=res.data.list;
			}).catch(error=>{
				console.log(error);
			}),

			axios.get("/api/v1/topics?limit=4&offset=0&sort=recommended_at&include_total=false&recommended=true").then(res=>{
				this.sidelist=res.data.list;
			}).catch(error=>{
				console.log(error);
			})
		},
		computed : {
			// 计算上映日期
			// formatCreate(index){
				// 计算属性时第一次为空，后面就都是undefined了
					// var date = new Date();
					// for(var i=0;i<this.userlist.length;i++){

					// 	date.setTime(userlist[index].created_at);
						
					// 	var time = (date.setTime(userlist[index].created_at).getMonth() + 1) + '月' + date.setTime(userlist[index].created_at).getDate() + '日';

					// 	this.$set(this.userlist[i],"created_at",time);

					// }
					// 从数据中难道每个影片上映时间的毫秒数
					// return this.userlist[index].created_at;

					// return (date.getMonth() + 1) + '月' + date.getDate() + '日';
				
			// 	if (this.userlist.created_at) {
			// 		var date = new Date();
					
			// 		date.setTime(this.userlist.created_at);

			// 		return (date.getMonth() + 1) + '月' + date.getDate() + '日';
			// 	}
			// 	return '';
			// }
		}
	}
</script>
<style scoped>
	#detail .topic-banner{
		position: relative;
    	text-align: center;
    	height: 330px;
	}
	#detail .topic-banner .mask{
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
	    width: 100%;
		background-color: rgba(0,0,0,.26);
	}
	#detail .topic-banner .text{
		position: relative;
    	top: 22%;
    	padding: 0 20px;
	}
	#detail .topic-banner h1{
		font-size: 1.5rem;
		line-height: 1.375;
		color:#fff;
		margin: 0 0 12px;
	}
	#detail .topic-banner h2{
		font-size: .875rem;
		line-height: 1.85714286;
		color: #fff;
		margin: 0 0 20px;
	}
	#detail .topic-banner .tags{
		margin: 25px 0;
	}
	#detail .topic-banner .tags .tag{
		display: inline-block;
	    background-color: #e6e6e6;
	    color: #9b9b9b;
	    font-size: .75rem;
	    line-height: 1.41666667;
	    padding: 5px 12px 6px 11px;
	    margin-bottom: 10px;
	}
	#detail .topic-banner .console .btn{
		display: inline-block;
	    cursor: pointer;
	    background-color: transparent;
	    border-radius: 100px;
	    text-align: center;
	    text-decoration: none;
	    border: 1px solid #fff;
	    padding: 7px 24px;
	    color: #fff;
	    font-size: .875rem;
	}
	#detail .container{
		width: 100%!important;
	    margin: 0;
	    overflow: hidden;
	}
	#detail .container .main{
		margin: 0 auto;
    	padding-bottom: 20px;
	}
	#detail .container .newTitle{
		padding-left: 10px;
		display: block;
    	font-size: 1.17em;
    	margin-top: 10px;
    	font-weight: normal;
	}
	
	#detail .article-card{
		border-left: none;
	    border-right: none;
	    margin-bottom: 15px;
	    border: 1px solid #dbe2e8;
	    border-radius: 2px;
	    background-color: #fff;
	    box-shadow: 0 1px 2px rgba(46,61,73,.08);
	    padding: 20px;
	    margin: 0 0 20px;
	}
	#detail .article-card dt{
		position: relative;
		margin: 0 0 20px;
	}
	#detail .article-card dt .avatar{
		float: left;
		margin-right: 10px;
		display: inline-block;
		vertical-align: middle;
	}
	#detail .article-card dt .avatar img{
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
	#detail .article-card dt h4{
		margin-right: 0;
		vertical-align: middle;
		font-weight: 400;
		margin: 0 10px 0 0;
		font-size: .75rem;
		line-height: 1.66666667;
	}
	#detail .article-card dt p{
		color: #9b9b9b;
		vertical-align: middle;
		font-size: .75rem;
	}
	#detail .article-card .thumb{
		margin-bottom: 15px;
		overflow: hidden;
	}
	#detail .article-card .thumb img{
		width: 100%;
		border-style: none;
	}
	#detail .article-card section h3{
		font-size: 1.25rem;
		line-height: 1.4;
		margin: 0 0 10px;
	}
	#detail .article-card section .desc{
		color: #4a4a4a;
		margin: 0;
		display: list-item;
		font-size: .875rem;
		line-height: 1.85614286;
	}
	#detail .side{
		width: auto;
		padding:20px;
	}
	#detail .side .side-section{
		margin: 0 0 20px;
	}
	#detail .side .side-section .title{
		padding-bottom: 26px;
		border-bottom: 1px solid #e9e9ea;
		margin-bottom: 15px;
	}
	#detail .side .side-section .title h3{
		font-size: .875rem;
	    line-height: 1.42857143;
	    margin: 0;
	    position: relative;
	    color: #292525;
	    float: left;
	}
	#detail .side .side-section .title h3:after{
		content: " ";
	    display: block;
	    height: 27px;
	    width: 100%;
	    border-bottom: 1px solid #292525;
	    position: absolute;
	    left: 0;
	    top: -1px;
	}
	#detail .side .side-section .title .more{
		color: #9b9b9b;
	    font-size: .875rem;
	    line-height: 1.42857143;
	    float: right;
	    text-decoration: none;
	}
	#detail .side .side-section .topic-card{
		margin-bottom: 10px;
		position: relative;
		margin:0 0 15px;
		text-decoration: none;
	}
	#detail .side .side-section .topic-card img{
		width: 100%;
	    display: block;
	    min-height: 160px;
	    border-style: none;
	}
	#detail .side .side-section .topic-card .mask{
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
	#detail .side .side-section .topic-card .mask h4{
		margin: 0;
	    padding: 0 20px;
	    color: #fff;
	    margin-bottom: 24px;
	    line-height: 1.55555556;
	    font-size: 1.125rem;
	    font-weight: 500;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	#detail .side .side-section .topic-card .mask .btn{
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

</style>