<template>
  <div id="app">
  	<navbar>
  		<i class="iconfont icon-caidan" @click="isShow=!isShow"></i>
  	</navbar>
  	<sidebar :show="isShow" @clickevent="isShow=false"></sidebar>
  	<section>
        <router-view></router-view>
     </section>
  	<footerbar></footerbar>
  </div>
</template>

<script>
import navbar from "./components/common/navbar";
import sidebar from "./components/common/sidebar";
import footerbar from "./components/common/footerbar";

export default {
	data(){
		return{
			isShow:false
		}
	},
	components:{
		navbar,
		sidebar,
		footerbar
	}
}
</script>

<style>
*{
	margin: 0px;
	padding: 0px;
}

html,body{
	height: 100%;
}
ul{
	list-style: none;
}
section{
    position: relative;
  }
  body,html{
	height:100%

}
body,h1,h2,h3,h4,h5,h6,p,ul,li,ol,dl,dt,dd,img,a,input{
	padding:0; margin:0;}

ul,ol{
	list-style:none;}	
header,footer,section,figcaption,figure,main,nav,aside,summary,details{
	display:block;}
html{
	font-size: 16px;
	color: #666666;
	}
img{
	display: block;
}
.w{
	width: 286px;
	margin: 0 auto;
}
.l{
	float: left;
}
.r{
	float: right;
}

a{
	text-decoration: none;
	color: #292525;
}

</style>
