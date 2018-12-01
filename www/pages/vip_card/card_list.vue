<template>
	<div class="add_card_box">
		<!-- 顶部 -->
		<div class="card_top" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
			<h3 style="margin-top: 0.35rem;">VIP会员卡：</h3>
			<p class="card_tg" style="margin-bottom: 0.35rem;">已分发会员卡：<i>{{vipa_data.cardNum}}</i>张，已产生消费金额总计：<i>{{vipa_data.totalConsume}}</i>元</p>
			<h3>VIP储值卡：</h3>
			<p class="card_tg">已绑定储值卡总计：<i>{{vipc_data.cardNum}}</i>张，卡面额总计：<i>{{vipc_data.totalConsume}}</i>元</p>
			<p class="card_tg">实际销售储值卡总计：<i>{{vipcc_data.cardNum}}</i>张，卡面额总计：<i>{{vipcc_data.totalConsume}}</i>元</p>	
			<!-- 卡片列表 -->
			<div class="list_bigbox">
				<ul class="list_box">
					<li>
						<p class="card_xlh">卡序列号</p>
						<p class="card_type">卡类型</p>
						<p class="card_m">金额</p>
						<p class="card_o">订单</p>
						<p class="card_d">绑定日期</p>
					</li>
					<li v-for="(item,index) in allData">
						<p class="card_xlh">{{item.serialnumber}}</p>
						<p class="card_type">{{item.type}}</p>
						<p class="card_m">{{item.amount}}</p>
						<p class="card_o">{{item.order}}</p>
						<p class="card_d">{{item.bindingtime}}</p>
					</li>
				</ul>
			</div>
			<!-- 加载状态 -->
			<div class="jzzt" v-if="allData.length > 4">
				<mt-spinner type="fading-circle" color="#2b70d8"></mt-spinner>
			</div>
		</div>
		<!-- 底部 -->
		<div class="card_bottom" @click="add_card">录入VIP卡</div>
	</div>
</template>

<script>
import axios from 'axios';
import { MessageBox } from 'mint-ui';
import { Indicator } from 'mint-ui';
import { Spinner } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';
	export default {
		data(){
			return{
				page: 1,
				data_length: 10,
				loading: false,
				allData: [],
				kong_state: false,
				vipa_data: {},//会员卡
				vipc_data: {},//储值卡
				vipcc_data: {},//实际销售
			}
		},
		created() {
			// this.get_list();
			this.all_access();
		},
		methods:{
			get_list(page){
				const url = this.$api + "/yhcms/web/vipcard/getSalesCardList.do";//地址
				axios.post(url,{
					"cookie": JSON.parse(localStorage.getItem('cookxs')).sjs,
					"page": page,
					"pageNum": "10"
				}).then((res)=>{
					if(res.data.success){
						if(res.data.data != ''){
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
						}
					}
				}, (err)=>{
					console.log(err);
				});				
			},
			loadMore() {
				setTimeout(() => {
					this.get_list(this.page);//调用
				},100);
			},
			all_access(){//所有数据
				const url = this.$api + "/yhcms/web/vipcard/salesCardCount.do";
				axios.post(url,{
					"cookie": JSON.parse(localStorage.getItem('cookxs')).sjs,
				}).then((res)=>{
					if(res.data.success){
						this.vipa_data = JSON.parse(res.data.VIPA); 
						this.vipc_data = JSON.parse(res.data.VIPC);
						this.vipcc_data = JSON.parse(res.data.VIPCC);
					}
				}, (err)=>{
					console.log(err);
				});
			},
			add_card(){
				this.$router.push({
					path:'/add_card',//跳转到审批页面
					query:{}
				});
			},
			
		}
	}
</script>

<style scoped lang='less'>
@import "../../resources/css/reset.css";
@import "../../resources/css/base.less";
.add_card_box{
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: #00040e;
	overflow: hidden;
}
.card_top h3{
	font-size: 0.3rem;
	color: #fff;
	margin-bottom: 0.24rem;
}
.card_top{
	position: absolute;
	top: 0;
	bottom: 1rem;
	left: 0;
	right: 0;
	overflow: auto;
	-webkit-overflow-scrolling: touch;
	padding: 0 0.3rem;
}
.card_bottom{
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 1rem;
	line-height: 1rem;
	background: url(../../resources/images/card_img/btn_c.png) no-repeat center;
	background-size: 100% 100%;
	font-size: 0.3rem;
	color: #030b13;
	text-align: center;
}
.card_tg{
	font-size: 0.24rem;
	color: #999999;
	line-height: 0.4rem;
}
.card_tg i{
	font-style: normal;
	color: #b8903a;
}
.list_bigbox{
	margin-top: 0.4rem;
}
.list_box{
	width: 6.9rem;
	margin: 0 auto 0;
}
.list_box li{
	display: flex;
	display: -webkit-flex;
	align-items: center;
	-webkit-align-items: center;
	justify-content: space-around;
	-webkit-justify-content: center;
	height: 0.85rem;
	text-align: center;
}
.list_box li:nth-child(odd){
	background: #ffffff;
}
.list_box li:nth-child(even){
	background: #f0f0f0;
}
.card_xlh{
	width: 1.72rem;
}
.card_type{
	width: 1.3rem;
}
.card_m{
	width: 1.2rem;
}
.card_o{
	width: 0.93rem;
}
.card_d{
	width: 1.75rem;
}
.jzzt{
	display: flex;
	display: -webkit-flex;
	justify-content: center;
	-webkit-justify-content: center;
	padding: 0.2rem 0;
	font-size: 0.28rem;
	color: #fff;
}
</style>
