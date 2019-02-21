<template>
	<div class="gs_register_box">
		<!-- 主体 -->
		<div class="gs_box_top">
			<!-- 空样式 -->
			<div class="kong" v-if="kong_state && listData.length==0">
				<p class="k_ion">
					<img src="../../resources/images/order_gd/fysp_k_ion.png" alt="" />
				</p>
				<p class="k_text">暂无费用审批</p>
			</div>
			<ul class="backlog_list">
				<li v-for="(item,index) in listData" @click="todetail(item)">
					<div class="list_ion"><img src="../../resources/images/order_gd/fysq_ion.png" alt=""></div>
					<div class="list_news">
						<p class="name_time">
							<span>工商注册-费用审批</span>
							<span>{{item.documentaryper}}</span>
						</p>
						<p class="lpzd_zt">
							<span>申请金额：￥{{item.applicationamount}}</span>
							<span>{{item.bankname}}</span>
						</p>
						<p class="gd_number">
							<span>工单编号：{{item.codenum}}</span>
							<span></span>
						</p>
					</div>
				</li>
			</ul>
		</div>
		<!-- 底部悬浮按钮 -->
		<div class="gs_box_bottom">
			<div class="btn_fq" @click="send_approve">发起费用审批</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
	export default {
		data(){
			return{
				gd_id: '',//路由接受的工单id
				listData: [],
				kong_state: false,
				taskid: '',//任务id
			}
		},
		created(){
			this.gd_id = this.$route.query.gdid;
			this.taskid = this.$route.query.taskid;
			this.list();//费用列表
		},
		methods:{
			todetail(item){//跳转详情处理页
				var _this = this;
				this.$router.push({
					path:'/fy_detail',//跳转到审批页面
					query:{
						gdid: _this.gd_id,//工单id
						taskid: _this.taskid,
						id: item.id
					}
				});
			},
			send_approve(){
				var _this = this;
				this.$router.push({
					path:'/fy_from',//跳转到审批页面
					query:{
						gdid: _this.gd_id,//工单id
						taskid: _this.taskid,//任务id
						busId: _this.$route.query.busId,
						documentaryper: _this.$route.query.documentaryper,
						fyid: _this.$route.query.fyid,
						lpid: _this.$route.query.lpid,
						zdid: _this.$route.query.zdid,
						responsible: _this.$route.query.responsible
					}
				});
			},
			list(){
				const url = this.$api + "/yhcms/web/activitibusinessreg/getApprovalList.do";
				axios.post(url,{
					"gdid": this.gd_id
				}).then((res)=>{
					console.log(res.data.data);
					this.listData = res.data.data;
					if(this.listData.length == 0){
						this.kong_state = true;
					}
				}, (err)=>{
					console.log(err);
				});
			},
			
		}
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
