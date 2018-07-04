<template>
	<footer>
		<ul class="logo">
			<li><img src="static/icon_logo/mail.png"></li>
			<li><img src="static/icon_logo/weibo.png"></li>
			<li><img src="static/icon_logo/weixin.png"></li>
			<li><img src="static/icon_logo/twitter.png"></li>
			<li><img src="static/icon_logo/rss.png"></li>
		</ul>
		<ul class="link">
			<li>支持我们</li>
			<li>作者招募</li>
			<li>用户协议</li>
			<li>FAQ</li>
			<li>Contact</li>
		</ul>
		<div data-v-04c1b120="" id="copyright">
            © 2013-2018 <a data-v-04c1b120="" href="">少数派</a> | <a data-v-04c1b120="" href="http://www.miitbeian.gov.cn/" target="_blank">粤ICP备09128966号-4</a>        | CC BY-NC 4.0
    	</div>
	</footer>
</template>

<script>
	export default{
		
	}
</script>
 
<style scoped>
	footer{
		background-color: #fff;
		padding-top: 40px;
		padding-bottom: 40px;
		border-top: 1px solid rgba(0,0,0,.1);
		border-bottom: 1px solid rgba(0,0,0,.1);
		position: fixed;
		bottom: 0;
		width: 100%;
		margin:0;
	}
	footer .logo{
		display: flex;
	    padding-left: 30px;
	    padding-right: 30px;
	}
	footer .logo li{
		flex: 1;
	}
	footer .logo li img{
		width: 36px;
		height: 36px;
		margin-left:13px;
	}
	footer .link{
		display: flex;
		padding-top: 50px;
	}
	footer .link li{
		flex: 1;
		font-size: 12px;
		color:#292525;
		text-align: center;
	}
	footer #copyright[data-v-04c1b120] {
    font-size: 12px;
    font-size: .75rem;
    color: #999;
    text-align: center;
    display: block;
    margin: 20px auto 0;
	}
	footer #copyright a[data-v-04c1b120] {
    color: #999;
    text-decoration: none;
	}
</style>