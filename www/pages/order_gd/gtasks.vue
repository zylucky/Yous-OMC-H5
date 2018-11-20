<template>
	<div class="gtasks_box">
		<!-- 头部 -->
		<div class="gtasks_box_top">
			<div class="search_box">
				<p class="search" @click="to_search">
					<span class="search_ion"></span>
					<span class="search_placeholder">搜索楼盘名称/座栋/房间号</span>
				</p>
			</div>
			<div class="term_box">
				<ul class="term">
					<li @click="date_px">
						<span class="term_txt">按更新时间正序</span>
						<span class="term_ion"></span>
					</li>
					<li @click="type_sx">
						<span class="term_txt">筛选</span>
						<span class="term_ion"></span>
					</li>
				</ul>
			</div>
		</div>
		<!-- 主体 -->
		<div class="gtasks_box_bottom">
			<!-- 筛选项 -->
			<div class="zz_box">
				<ul class="sx_list">
					<li v-for="(item,index) in typeData" @click="sel_type(item,index)" :style="item==type?'color:rgb(43, 112, 216)':'color:#333!important'">{{item}}</li>
				</ul>
			</div>
			<!-- 空样式 -->
			<div class="kong" v-if="false">
				<p class="k_ion">
					<img src="../../resources/images/commission/k_icon.png" alt="" />
				</p>
				<p class="k_text">暂无待办工单</p>
			</div>
			<ul class="backlog_list">
				<li v-for="i in 10" @click="todetail(i)">
					<div class="list_ion"><img src="../../resources/images/order_gd/list_ion.png" alt=""></div>
					<div class="list_news">
						<p class="name_time">
							<span>工商注册</span>
							<span>2018-11-10  11:10</span>
						</p>
						<p class="lpzd_zt">
							<span>商都南塔 2-2907</span>
							<span>接单</span>
						</p>
						<p class="fqr">
							<span>发起人：张三</span>
							<span></span>
						</p>
						<p class="gd_number">
							<span>工单编号：201712161111</span>
							<span></span>
						</p>
						<p class="gd_state">
							<span>工单状态：处理中</span>
							<span></span>
						</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				time_sort: 0,//0正序，1逆序
				sx_type: 0,
				typeData:['全部','工商注册','问题保修','缴费事宜','其他事项','投诉派单','工商注册-费用审批','问题报修-预算单'],
				type: '',
			}
		},
		methods:{
			date_px(){//按更新时间排序
				if(this.time_sort == 0){
					this.time_sort = 1;
					$('.term li:first-child span:last-child').css({
						transform: "rotate(0deg)"
					});					
					$('.term li:first-child span:first-child').text('按更新时间倒序');
				}else{
					this.time_sort = 0;
					$('.term li:first-child span:last-child').css({
						transform: "rotate(180deg)"
					});
					$('.term li:first-child span:first-child').text('按更新时间正序');
				}
			},
			type_sx(){//筛选
				if(this.sx_type == 0){
					this.sx_type = 1;
					$('.term li:last-child span:first-child').css('color','#2b70d8');
					$('.term li:last-child span:last-child').removeClass('sx_active1');
					$('.term li:last-child span:last-child').addClass('sx_active');
					$('.zz_box').css({
						display: 'block'
					});
				}else{
					this.sx_type = 0;
					$('.term li:last-child span:first-child').css('color','#333');
					$('.term li:last-child span:last-child').removeClass('sx_active');
					$('.term li:last-child span:last-child').addClass('sx_active1');
					$('.zz_box').css({
						display: 'none'
					});
				}
			},
			sel_type(item,index){
				this.type = item;
				this.sx_type = 0;
				if(this.type == '全部'){
					this.sx_type = 0;
					$('.term li:last-child span:first-child').css('color','#333');
					$('.term li:last-child span:last-child').removeClass('sx_active');
					$('.term li:last-child span:last-child').removeClass('sx_active2');
					$('.term li:last-child span:last-child').addClass('sx_active1');
				}else{
					$('.term li:last-child span:first-child').css('color','rgb(43, 112, 216)');
					$('.term li:last-child span:last-child').removeClass('sx_active');
					$('.term li:last-child span:last-child').removeClass('sx_active1');
					$('.term li:last-child span:last-child').addClass('sx_active2');
				}
				$('.zz_box').css({
					display: 'none'
				});
			},
			to_search(){//跳转搜索页
				this.$router.push({
					path:'/gtasks_search',//跳转到审批页面
					query:{}
				});
			},
			todetail(index){//跳转详情处理页
				this.$router.push({
					path:'/take_orders',//跳转到审批页面
					query:{}
				});
			}
			
		}
	}
</script>

<style scoped lang='less'>
@import "../../resources/css/reset.css";
@import "../../resources/css/base.less";
.gtasks_box,.gtasks_box_top,.gtasks_box_bottom{
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	overflow: hidden;
	background: #fff;
}
.gtasks_box_top{
	height: 1.96rem;
	border-bottom: 1px solid #e5e5e5;
	overflow: hidden;
}
.gtasks_box_bottom{
	top: 1.96rem;
	overflow: auto;
	-webkit-overflow-scrolling: touch;
}
.search_box{
	position: relative;
	height: 1.08rem;
}
.search{
	position: absolute;
	top: 50%;
	left: 50%;
	margin: -0.32rem 0 0 -2.6rem;
	width: 5.2rem;
	height: 0.64rem;
	border-radius: 0.05rem;
	background: #eaeaea;
}
.term_box{
	height: 0.88rem;
}
.search_ion{
	position: absolute;
	left: 0.24rem;
	top: 50%;
	margin-top: -0.15rem;
	display: inline-block;
	width: 0.31rem;
	height: 0.3rem;
	background: url(../../resources/images/order_gd/search_ion.png) no-repeat center;
	background-size: 100% auto;
}
.search_placeholder{
	padding-left: 0.77rem;
	line-height: 0.64rem;
	font-size: 0.26rem;
	color: #c8c8c8;
}
.term{
	display: flex;
	height: 100%;
}
.term li{
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	width: 50%;
	height: 100%;
	font-size: 0.28rem;
	color: #333333;
}
.term li span{
	display: inline-block;
}
.term_ion{
	width: 0.19rem;
	height: 0.14rem;
	margin-left: 0.22rem;
}
.term li:first-child span:last-child{
	background: url(../../resources/images/order_gd/team_ion2.png) no-repeat center;
	background-size: 100% auto;
	transform: rotate(180deg);
}
.term li:last-child span:last-child{
	background: url(../../resources/images/order_gd/team_ion1.png) no-repeat center;
	background-size: 100% auto;
}
.sx_active{
	background: url(../../resources/images/order_gd/team_ion2.png) no-repeat center!important;
	background-size: 100% auto!important;
	transform: rotate(180deg)!important;
}
.sx_active1{
	background: url(../../resources/images/order_gd/team_ion1.png) no-repeat center!important;
	background-size: 100% auto!important;
	transform: rotate(0deg)!important;
}
.sx_active2{
	background: url(../../resources/images/order_gd/team_ion2.png) no-repeat center!important;
	background-size: 100% auto!important;
	transform: rotate(0deg)!important;
}
.term li:first-child span:first-child{
	color: #2b70d8;
}
.term li:first-child span:last-child{
	color: #333333;
}
.term li:first-child::after{
	position: absolute;
	right: 0;
	content: "";
	display: block;
	height: 0.34rem;
	width: 1px;
	background: #e5e5e5;
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
	margin-top: 1.62rem;
	.k_ion{
		width: 2.12rem;
		height: 1.55rem;
		img{width: 100%;}
	}
	.k_text{
		font-size: @font30;
		color: #999;
		text-align: center;
		margin-top: 0.46rem;
	}
}
.zz_box{
	position: fixed;
	z-index: 9;
	left: 0;
	right: 0;
	top: 1.96rem;
	bottom: 0;
	background: rgba(0,0,0,0.5);
	display: none;
}
.sx_list{
	background: #fff;
	padding-left: 0.3rem;
}
.sx_list li{
	height: 1rem;
	line-height: 1rem;
	font-size: 0.3rem;
	color: #333333;
	border-bottom: 1px solid #e5e4e4;
}
.sx_list li:last-child{
	border-bottom: none;
}
</style>
