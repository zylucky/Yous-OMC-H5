<style scoped lang='less'>
	@import "../../resources/css/reset.css";
  	@import "../../resources/css/base.less";
  	.box{
  		position: absolute;
  		left: 0;
  		right: 0;
  		bottom: 0;
  		top: 0;
  		/*padding-bottom: 0.9rem;*/
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
		ul{padding: 0.4rem 0.2rem 0rem 0.3rem;}
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
			background: url(../../resources/images/commission/unicon.png) no-repeat center;
			background-size: cover;
			animation: change 1s linear;
		}
		.invoice_list{
			background-color: #fdfcfa;
			border-top: 1px dashed #fcc487;
			border-bottom-left-radius: 0.08rem;
			border-bottom-right-radius: 0.08rem;
			padding: 0;
			margin-top: 0;
			li{
				display: flex;
				display: -webkit-flex;
				padding: 0.2rem 0.3rem;
				font-size: @font24;
				border-bottom:1px solid #fcc487;
				i{display: inline-block;width: 1.7rem;height: 0.25rem;color: #fea74a;}
				span{display:inline-block;width:4.74rem;color: #3084f6;}
			}
			li:last-child{border-bottom: none;}
		}
	}
	.btn{
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 1rem;
		border: none;
		line-height: 1rem;
		font-size: @font30;
		color: #3084f6;
		text-align: center;
		background: #ffffff;
		-webkit-box-shadow:0px -2px 8px #DBDAE0; 
		box-shadow:0px -2px 8px #DBDAE0;
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
				</li>
			</ul>
			<span class="icon"></span>
			<!--发票信息-->
			<ol class="invoice_list">
				<li>
					<i>名<s style="visibility: hidden;">我我我我</s>称:</i>
					<span>北京幼师科技有限公司</span>
				</li>
				<li>
					<i>纳税人识别号:</i>
					<span>9111 0105 3064 0709 X3</span>
				</li>
				<li>
					<i>地&nbsp;&nbsp;址、电&nbsp;&nbsp;话:</i>
					<span>北京市朝阳区东三环中路39号院24号楼22层2902 010-5643922</span>
				</li>
				<li>
					<i>开户行及账号:</i>
					<span>招商银行北京分行建国门支行11092166740910</span>
				</li>
			</ol>
		</div>
		<button class="btn">重新提交</button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		created(){
			
		},
		methods:{

		},
		mounted(){
			
		},

	}
</script>
