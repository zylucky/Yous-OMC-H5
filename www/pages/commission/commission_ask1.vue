<style scoped lang='less'>
	@import "../../resources/css/reset.css";
  	@import "../../resources/css/base.less";
  	.box{
  		position: absolute;
  		left: 0;
  		top: 0;
  		bottom: 0;
  		right: 0;
  		background: #fff;
  	}
  	.header{
  		position: absolute;
  		top: 0;
  		width: 100%;
  		background: #fff;
  		-webkit-box-shadow:0px 2px 3px #D6D6D6; 
  		box-shadow:0px 2px 3px #D6D6D6;
  		.nav{
  			display: flex;
  			li{
  				position: relative;
  				width: 33.333333%;
  				height: 1rem;
  				line-height: 1rem;
  				font-size: @font30;
  				text-align: center;
  			}
  			li span{
  				position: absolute;
  				top: 50%;
  				right: 0;
  				margin-top: -0.25rem;
  				display: inline-block;
  				width: 1px;
  				height: 0.5rem;
  				background: #dcdcdc;
  			}
  		}
  	}
  	.active{color:#3586f2;}
  	.active:after{
  		position: absolute;
  		left: 50%;
  		margin-left: -0.91rem;
  		bottom: 0;
  		content: "";
  		width: 1.82rem;
  		height: 0.03rem;
  		background: #3586f2;
  	}
  	.list_box{
  		position: absolute;
  		left: 0;
  		right: 0;
  		top: 1rem;
  		bottom: 0;
  		overflow: auto;
  		ul{padding-bottom: 1rem;}
  	}
  	.list li{
  		position: relative;
  		width:7.06rem;
		margin:0.25rem auto 0;
		border-radius: 0.07rem;
		background:#fff;
		background-size:7.06rem 2.05rem;
		-webkit-box-shadow:0px 0px 7px #dbdae0; 
		box-shadow:0px 0px 7px #dbdae0;
		padding: 0.2rem 0.16rem;
		font-size:@font26;
		p:nth-child(1){
			position: relative;
			font-weight: bold;
			i{
				position: absolute;
				right: 0;
				color: #959595;
				font-weight: normal;
			}
		}
		p{
			display: flex;
			display: -webkit-flex;
			justify-content: flex-start;
			-webkit-justify-content: flex-start;
			margin-bottom:0.15rem;
			span{
				display: inline-block;
				width: 5rem;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
		p:last-child{margin-bottom: 0;}
  	}
  	.list li:hover{background: #eee !important;}
  	.reddot{
  		position: absolute;
  		top: 50%;
  		right: 0.3rem;
  		margin-top: -0.075rem;
  		display: inline-block;
  		width: 0.15rem;
  		height: 0.15rem;
  		background: #fb4949;
  		border-radius: 50%;
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
</style>

<template>
	<div class="box">
		<div class="header">
			<ul class="nav">
				<li :class="tabq=='0'?'active':''" @click='clk(0)'>待我审批({{pendData.length}})<span></span></li>
				<li :class="tabq=='1'?'active':''" @click='clk(1)'>我已审批({{passData.length}})<span></span></li>
				<li :class="tabq=='2'?'active':''" @click='clk(2)'>抄送我的(0)</li>
			</ul>
		</div>
		<!--列表-->
		<div class="list_box">
			<!--带我审批-->
			<div class="kong" v-if="pendData.length==0 && kshow">
				<p class="k_ion">
					<img src="../../resources/images/commission/k_icon.png" alt="" />
				</p>
				<p class="k_text">暂无审批单</p>
			</div>
			<!--我已审批-->
			<div class="kong" v-if="passData.length==0 && kshow1">
				<p class="k_ion">
					<img src="../../resources/images/commission/k_icon.png" alt="" />
				</p>
				<p class="k_text">暂无已审批申请</p>
			</div>
			<!--抄送我的-->
			<div class="kong" v-if="csData.length==0 && kshow2">
				<p class="k_ion" style="width: 1.39rem;height: 1.39rem;">
					<img src="../../resources/images/commission/cs_icon.png" alt="" />
				</p>
				<p class="k_text">暂无抄送我的审批</p>
			</div>
			<!--待我审批-->
			<ul class="list" v-if="tabq=='0'">
				<li v-for="(item,index) in pendData" @click="waitme(item.id)">
					<p><span>{{item.loupan}}</span><i>{{item.createdate | times}}</i></p>
					<p>
						<span>{{item.loudong}}-{{item.fanghao}}</span>
					</p>
					<p style="color:#959595;">合同编号：{{item.htbianhao}}</p>
					<p>
						<i v-if="item.taskZt=='1'">已提交</i>
						<i v-else-if="item.taskZt=='2'" style="color: #3687f3;">待审批</i>
						<i v-else-if="item.taskZt=='3'" style="color: #0fad60;">审批通过</i>
						<i v-else-if="item.taskZt=='4'" style="color: #ff716f;">已驳回</i>
						<i else></i>
					</p>
				</li>
			</ul>
			<!--我已审批-->
			<ul class="list" v-if="tabq=='1'">
				<li v-for="item in passData"  @click="done(item.id)">
					<p>{{item.loupan}}<i>{{item.createdate | times}}</i></p>
					<p>
						<span>{{item.loudong}}-{{item.fanghao}}</span>
					</p>
					<p style="color:#959595;">合同编号：{{item.htbianhao}}</p>
					<p>
						<i v-if="item.taskZt=='1'">已提交</i>
						<i v-else-if="item.taskZt=='2'" style="color: #3687f3;">待审批</i>
						<i v-else-if="item.taskZt=='3'" style="color: #0fad60;">审批通过</i>
						<i v-else-if="item.taskZt=='4'" style="color: #ff716f;">已驳回</i>
						<i else></i>
					</p>
				</li>
			</ul>
			<!--抄送我的-->
			<ul class="list" v-if="tabq=='2'">
				<li v-for="item in csData">
					<p>{{item.loupan}}<i>{{item.createdate | times}}</i></p>
					<p>
						<span>{{item.loudong}}-{{item.fanghao}}</span>
					</p>
					<p style="color:#959595;">申请人：{{item.xiaoshou}}</p>
					<p style="color: #0eac61;">
						<i v-if="item.taskZt=='0'" style="color: #3886f2;">待提交</i>
						<i v-else-if="item.taskZt=='1'">已提交</i>
						<i v-else-if="item.taskZt=='2'" style="color: #3687f3;">待审批</i>
						<i v-else-if="item.taskZt=='3'" style="color: #0fad60;">审批通过</i>
						<i v-else-if="item.taskZt=='4'" style="color: #ff716f;">已驳回</i>
						<i else></i>
					</p>
					<!--<i class="reddot"></i>小红点-->
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import { TabContainer, TabContainerItem } from 'mint-ui';
import { Indicator } from 'mint-ui';
	export default{
		data(){
			return{
				tabq:'0',
				pendData:[],//未审核数据
				passData:[],//已审核数据
				csData:[],//抄送我的数据
				kshow:true,//待我审批无数据下的状态
				kshow1:false,//我已审批无数据下的状态
				kshow2:false,//抄送我的无数据下的状态
			}
		},
		created(){
			Indicator.open({
			  text: 'Loading...',
			  spinnerType: 'fading-circle'
			});
			this.init();
			this.init1();
			this.init2();
		},
		methods:{
			clk(cut){
				Indicator.open({
				  text: 'Loading...',
				  spinnerType: 'fading-circle'
				});

				this.tabq = cut;
				if(cut == '0'){
					this.init();
					if(this.pendData.length==0){						
						this.kshow = true;
						this.kshow1 = false;
						this.kshow2 = false;
					}else{
						this.kshow = false;
						this.kshow1 = false;
						this.kshow2 = false;
					}
				}
				if(cut == '1'){
					this.init1();
					this.kshow1 = true;
					this.kshow = false;
					this.kshow2 = false;
				}
				if(cut == '2'){
					this.init2();
					this.kshow1 = false;
					this.kshow = false;
					this.kshow2 = true;
				}
			},
			init(){//未审核数据接口
				const url = this.$api + "/yhcms/web/qdyongjin/getXsWaitORYiSp.do";
				var cookxs = JSON.parse(localStorage.getItem('cookxs'));
	            axios.post(url,{ 
	            		"cookie":cookxs,
	            		"sptype":'0'
	            }).then((res)=>{
	            	if(res.data.success && res.data.data){
	            		this.pendData = res.data.data;	            		
	            	}else{
	            		this.pendData = [];
	            	}
	            	console.log(this.pendData);
					Indicator.close();
	            }, (err)=>{
	            	Indicator.close();
	            });
			},
			init1(){//已审核数据接口
				const url = this.$api + "/yhcms/web/qdyongjin/getXsWaitORYiSp.do";
				var cookxs = JSON.parse(localStorage.getItem('cookxs'));
	            axios.post(url,{ 
	            		"cookie":cookxs,
	            		"sptype":'1'
	            }).then((res)=>{
	            	if(res.data.success && res.data.data){
	            		this.passData = res.data.data;	            		
	            	}else{
	            		this.passData = [];
	            	}
	            	console.log(this.passData);
					Indicator.close();
	            }, (err)=>{
	            	Indicator.close();
	            });
			},
			init2(){
				const url = this.$api + "/yhcms/web/qdyongjin/getXsWaitORYiSp.do";
				var cookxs = JSON.parse(localStorage.getItem('cookxs'));
	            axios.post(url,{ 
	            		"cookie":cookxs,
	            		"sptype":'2'
	            }).then((res)=>{
	            	if(res.data.success && res.data.data){
	            		this.csData = res.data.data;	            		
	            	}else{
	            		this.csData = [];
	            	}
	            	console.log(this.csData);
					Indicator.close();
	            }, (err)=>{
	            	Indicator.close();
	            });
			},
			
			
			waitme(id){
				this.$router.push({
					path:'/approval1',//跳转到审批页面
					query:{
						"id":id,//所传参数
						"btnshow":1
					}
				})
			},
			done(id){//审批通过跳转点击
				this.$router.push({
					path:'/approval1',//跳转到审批页面
					query:{
						"id":id,//所传参数
						"btnshow":0
					}
				})
			}
		},
		mounted(){
			
		},
	}
</script>
