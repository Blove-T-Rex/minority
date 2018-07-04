<template>
	<transition name="bounce">
		<aside v-show="show">
		<ul @click=handleClick()>
			<router-link to="/topics" tag="li">专题广场</router-link>
			<li>Matrix</li>
			<li>付费栏目</li>
			<li>效率工具</li>
			<li>手机摄影</li>
			<li>生活方式</li>
			<li>游戏</li>
			<li>硬件</li>
		</ul>
		<a class="nav-contact-link">寻求合作 | 支持我们</a>
	</aside>
	</transition>	
</template>

<script>
	export default{
		props:["show"],
		methods:{
			handleClick(){
				this.$emit("clickevent");
			}
		}
	}	
</script>

<style scoped>
	aside{
		position: fixed;
		width: 100%;
		height: 100%;
		top:50px;
		background: white;
		color: #292525;
		z-index: 9;
	}
	aside ul{
		text-align: center;
		margin-top: 4.375rem;
		padding: 0;
		display: flex;
		flex-flow: row wrap;
	}
	aside ul li{
		width: 50%;
		margin-bottom: 25px;
		list-style: none;
	}
	aside .nav-contact-link{
		display: block;
		width: 100%;
	    text-align: center;
	    margin-top: 200px;
	}

	.bounce-enter-active {
	  animation: bounce-in .5s;
	}
	.bounce-leave-active {
	  animation: bounce-in .5s reverse;
	}
	@keyframes bounce-in {
	  0% {
	    transform:translateY(-100%);
	    opacity: 0;
	  }
	  100% {
	    transform:translateY(0px);
	    opacity: 1;
	  }
	}
</style>

