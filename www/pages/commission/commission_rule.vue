<style scoped lang='less'>
	@import "../../resources/css/reset.css";
  	@import "../../resources/css/base.less";
  	.box{
  		position: absolute;
  		left: 0;
  		right: 0;
  		bottom: 0;
  		top: 0;
  		overflow: auto;
  	}
	.site_card{
		width:7.06rem;
		height:2.05rem;
		margin:0.25rem auto 0;
		border-radius: 0.07rem;
		background:url(../../resources/images/commission/card_bg.png) no-repeat center;
		background-size:7.06rem 2.05rem;
		-webkit-box-shadow:0px 0px 7px #2991f4;
		box-shadow:0px 0px 7px #2991f4;
		color:@cl_white;
		padding: .22rem 0 0 .3rem;
		p:nth-child(1){font-weight: bold;font-size:@font36;}
		p{
			display: flex;
			display: -webkit-flex;
			justify-content: flex-start;
			-webkit-justify-content: flex-start;
			margin-bottom:0.15rem;
			span:nth-child(2){
				display:inline-block;
				width:5.5rem;
				word-break: break-all;
				white-space: pre-wrap;
			}
		}
		p:last-child{font-size:@font32;}
	}
	.new_box{
		position: relative;
		width:7.06rem;
		margin: 0.25rem auto 0;
		border-radius: 0.08rem;
		-webkit-box-shadow:0px 0px 10px #C5C4C9;
		box-shadow:0px 0px 10px #C5C4C9;
		font-size: @font32;
		background-color:#fff;
		h3{
			border-top-left-radius: 0.08rem;
			border-top-right-radius: 0.08rem;
			height: 0.95rem;
			line-height: 0.95rem;
			font-weight: bold;
			padding-left: 0.3rem;
			background: #eeeeee;
			-webkit-box-shadow:0px 0px 8px #D9D9D9;
			box-shadow:0px 0px 8px #D9D9D9;
		}
		ul{padding: 0.4rem 0.2rem 0.4rem 0.3rem;}
		ul li{
			display: flex;
			display: -webkit-flex;
			align-items: center;
			-webkit-align-items: center;
			font-size: @font30;
			p{margin-bottom: 0.2rem;}
			p:first-child{color: #969696;}
			p:last-child{color: #323232;}
			i{font-size: @font26;margin-bottom: 0.2rem;margin-left: .6rem;color: #3287f2;}
		}
		.icon{
			position: absolute;
			top: 0.25rem;
			right: 0.55rem;
			display: block;
			width: 1.45rem;
			height: 1.45rem;
			background: url(../../resources/images/commission/icon.png) no-repeat center;
			background-size: cover;
			animation: change 1s linear;
		}
	}
	.pop_box{
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		background: rgba(0,0,0,0.3);
		.pop{
			width: 6.75rem;
			margin: 2.1rem auto 0;
			border-radius: 0.08rem;
			-webkit-box-shadow:0px 0px 10px #C5C4C9;
			box-shadow:0px 0px 10px #C5C4C9;
			background: #f0eff5;
			h3{
				border-top-left-radius: 0.08rem;
				border-top-right-radius: 0.08rem;
				height: 0.95rem;
				line-height: 0.95rem;
				font-weight: bold;
				background: #eeeeee;
				font-size: @font34;
				text-align: center;
				-webkit-box-shadow:0px 0px 8px #d9d9d9;
				box-shadow:0px 0px 8px #d9d9d9;
			}
			ul{
				background: #fff;
				padding: 0.3rem 0 0.1rem 0.3rem;
				margin-bottom: 0.16rem;
			}
			ul li{
				display: flex;
				display: -webkit-flex;
				align-items: flex-start;
				-webkit-align-items: flex-start;
				font-size: @font28;
				margin-bottom: 0.2rem;
				p:first-child{color: #323232;font-weight: bold;}
				p:last-child{color: #464646;width: 4.7rem;}
			}
			ul:last-child{
				border-bottom-left-radius: 0.08rem;
				border-bottom-right-radius: 0.08rem;
			}
		}
		
	}
	@keyframes change{
		from {
			width: 3.45rem;
			height: 3.45rem;
			top: 50%;
			right: 50%;
			margin-right: -0.725rem;
		}
		to {
			width: 1.45rem;
			height: 1.45rem;
			top: 0.25rem;
			right: 0.55rem;
		}
	}
</style>

<template>
	<div class="box">
		<div class="site_card">
			<p>DRC北京工艺设计创意产业基地</p>
			<p>
				<span>南塔2-</span>
				<span>2908/2908/2908/2908/2908/2908/2908/2908/2908/2908</span>
			</p>
		</div>
		<!--佣金信息-->
		<div class="new_box">
			<h3>佣金信息</h3>
			<ul>
				<li>
					<p>佣金金额：</p>
					<p>￥{{13453 | splitK}}</p>
				</li>
				<li>
					<p>渠道姓名：</p>
					<p>李明</p>
				</li>
				<li>
					<p>联系方式：</p>
					<p>15101258698</p>
				</li>
				<li>
					<p>发票类型：</p>
					<p>幼狮科技增值税专用发票</p>
					<i @click="invoice">发票抬头</i>
				</li>
			</ul>
			<span class="icon"></span>
		</div>
		<!--收款方信息-->
		<div class="new_box">
			<h3>收款方信息</h3>
			<ul>
				<li>
					<p>户名：</p>
					<p>李明</p>
				</li>
				<li>
					<p>开户行：</p>
					<p>中国人民银行建国路支行</p>
				</li>
				<li>
					<p>银行账号：</p>
					<p>{{1520920394003949 | delkg}}</p>
				</li>
			</ul>
		</div>
		<!--发票抬头弹框-->
		<div class="pop_box" v-if="popshow" @click="popbox">
			<div class="pop">
				<h3>发票抬头</h3>
				<ul>
					<li>
						<p>名称：</p>
						<p>北京幼狮科技有限公司</p>
					</li>
					<li>
						<p>税号：</p>
						<p>9111010530640709</p>
					</li>
				</ul>
				<!--------------->
				<ul>
					<li>
						<p>电话：</p>
						<p>010-5643922</p>
					</li>
					<li>
						<p>地址：</p>
						<p>北京市朝阳区东三环中路39号建外SOHO24号楼22层2602</p>
					</li>
					<li>
						<p>开户银行：</p>
						<p>招商银行北京分行建国门支行</p>
					</li>
					<li>
						<p>银行账号：</p>
						<p>2938 8475 8765 8509</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				popshow:false,
			}
		},
		created(){
			
		},
		methods:{
			invoice(){//发票抬头
				this.popshow = true;
			},
			popbox(){
				this.popshow = false;
			}
		},
		mounted(){
			
		},

	}
</script>
