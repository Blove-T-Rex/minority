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
</style>
