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
			<div class="kong" v-if="kong_state && allData.length==0">
				<p class="k_ion">
					<img src="../../resources/images/commission/k_icon.png" alt="" />
				</p>
				<p class="k_text">暂无待办工单</p>
			</div>
			<ul class="backlog_list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
				<li v-for="(item,index) in allData" @click="todetail(item,index)">
					<div class="list_ion">
						<img src="../../resources/images/order_gd/list_ion.png" alt="" v-if="item.workType=='工商注册'"/>
						<img src="../../resources/images/order_gd/fysq_ion.png" alt="" v-if="item.workType=='工商注册-费用审批' || item.workType=='工商注册费用审批'"/>
					</div>
					<div class="list_news">
						<p class="name_time">
							<span>{{item.workType}}</span>
							<span>{{item.launchtime}}</span>
						</p>
						<p class="lpzd_zt">
							<span>{{item.lpname}} {{item.zdname}}-{{item.fyname}}</span>
							<span>{{item.status2}}</span>
						</p>
						<p class="fqr">
							<span>发起人：{{item.uname}}</span>
							<span></span>
						</p>
						<p class="gd_number">
							<span>工单编号：{{item.codenum}}</span>
							<span></span>
						</p>
						<p class="gd_state">
							<span>工单状态：{{item.status}}</span>
							<span></span>
						</p>
					</div>
				</li>
				<!-- 加载状态 -->
				<div class="jzzt" v-if="allData.length > 4">
					<mt-spinner type="fading-circle" color="#2b70d8"></mt-spinner>
				</div>
			</ul>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import { Toast } from 'mint-ui';
	import { Spinner } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	import { InfiniteScroll } from 'mint-ui';
	export default {
		data(){
			return{
				time_sort: 0,//0正序，1逆序
				sx_type: 0,
				typeData:['全部','工商注册','问题保修','缴费事宜','其他事项','投诉派单','工商注册-费用审批','问题报修-预算单'],
				type: '',//类型筛选
				allData: [],//待办列表
				page: 1,
				data_length: 10,
				loading: false,
				kong_state: false,
				timeSort: "D",//B大到小A小到大
				search_key: '',//模糊搜索
			}
		},
		created(){
			// this.list_data(this.page);
			this.search_key = this.$route.query.search_key;
		},
		methods:{
			date_px(){//按更新时间排序
				if(this.time_sort == 0){
					this.time_sort = 1;
					$('.term li:first-child span:last-child').css({
						transform: "rotate(180deg)"
					});					
					$('.term li:first-child span:first-child').text('按更新时间倒序');
					this.allData.length = 0;
					this.timeSort = "A";
					this.page = 1;
					this.list_data(this.page,this.timeSort,this.type);//调用
				}else{
					this.allData.length = 0;
					this.time_sort = 0;
					this.page = 1;
					$('.term li:first-child span:last-child').css({
						transform: "rotate(0deg)"
					});
					$('.term li:first-child span:first-child').text('按更新时间正序');
					this.timeSort = "D";
					this.list_data(this.page,this.timeSort,this.type);//调用
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
				if(item == "全部"){
					this.type = "";
				}else{
					this.type = item;
				}
				this.allData.length = 0;
				this.page = 1;
				this.list_data(this.page,this.timeSort,this.type);//调用
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
					path:'/gtasks_search',
					query:{
						laiyuan: '/gtasks_wc'
					}
				});
			},
			todetail(item,index){//跳转详情处理页
				console.log(item.jumPath);
				console.log(item.nodeName);
				//工单发起 发起人查看详情（可以评论）；
				if(item.jumPath == '/activitibusinessreg/basePage.do'){
					this.$router.push({
						path:'/take_orders_see',//跳转到查看
						query:{
							gdid: item.gdid,//工单id
							taskid: item.taskid,
						}
					});
				}
				// 工商注册费用审批跳转
				if(item.jumPath == '/activiticostapproval/approvalPage.do'){
					this.$router.push({
						path:'/fy_detail',//跳转到审批页面
						query:{
							gdid: item.gdid,//工单id
							taskid: item.taskid,
						}
					});
				}
				// 工商注册跳转
				if(item.jumPath == '/activitibusinessreg/receiptPage.do'){
					this.$router.push({
						path:'/take_orders',//跳转到接单页面
						query:{
							gdid: item.gdid,//工单id
							taskid: item.taskid,
							nodeName: item.nodeName,//工单当前处理状态
						}
					});					
				}
				// 跳转业务处理页面
				if(item.jumPath == '/activitibusinessreg/handlePage.do'){
					this.$router.push({
						path:'/take_orders_clz',//跳转到接单页面
						query:{
							gdid: item.gdid,//工单id
							taskid: item.taskid,
							nodeName: item.nodeName,//工单当前处理状态
						}
					});	
				}
				// 工商注册跳转(负责人确认)
				if(item.jumPath == '/activitibusinessreg/personLiablePage.do'){
					this.$router.push({
						path:'/take_orders_qr',
						query:{
							gdid: item.gdid,//工单id
							taskid: item.taskid,
						}
					});	
				}
				// 400回访
				if(item.jumPath == '/activitibusinessreg/returnVisitPage.do'){
					this.$router.push({
						path:'/take_orders_hf',
						query:{
							gdid: item.gdid,//工单id
							taskid: item.taskid,
						}
					});	
				}
			},
			list_data(page,timeSort,type,search_key){//已完成的
				const url = this.$api + "/yhcms/web/activitibusinessreg/handleDoneUpList.do";
				axios.post(url,{
					"search_keywork": search_key,//关键词搜索
					"timeSort": timeSort,//时间排序
					"worList": type,//工单类型
					"curr_page":page,
					"items_perpage":"10",
					"cookie": JSON.parse(localStorage.getItem('cookxs')).sjs
				}).then((res)=>{
					this.data_length = res.data.data.length;
					if(this.data_length<10){
						this.loading = true;//禁止无限滚动
						$('.jzzt').text('已经到底了哦!');
					}
					this.allData = this.allData.concat(res.data.data);
					if(this.allData.length == 0){
						this.kong_state = true;
					}
					this.loading = false;//如果该属性的值为true，则将禁用无限滚动
					this.page++;
				}, (err)=>{
					console.log(err);
				});
			},
			loadMore() {
			  setTimeout(() => {
				this.list_data(this.page,this.timeSort,this.type,this.search_key);//调用
			  },100);
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
	transform: rotate(0deg);
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
.jzzt{
	display: flex;
	display: -webkit-flex;
	justify-content: center;
	-webkit-justify-content: center;
	padding: 0.2rem 0;
	font-size: 0.28rem;
}
</style>
