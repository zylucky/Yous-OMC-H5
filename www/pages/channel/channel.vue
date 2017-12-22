<style scoped lang='less'>
	@import "../../resources/css/reset.css";
  	@import "../../resources/css/base.less";
  	.box{
  		padding-bottom: 0.6rem;
  	}
  	.site_card {
		width: 7.06rem;
		height: 2.05rem;
		margin: 0.25rem auto 0;
		border-radius: 0.07rem;
		background: url(../../resources/images/commission/card_bg.png) no-repeat center;
		background-size: cover;
		-webkit-box-shadow: 0px 0px 7px #2991f4;
		box-shadow: 0px 0px 7px #2991f4;
		color: @cl_white;
		padding: 0.45rem 0 0 .3rem;
		p{
			margin-bottom: 0.25rem;
			width: 6.3rem;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		p:first-child{font-size: @font36;}
		p:last-child{font-size: @font30;}
	}
	.new_box {
		width: 7.06rem;
		/*height:4.53rem;*/
		margin: 0.25rem auto 0;
		border-radius: 0.08rem;
		-webkit-box-shadow: 0px 0px 8px #C5C4C9;
		box-shadow: 0px 0px 8px #C5C4C9;
		font-size: @font30;
		background-color: #fff;
		overflow:hidden;
		h3 {
			border-top-left-radius: 0.08rem;
			border-top-right-radius: 0.08rem;
			height: 0.95rem;
			line-height: 0.95rem;
			font-weight: bold;
			padding-left: 0.3rem;
			background: #eeeeee;
			-webkit-box-shadow: 0px 0px 8px #D9D9D9;
			box-shadow: 0px 0px 8px #D9D9D9;
		}
		ul{padding:0.3rem 0.3rem 0.4rem 0.3rem;}
		ul li{
			color: #323232;
			margin-bottom: 0.20rem;
			span:first-child{color: #969696;}
		}
		.choose{
			position: relative;
			min-height: 2.45rem;
			height: auto;
			.sel{
				position: absolute;
				height: 0.32rem;
				width: 2.5rem;
				top: 50%;
				left: 50%;
				margin-top: -0.16rem;
				margin-left: -1.25rem;
				font-size: @font32;
				color: #ffab03;
				display:flex;
				align-items: center;
				span:first-child{
					display: inline-block;
					width: 0.32rem;
					height: 0.32rem;
					border-radius: 50%;
					background: #ffab03 url(../../resources/images/close1.png) no-repeat center;
					background-size: 50%;
					margin-right: 0.15rem;
					transform: rotate(45deg);
				}
			}
		}
		.bz{
			display: flex;
			height: 1.9rem;
			font-size: @font30;
			color:#323232;
			padding: 0.25rem 0.3rem;
			span{width: 0.8rem;}
			textarea{
				background: #fff;
				border: none;
				padding-top: 0.06rem;
				font-size: @font34;
			}
		}
		
	}
	.btn {
		display: block;
		width: 5.5rem;
		height: 0.75rem;
		line-height: 0.75rem;
		text-align: center;
		margin: 0.8rem auto 0;
		border: none;
		background: #aaaaaa;
		border-radius: 0.08rem;
		color: #c8c8c8;
		font-size: @font32;
	}
	/*按钮背景*/
	.btnactive {
		background: url(../../resources/images/commission/btn_bg.png) no-repeat center;
		background-size: cover;
		color: #fff;
	}
</style>
<style>
.mint-cell:last-child,.mint-cell-wrapper{
	background: none;
}
.mint-checkbox-core{
	border-radius: initial;
}
/*文字yanse*/
.mint-checkbox-label{
	font-size: 0.3rem;
}
.mint-checkbox-core{
	width: 0.3rem;
	height: 0.3rem;
}
.mint-checkbox-core::after{
	left: 0.06rem;
}
</style>

<template>
	<div class="box">
		<div class="site_card">
			<p>建外SOHO</p>
			<p>A-2905</p>
		</div>
		<div class="new_box">
			<h3>佣金信息</h3>
			<ul>
				<li>
					<span>佣金金额：</span>
					<span>￥2，800.00</span>
				</li>
				<li>
					<span>销售姓名：</span>
					<span>李明</span>
				</li>
				<li>
					<span>联系方式：</span>
					<span>15101258698</span>
				</li>
				<li>
					<span>发票类型：</span>
					<span>北京增值税专用发票</span>
				</li>
			</ul>
		</div>
		<div class="new_box">
			<h3>收款方信息</h3>
			<div class="choose">
				<p class="sel">
					<span></span>
					<span>选择收款账号</span>
				</p>
			</div>
		</div>
		<div class="new_box">
			<div class="bz">
				<span>备注:</span>
				<textarea placeholder="请输入备注信息" v-model="bz"></textarea>
			</div>
		</div>
		<!--确认框-->
		<div class="truebox">
			<mt-checklist
			  v-model="value"
			  :options="options">
			</mt-checklist>
		</div>
		<button class="btn btnactive">提交</button>
	</div>
</template>

<script>
import { Checklist } from 'mint-ui';
export default{
	data(){
		return{
			bz:'',//备注信息
			value:[],
			options:[
				{
			    	label: '确认已开具发票，发票信息准确无误',
			    	value: 'valueA'
				},
			]
		}
	},
	methods:{

	}
}
</script>