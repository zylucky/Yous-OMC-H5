<template>
	<div class="ctrl_box">
		<div class="ctrl_top">
			<div class="ctrl_top_headimg">
				<img src="../../resources/images/order_gd/top_bg.png" alt="">
			</div>
			<ul class="nav_top">
				<li @click="my_db">
					<p class="nav_ion"><img src="../../resources/images/order_gd/ctrl_ion6.png" alt=""></p>
					<p class="nav_txt">我的待办</p>
				</li>
				<li>
					<p class="nav_ion"><img src="../../resources/images/order_gd/ctrl_ion7.png" alt=""></p>
					<p class="nav_txt">我发起的</p>
				</li>
				<li>
					<p class="nav_ion"><img src="../../resources/images/order_gd/ctrl_ion8.png" alt=""></p>
					<p class="nav_txt">我经办的</p>
				</li>
				<li>
					<p class="nav_ion"><img src="../../resources/images/order_gd/ctrl_ion9.png" alt=""></p>
					<p class="nav_txt">已完成的</p>
				</li>
				<li>
					<p class="nav_ion"><img src="../../resources/images/order_gd/ctrl_ion10.png" alt=""></p>
					<p class="nav_txt">抄送我的</p>
				</li>
				<li>
					<p class="nav_ion"><img src="../../resources/images/order_gd/ctrl_ion11.png" alt=""></p>
					<p class="nav_txt">我的跟进</p>
				</li>
			</ul>
		</div>
		<div class="ctrl_bottom">
			<p class="ctrl_bottom_txt">400工单</p>
			<ul class="nav_bottom">
				<li>
					<p class="nav_ion_b"><img src="../../resources/images/order_gd/ctrl_ion1.png" alt=""></p>
					<p class="nav_ion_t">工商注册</p>
				</li>
				<li>
					<p class="nav_ion_b"><img src="../../resources/images/order_gd/ctrl_ion2.png" alt=""></p>
					<p class="nav_ion_t">问题报修</p>
				</li>
				<li>
					<p class="nav_ion_b"><img src="../../resources/images/order_gd/ctrl_ion3.png" alt=""></p>
					<p class="nav_ion_t">缴费事宜</p>
				</li>
				<li>
					<p class="nav_ion_b"><img src="../../resources/images/order_gd/ctrl_ion4.png" alt=""></p>
					<p class="nav_ion_t">其他事项</p>
				</li>
			</ul>
			<ul class="nav_bottom" style="margin-top: 0.5rem;">
				<li>
					<p class="nav_ion_b"><img src="../../resources/images/order_gd/ctrl_ion5.png" alt=""></p>
					<p class="nav_ion_t">投诉派单</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				navData:["我的待办","我发起的","我经办的","已完成的","抄送我的","我的跟进"],
			}
		},
		methods:{
			my_db(){
				this.$router.push({
					path:'/gtasks',//跳转到我的待办
					query:{}
				})
			}
		}
	}
</script>

<style scoped lang='less'>
@import "../../resources/css/reset.css";
@import "../../resources/css/base.less";
	.ctrl_box{
		
	}
	.ctrl_top{
		/* width: 7.5rem; */
		height: 7.45rem;
		background: #fff;
		padding-top: 0.1px;
	}
	.ctrl_bottom{
		/* width: 7.5rem; */
		height: 5.45rem;
		background: #fff;
		margin-top: 0.2rem;
	}
	.ctrl_top_headimg{
		width: 6.91rem;
		height: 2.75rem;
		overflow: hidden;
		margin: 0.25rem auto 0.1rem;
	}
	.ctrl_top_headimg img{
		width: 100%;
		height: 100%;
	}
	.nav_top{
		display: flex;
		display: -webkit-flex;
		flex-wrap: wrap;
		-webkit-flex-wrap: wrap;
	}
	.nav_top li{
		display: flex;
		flex-direction: column;
		-webkit-flex-direction: column;
		display: -webkit-flex;
		align-items: center;
		width: 33.333%;
		margin-top: 0.5rem;
	}
	.nav_ion img{
		width: 100%;
		height: auto;
	}
	.nav_top li:nth-child(1) .nav_ion{
		width: 0.63rem;
		height: 0.75rem;
	}
	.nav_top li:nth-child(2) .nav_ion{
		width: 0.8rem;
		height: 0.65rem;
	}
	.nav_top li:nth-child(3) .nav_ion{
		width: 0.8rem;
		height: 0.73rem;
	}
	.nav_top li:nth-child(4) .nav_ion{
		width: 0.71rem;
		height: 0.8rem;
	}
	.nav_top li:nth-child(5) .nav_ion{
		width: 0.56rem;
		height: 0.71rem;
	}
	.nav_top li:nth-child(6) .nav_ion{
		width: 0.75rem;
		height: 0.74rem;
	}
	.nav_txt{
		margin-top: 0.2rem;
		text-align: center;
		font-size: 0.28rem;
		color: #333333;
	}
	.ctrl_bottom_txt{
		font-size: 0.38rem;
		color: #333333;
		font-weight: bold;
		height: 1.34rem;
		padding: 0.36rem 0 0 0.3rem;
	}
	.nav_bottom{
		display: flex;
		padding: 0 0.3rem;
		justify-content: space-between;
	}
	.nav_bottom li{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.nav_ion_b{
		width: 0.96rem;
		height: 0.96rem;
	}
	.nav_ion_b img{
		width: 100%;
		height: auto;
	}
	.nav_ion_t{
		font-size: 0.28rem;
		color: #333;
		text-align: center;
		margin-top: 0.22rem;
	}
</style>
