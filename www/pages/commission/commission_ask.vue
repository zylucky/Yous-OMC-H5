<style scoped lang='less'>
	@import "../../resources/css/reset.css";
  	@import "../../resources/css/base.less";
  	.box{
  		position: absolute;
  		left: 0;
  		top: 0;
  		bottom: 0;
  		right: 0;
  	}
  	.header{
  		position: absolute;
  		top: 0;
  		width: 100%;
  		background: #fff;
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
</style>

<template>
	<div class="box">
		<div class="header">
			<ul class="nav">
				<li :class="tabq=='0'?'active':''" @click='clk(0)'>待我审批(0)<span></span></li>
				<li :class="tabq=='1'?'active':''" @click='clk(1)'>我已审批(1)<span></span></li>
				<li :class="tabq=='2'?'active':''" @click='clk(2)'>抄送我的(1)</li>
			</ul>
		</div>
		<!--列表-->
		<div class="list_box">
			<!--待我审批-->
			<ul class="list" v-if="tabq=='0'">
				<li v-for="(i,index) in 3" @click="waitme(index,$event)">
					<p><span>DRC北京工艺设计创意产业基地</span><i>2017-12-16</i></p>
					<p>
						<span>南塔2-2908/2908/2908/2908/2908/2908/2908/2908</span>
					</p>
					<p style="color:#959595;">合同编号：URS-SG-KJ-16090055</p>
					<p>审批驳回</p>
				</li>
			</ul>
			<!--我已审批-->
			<ul class="list" v-if="tabq=='1'">
				<li v-for="i in 2">
					<p>DRC北京工艺设计创意产业基地<i>2017-12-16</i></p>
					<p>
						<span>南塔2-2908/2908/2908/2908/2908/2908/2908/2908</span>
					</p>
					<p style="color:#959595;">合同编号：URS-SG-KJ-16090055</p>
					<p>审批完成</p>
				</li>
			</ul>
			<!--抄送我的-->
			<ul class="list" v-if="tabq=='2'">
				<li v-for="i in 2">
					<p>DRC北京工艺设计创意产业基地<i>2017-12-16</i></p>
					<p>
						<span>南塔2-2908/2908/2908/2908/2908/2908/2908/2908</span>
					</p>
					<p style="color:#959595;">申请人：李四</p>
					<p style="color: #0eac61;">审批通过</p>
					<i class="reddot"></i>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { TabContainer, TabContainerItem } from 'mint-ui';
import { Indicator } from 'mint-ui';
	export default{
		data(){
			return{
				tabq:'0',
			}
		},
		methods:{
			clk(cut){
				Indicator.open({
				  text: 'Loading...',
				  spinnerType: 'fading-circle'
				});
				this.tabq = cut;
				setTimeout(function(){//数据请求成功关闭
					Indicator.close();					
				},1000)
			},
			waitme(index,e){
				console.log(index);	
			}
		},
		mounted(){
			
		}
	}
</script>
