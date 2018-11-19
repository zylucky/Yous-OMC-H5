<template>
	<div class="gs_register_box">
		<!-- 主体 -->
		<div class="gs_box_top">
			<!-- 空样式 -->
			<div class="kong" v-if="false">
				<p class="k_ion">
					<img src="../../resources/images/order_gd/fysp_k_ion.png" alt="" />
				</p>
				<p class="k_text">暂无费用审批</p>
			</div>
			<ul class="backlog_list">
				<li v-for="i in 8">
					<div class="list_ion"><img src="../../resources/images/order_gd/fysq_ion.png" alt=""></div>
					<div class="list_news">
						<p class="name_time">
							<span>工商注册-费用审批</span>
							<span>2018-11-10  11:10</span>
						</p>
						<p class="lpzd_zt">
							<span>申请金额：￥300</span>
							<span>事业部负责人审批</span>
						</p>
						<p class="gd_number">
							<span>工单编号：GS201712161111</span>
							<span></span>
						</p>
					</div>
				</li>
			</ul>
		</div>
		<!-- 底部悬浮按钮 -->
		<div class="gs_box_bottom">
			<div class="btn_fq">发起费用审批</div>
		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style scoped lang='less'>
@import "../../resources/css/reset.css";
@import "../../resources/css/base.less";
.gs_register_box,.gs_box_top,.gs_box_bottom{
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: #fff;
	overflow: hidden;
}
.gs_box_top{
	bottom: 1.2rem;
	overflow: auto;
	-webkit-overflow-scrolling: touch;
}
.gs_box_bottom{
	height: 1.2rem;
	top: initial;
	background: #ffffff;
	border-top: 1px solid #e5e5e5;
}
.btn_fq{
	position: absolute;
	top: 50%;
	left: 50%;
	width: 6.9rem;
	height: 0.9rem;
	line-height: 0.9rem;
	background: #2896ff;
	margin: -0.45rem 0 0 -3.45rem;
	border-radius: 0.05rem;
	font-size: 0.32rem;
	color: #fefefe;
	text-align: center;
}
.backlog_list{
	
}
.backlog_list li{
	display: flex;
	justify-content: space-between;
	padding: 0.5rem 0.3rem;
	border-bottom: 1px solid #e5e5e5;
}
.backlog_list li p{
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 0.05rem;
}
.backlog_list li p:first-child{
	margin-top: 0;
}
.list_ion{
	width: 0.6rem;
	height: 0.6rem;
}
.list_ion img{
	width: 100%;
	height: auto;
}
.list_news{
	width: 6.15rem;
}
.name_time{
	margin-bottom: 0.16rem;
}
.name_time span:first-child{
	font-size: 0.32rem;
	font-weight: bold;
	color: #333;
}
.name_time span:last-child{
	line-height: 0.28rem;
}
.name_time span:last-child,.fqr span:first-child,.gd_number span:first-child{
	font-size: 0.26rem;
	color: #999999;
}
.lpzd_zt span:first-child{
	font-size: 0.28rem;
	color: #333333;
}
.lpzd_zt span:last-child{
	color: #fc8600;
}
.gd_state span:first-child{
	font-size: 0.26rem;
	color: #2b70d8;
}
.kong{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 2.1rem;
	.k_ion{
		width: 1.41rem;
		height: 1.49rem;
		img{width: 100%;}
	}
	.k_text{
		font-size: @font30;
		color: #999;
		text-align: center;
		margin-top: 0.46rem;
	}
}
</style>
