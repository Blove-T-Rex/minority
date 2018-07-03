<template>
  <div id="app">
  	<navbar>
  		<i class="iconfont icon-caidan"></i>
  	</navbar>
  	<sidebar></sidebar>
  </div>
</template>

<script>
import navbar from "./components/common/navbar";
import sidebar from "./components/common/sidebar";

export default {
	data(){
		return{
			isShow:false
		}
	},
	components:{
		navbar,
		sidebar
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
</style>
