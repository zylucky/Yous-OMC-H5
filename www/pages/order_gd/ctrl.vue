<template>
	<div class="ctrl_box">
		<div class="ctrl_top">
			<div class="ctrl_top_headimg" v-for="item in banner">
				<img :src="item.pic" alt="">
			</div>
			<ul class="nav_top">
				<li v-for="(item,index) in navData" @click="my_db(item)">
					<p class="nav_ion"><img :src="item.pic" alt=""></p>
					<p class="nav_txt">{{item.typeName}}</p>
				</li>
			</ul>
		</div>
		<div class="ctrl_bottom">
			<p class="ctrl_bottom_txt">400工单</p>
			<ul class="nav_bottom">
				<li v-for="(item,index) in navData1" @click="gd_click(item)" v-if="index<4">
					<p class="nav_ion_b"><img :src="item.pic" alt=""></p>
					<p class="nav_ion_t">{{item.typeName}}</p>
				</li>
			</ul>
			<ul class="nav_bottom" style="margin-top: 0.5rem;">
				<li v-for="(item,index) in navData1" v-if="index>3">
					<p class="nav_ion_b"><img :src="item.pic" alt=""></p>
					<p class="nav_ion_t">{{item.typeName}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	import axios from 'axios';
	export default {
		data(){
			return{
				// navData:["我的待办","我发起的","我经办的","已完成的","抄送我的","我的跟进"],
				banner:[],
				navData: [],//工单菜单
				navData1: [],//400菜单
			}
		},
		created(){
			this.ctrl_data();
		},
		methods:{
			my_db(item){
				this.$router.push({
					path:item.jumpUrl,//跳转到我的待办
					query:{}
				});
			},
			gd_click(item){
				this.$router.push({
					path:item.jumpUrl,//跳转到我的待办
					query:{}
				});
			},
			ctrl_data(){//模糊查询渠道人员信息
				const url = this.$api + "/yhcms/web/activitibusinessreg/getConsole.do";
				axios.post(url,{
					
				}).then((res)=>{
					var datas = res.data.data;
					for(var i=0; i<datas.length; i++){
						if(datas[i].status == "1"){//轮播
							this.banner.push(datas[i]);
						}
						if(datas[i].status == "2"){//我的菜单
							this.navData.push(datas[i]);
						}
						if(datas[i].status == "3"){//400菜单
							this.navData1.push(datas[i]);
						}
					}
				}, (err)=>{
					console.log(err);
				});
			},
		},
		mounted() {
			// this.close_page();//返回关闭页面
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
		padding: 0 0.3rem;
		/* width: 6.91rem; */
		/* height: 2.75rem; */
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
		-webkit-align-items: center;
		justify-content: space-between;
		-webkit-justify-content: center;
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
