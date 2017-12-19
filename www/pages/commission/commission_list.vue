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
  				width: 50%;
  				height: 1rem;
  				line-height: 1rem;
  				font-size: @font30;
  				text-align: center;
  			}
  			li:first-child span{
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
  		margin-left: -0.7rem;
  		bottom: 0;
  		content: "";
  		width: 1.4rem;
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
			span:nth-child(2){
				display:inline-block;
				width:4.4rem;
				word-break: break-all;
				white-space: pre-wrap;
			}
		}
		p:last-child{margin-bottom: 0;}
  	}
</style>

<template>
	<div class="box">
		<div class="header">
			<ul class="nav">
				<li :class="tabq=='0'?'active':''" @click='clk(0)'>待处理(0)<span></span></li>
				<li :class="tabq=='1'?'active':''" @click='clk(1)'>已处理(1)</li>
			</ul>
		</div>
		<!--列表-->
		<div class="list_box">
			<!--待处理-->
			<ul class="list">
				<li v-for="i in 5">
					<p>DRC北京工艺设计创意产业基地<i>2017-12-16</i></p>
					<p>
						<span>南塔2-</span>
						<span>2908/2908/2908/2908/2908/2908</span>
					</p>
					<p style="color:#959595;">合同编号：URS-SG-KJ-16090055</p>
					<p>审批驳回</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { TabContainer, TabContainerItem } from 'mint-ui';
	export default{
		data(){
			return{
				tabq:'0',
			}
		},
		methods:{
			clk(cut){
				this.tabq = cut;
			}
		}
	}
</script>
