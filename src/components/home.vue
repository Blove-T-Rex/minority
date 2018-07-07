<template>
	<div id="home">
		<div class="top-banner">
			<a>
				<img src="static/image/banner1.png">
			</a>
			<div class="row">
				<div class="row2">
					<a href="#"><img src="static/image/banner.png"></a>
					<a href="#"><img src="static/image/banner2.png"></a>
				</div>
				<div class="row2">
					<a href="#"><img src="static/image/banner3.jpg"></a>
					<a href="#"><img src="static/image/banner4.png"></a>
				</div>
			</div>
		</div>

		<ul v-for="data in userlist">
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
							<p>推荐</p>
							<span class="T-right">...</span>
						</div>
					</dt>
					<dd>
						<a class="thumb">
							<img :src="`https://cdn.sspai.com/${data.banner}?imageMogr2/quality/95/thumbnail/!1440x480r/gravity/Center/crop/1440x480`">
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

		<ul class="footer" v-for="data in footerlist">
			<li>
				<img :src="`https://cdn.sspai.com/${data.image}`">
			</li>
		</ul>		
	</div>
</template>

<script>
	import axios from "axios"
	export default{
		// https://sspai.com/api/v1/articles?offset=0&limit=10&type=recommend_to_home&sort=recommend_to_home_at&include_total=false
		data(){
			return {
				userlist:[],
				sidelist:[],
				footerlist:[]
			}
		},
		mounted(){
			axios.get(`/api/v1/articles?offset=0&limit=10&type=recommend_to_home&sort=recommend_to_home_at&include_total=false`).then(res=>{	
				this.userlist=res.data.list;
			}).catch(error=>{
				console.log(error);
			}),

			axios.get(`/api/v1/topics?limit=999&offset=0&sort=recommended_at&include_total=false&recommended=1`).then(res=>{	
				this.sidelist=res.data.list;
			}).catch(error=>{
				console.log(error);
			}),

			axios.get(`/api/v1/recommends?limit=999&offset=0&status=released&type=home_sidebar&sort=released_or_retired_at`).then(res=>{	
				this.footerlist=res.data.list;
			}).catch(error=>{
				console.log(error);
			})
		}
	}
</script>

<style scoped>
	#home{
		display: block;
	}	
	#home .top-banner{
		margin-top: 35px;
		margin-right:10px;
		margin-left: 10px;
	}
	#home .top-banner a{
		padding-bottom: 3px;
	}
	#home .top-banner a img{
		max-height: 188.594px;
		width: 100%;
		border-style: none;
	}
	#home .top-banner .row{
		display: block;
	}
	#home .top-banner .row .row2{
		display: flex;
	}
	#home .top-banner .row .row2 a:first-of-type {
		padding-right: 3px;
	}
	#home .top-banner .row .row2:first-child img{
		max-height: 91.7969px;
		padding-bottom: 3px;
	}
	#home .top-banner .row .row2 a{
		display: inline-block;
		flex: 1;
	}
	
	#home .article-card{
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
	#home .article-card dt{
		position: relative;
		margin: 0 0 20px;
	}
	#home .article-card dt .avatar{
		float: left;
		margin-right: 10px;
		display: inline-block;
		vertical-align: middle;
	}
	#home .article-card dt .avatar img{
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
	#home .article-card dt h4{
		margin-right: 0;
		vertical-align: middle;
		font-weight: 400;
		margin: 0 10px 0 0;
		font-size: .75rem;
		line-height: 1.66666667;
	}
	#home .article-card dt p{
		color: #9b9b9b;
		vertical-align: middle;
		font-size: .75rem;
	}
	#home .article-card .T-right{
		position: absolute;
		top:-14px;
		right: 0;
		font-size:20px;
		display: block;
		width: 24px;
		height: 24px;
		float: right;
		color: #9b9b9b;
	}
	#home .article-card .thumb{
		margin-bottom: 15px;
		overflow: hidden;
	}
	#home .article-card .thumb img{
		width: 100%;
		border-style: none;
	}
	#home .article-card section h3{
		font-size: 1.25rem;
		line-height: 1.4;
		margin: 0 0 10px;
	}
	#home .article-card section .desc{
		color: #4a4a4a;
		margin: 0;
		display: list-item;
		font-size: .875rem;
		line-height: 1.85614286;
	}

	#home .side{
		width: auto;
		padding:20px;
	}
	#home .side .side-section{
		margin: 0 0 20px;
	}
	#home .side .side-section .title{
		padding-bottom: 26px;
		border-bottom: 1px solid #e9e9ea;
		margin-bottom: 15px;
	}
	#home .side .side-section .title h3{
		font-size: .875rem;
	    line-height: 1.42857143;
	    margin: 0;
	    position: relative;
	    color: #292525;
	    float: left;
	}
	#home .side .side-section .title h3:after{
		content: " ";
	    display: block;
	    height: 27px;
	    width: 100%;
	    border-bottom: 1px solid #292525;
	    position: absolute;
	    left: 0;
	    top: -1px;
	}
	#home .side .side-section .title .more{
		color: #9b9b9b;
	    font-size: .875rem;
	    line-height: 1.42857143;
	    float: right;
	    text-decoration: none;
	}
	#home .side .side-section .topic-card{
		margin-bottom: 10px;
		position: relative;
		margin:0 0 15px;
		text-decoration: none;
	}
	#home .side .side-section .topic-card img{
		width: 100%;
	    display: block;
	    min-height: 160px;
	    border-style: none;
	}
	#home .side .side-section .topic-card .mask{
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
	#home .side .side-section .topic-card .mask h4{
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
	#home .side .side-section .topic-card .mask .btn{
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

	#home .footer{
		padding:0;
		margin: 0;
	}
	#home .footer li{
		padding: 0;
		margin-bottom: 20px;
	}
	#home .footer li img{
		min-height: 160px;
		width: 100%;
	}
</style>