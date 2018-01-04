<style scoped lang='less'>
	@import "../../resources/css/reset.css";
  	@import "../../resources/css/base.less";
  	.box{
  		position: absolute;
  		left: 0;
  		top: 0;
  		right: 0;
  		bottom: 0;
  		overflow: hidden;
  	}
  	.content{
  		position: absolute;
  		left: 0;
  		top: 0;
  		right: 0;
  		bottom: 0;
  		overflow: auto;
  		padding-bottom: 1rem;
  		.header{
  			display: flex;
  			display: -webkit-flex;
  			flex-direction: column;
  			justify-content: center;
  			-webkit-justify-content: center;
  			min-height: 1.5rem;
  			height: auto;
  			background: #fff;
  			padding: 0 0 0 0.48rem;
  			p{padding: 0.25rem 0.33rem 0 0;}
  			p:first-child{
  				font-size: @font30;
  				color: #313131;
  				margin-bottom: 0.15rem;
  			}
  			p:last-child{
  				font-size: @font24;
  				color: #979797;
  				padding-bottom:0.3rem;
  				border-bottom: 1px solid #e4e4e4;
  				i{float: right;color: #3785f2;}
  			}
  			ul{
  				border-bottom: 1px solid #e4e4e4;
  				padding: 0.3rem 0;
  				display: flex;
  				li{position: relative;}
  				li:first-child{
  					width: 0.75rem;
  					height: 0.75rem;
  					margin-right: 0.25rem;
  					img{width: 100%;height: auto;}
  				}
				.name{font-size: @font30;color: #323232;}
				.state{font-size: @font26;color: #c9c9c9;}
				.state_pic{
					position: absolute;
					left: 3.5rem;
					top: 0.25rem;
					display: inline-block;
					width: 1.45rem;
					height: 1.45rem;
					background: url(../../resources/images/commission/icon1.png) no-repeat center;
					background-size: cover;
					animation: change 1s linear;
				}
  			}
  		}
  		.list{
  			padding-left: 0.48rem;
  			background: #fff;
  			li{
  				font-size: @font30;
  				color: #323232;
  				padding: 0.2rem 0.33rem 0.2rem 0;
  				border-bottom: 1px solid #e4e4e4;
  				p{
  					margin-bottom: 0.2rem;
  					span:first-child{
  						display: inline-block;
  						width: 1.2rem;
  						text-align: right;
  						color: #969696;
  						margin-right: 0.2rem;
  					}
  				}
  			}
  		}
  		.img_box{
  			display: flex;
  			position: relative;
  			height: auto;
  			font-size: 0.3rem;
  			color: #313131;
  			background: #fff;
  			padding: 0.25rem 0 0.25rem 0.48rem;
  			-webkit-box-shadow:0px 2px 4px #dfdee4; 
  			box-shadow:0px 2px 4px #dfdee4;
  			.pic{width: 1.2rem;color: #969696;text-align: right;}
  			.pic_img{
  				span{
  					display: inline-block;
  					width: 0.9rem;
  					height: 0.9rem;
  					margin: 0 0 0.15rem 0.2rem;
  					img{width: 100%; height: auto;}
  				}
  				
  			}
  		}
  		.plan{
  			background: #fff;
  			margin-top: 0.2rem;
  			padding: 0.2rem 0 0.2rem 0.28rem;
  			font-size: @font28;
  			color:#636363;
  			-webkit-box-shadow:0px 2px 4px #dfdee4; 
  			box-shadow:0px 2px 4px #dfdee4;
  			ul li{position: relative;margin: 0.2rem 0;}
  			ul li:last-child .line{display: none!important;}
  			.plan_t{
  				display: flex;
  				display: -webkit-flex;
  				align-items: center;
  				-webkit-align-items: center;
  				span{display: inline-block;}
  				span:first-child{
  					position: relative;
  					z-index: 9;
  					width: 0.7rem;
  					height: 0.7rem;
  					img{width: 100%;}
  					i{
  						position: absolute;
  						bottom: -0.6rem;
  						left: 50%;
  						margin-left: -0.01rem;
  						display: inline-block;
  						width: 0.02rem;
  						height: 0.6rem;
  						border-left: 1px dashed #3d3331;
  					}
  				}
  				span:nth-child(2){margin: 0 0.25rem 0 0.3rem;}
  				span:last-child{color: #0dae60;}
  			}
  			.plan_b{
  				margin-left: 1rem;
  				color: #313131;
  			}
  			.date{
  				position: absolute;
  				right: 0.33rem;
  				top: 50%;
  				height: 0.3rem;
  				margin-top: -0.15rem;
  				color: #969696;
  			}
  		}
  		/*抄送人*/
  		.copyto{
  			/*height: 2.6rem;*/
  			margin-top: 0.2rem;
  			background: #fff;
  			-webkit-box-shadow:0px 2px 4px #dfdee4; 
  			box-shadow:0px 2px 4px #dfdee4;
  			font-size: @font30;
  			color: #646464;
  			padding: 0.3rem 0.3rem 0.3rem 0.4rem;
  			.tip span:first-child{color: #323232;margin-right: 0.40rem;}
  			.copy_add{
  				width: 0.7rem;
  				height: 0.7rem;
  				border-radius: 50%;
  				font-size: @font54;
  				text-align: center;
  				background: #f0eff5 url(../../resources/images/plus1.png) no-repeat center;
  				background-size: 50% auto;
  			}
  			.copy_list{
  				display: flex;
  				display: -webkit-box;
  				overflow: auto;
  				li{
  					position: relative;
  					height: 1.5rem;
  					margin-right: 0.45rem;
  					p{margin-top: 0.15rem;text-align: center;}
  					span{
  						position: absolute;
  						top: 0.15rem;
  						right: -0.15rem;
  						display: inline-block;
  						width: 0.3rem;
  						height: 0.3rem;
  						border-radius: 50%;
  						background: #010101 url(../../resources/images/close1.png) no-repeat center;
  						background-size: 50%;
  					}
  				}
  				.picimg{
  					width: 0.7rem;
  					height: 0.7rem;
  					img{width: 100%;}
  				}
  			}
  		}
  	}
  	/*合同摘要弹框*/
  	.pop_box{
  		position: fixed;
  		z-index: 9;
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
			overflow: hidden;
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
			.brief{
				li{
					font-size: @font26;
					color: #464646;
					padding: 0.3rem 0.25rem;
					background: #fff;
					margin-bottom: 0.15rem;
					p{margin-bottom: 0.2rem;}
					p span:first-child{
						font-weight: bold;
						color: #323232;
					}
					p span:last-child{float: right;}
				}
				li:last-child,p:last-child{margin-bottom: 0;}
			}
		}
  	}
  	@keyframes change{
		from {
			width: 3.45rem;
			height: 3.45rem;
			top: 50%;
			left: 50%;
			margin-left: -0.725rem;
		}
		to {
			width: 1.45rem;
			height: 1.45rem;
			top: 0.25rem;
			left: 3.5rem;
		}
	}
</style>

<template>
	<div class="box">
		<div class="content">
			<div class="header">
				<ul>
					<li>
						<img src="../../resources/images/commission/head_img.png" alt="" />
					</li>
					<li>
						<div class="name">李三</div>
						<div class="state">审批通过</div>
						<span class="state_pic"></span>
					</li>
				</ul>
				<p>
					<span>项目房间号：</span>
					<span>建外SOHO A-2907</span>
				</p>
				<p>
					<span>合同编号：</span>
					<span>URS-SG-KJ-16090055<i @click="pops(true)">合同摘要</i></span>
				</p>
			</div>
			<ul class="list">
				<li>
					<p>
						<span>渠道账号</span>
						<span>15101622569</span>
					</p>
					<p>
						<span>渠道门店</span>
						<span>远行地产（建外SHHO店）</span>
					</p>
					<p>
						<span>渠道人员</span>
						<span>张三</span>
					</p>
				</li>
				<li>
					<p>
						<span>申领金额</span>
						<span>￥10,000.00</span>
					</p>
					<p>
						<span>佣金信息</span>
						<span>正常</span>
					</p>
					<p>
						<span>计算公式</span>
						<span>月租金x12/0.4</span>
					</p>
				</li>
				<li>
					<p>
						<span>收款方</span>
						<span>远行地产（建外SHHO店）</span>
					</p>
					<p>
						<span>开户行</span>
						<span>招商银行建外大街支行</span>
					</p>
					<p>
						<span>银行账号</span>
						<span>6210 2212 2512 3300</span>
					</p>
				</li>
				<li>
					<p style="margin-bottom: 0;">
						<span>渠道备注</span>
						<span>请尽快审批</span>
					</p>
				</li>
				
			</ul>
			<!--上传图片-->
			<div class="img_box">
				<p class="pic">图片</p>
				<p style="margin-bottom: 0;" class="pic_img">
					<span v-for="i in 3"><img src="../../resources/images/banner/banner01.png" alt="" /></span>
				</p>
			</div>
			<!--申请进度-->
			<div class="plan">
				<ul>
					<li v-for="i in 5">
						<p class="plan_t">
							<span><img src="../../resources/images/commission/head_img.png" title="" alt=""/><i class="line"></i></span>
							<span>张三</span>
							<span>发起申请</span>							
						</p>
						<p class="plan_b">的说服力的思考</p>
						<p class="date">12/11 10:10</p>
					</li>
				</ul>
			</div>
			<!--抄送人-->
			<div class="copyto">
				<p class="tip">
					<span>抄送人</span>
					<span>审批通过后，通知抄送人</span>
				</p>
				<ul class="copy_list">
					<li v-for="(item,index) in copyData">
						<p class="picimg"><img src="../../resources/images/commission/head_img.png" title="" alt=""/></p>
						<p class="copy_name">{{item.name}}</p>
					</li>
				</ul>
			</div>
		</div>
		<!--合同摘要弹框-->
		<div class="pop_box" v-if='popshow'  @click="pops(false)">
			<div class="pop">
				<h3>合同摘要</h3>
				<ul class="brief">
					<li>
						<p>
							<span>总租期：</span>
							<span>2017/12/19-2019/12/18</span>
							<span></span>
						</p>
					</li>
					<li>
						<p>
							<span>租期1：</span>
							<span>2017/12/19-2018/12/18</span>
							<span>￥10,000.00</span>
						</p>
						<p>
							<span>租期2：</span>
							<span>2018/12/19-2019/12/18</span>
							<span>￥10,000.00</span>
						</p>
					</li>
					<li>
						<p>
							<span>付款方式：</span>
							<span>2017/12/19-2018/12/18（押二付六）</span>
							<span></span>
						</p>
						<p>
							<span>付款方式：</span>
							<span>2018/12/19-2019/12/18（押二付六）</span>
							<span></span>
						</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { Toast } from 'mint-ui';
	export default{
		data(){
			return{
				copyData:[
					{
						name: '李三',
						qx: '0',
						id: '1',
						value: '东北一区-销售主管'
					},
					{
						name: '张明',
						qx: '0',
						id: '2',
						value: '东北一区-助理销售主管'
					},
					{
						name: '李四',
						qx: '0',
						id: '3',
						value: '东北二区-销售主管'
					}
				],//抄送人
				popshow:false,//合同摘要弹框

			}
		},
		created(){

		},
		methods:{
			pops(state){//合同摘要
				this.popshow = state;
			},
		}
	}
</script>
