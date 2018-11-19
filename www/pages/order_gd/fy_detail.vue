<template>
	<div class="gs_register_box">
		<!-- 主体 -->
		<div class="gs_box_top">
			<!-- 头部 -->
			<ul class="news_box gd_take_order">
				<li>
					<div class="gd_ion"><img src="../../resources/images/order_gd/fysq_ion.png" alt=""></div>
					<div class="gd_tit">工商注册-费用审批</div>
					<div class="gd_state" v-if="false">紧急</div>
				</li>
			</ul>
			<!-- 工单信息展示 -->
			<ul class="news_box">
				<ul class="gd_news">
					<p class="gd_lp">建外SOHO 2-2908</p>
					<li>
						<span class="gd_news_tit">工单编号：</span>
						<span class="gd_news_con">SG201811121111</span>
					</li>
				</ul>
			</ul>
			<!-- 信息展示 -->
			<ul class="news_box">
				<ul class="gd_new">
					<li>
						<span class="gd_new_tit">费用承担公司</span>
						<span class="gd_new_con">幼狮</span>
					</li>
					<li>
						<span class="gd_new_tit">收款人户名</span>
						<span class="gd_new_con">租户</span>
					</li>
					<li>
						<span class="gd_new_tit">开户行</span>
						<span class="gd_new_con">张三</span>
					</li>
					<li>
						<span class="gd_new_tit">收款账号</span>
						<span class="gd_new_con">15936866025</span>
					</li>
					<li class="gd_tip">
						<span class="gd_new_tit">备注</span>
						<span class="gd_new_con">租户希望我们可以待办租户希望我们尽快处理</span>
					</li>
				</ul>
			</ul>
			<!-- 图片展示 -->
			<ul class="news_box img_tp_box">
				<p class="img_t"><i style="visibility: hidden;">*</i>图片</p>
				<ul class="img_list_box">
					<li>
						<img src="../../resources/images/banner/banner03.png" alt="">
					</li>
				</ul>
			</ul>
			<ul class="news_box">
				<!-- 审批流程显示 -->
				<ul class="spl_box">
					<li v-for="(i,index) in 3">
						<div class="spl_bigbox">
							<div class="spl_headimg">
								<img src="../../resources/images/commission/head_img.png" alt="">
								<div class="spl_headimg_after"></div>
							</div>
							<div class="spl_con">
								<p class="spl_name">
									<span>400-张三</span>
									<span>11/04 10:50</span>
								</p>
								<p class="spl_state">发起申请</p>
							</div>
							<div class="see_pj" v-show="i!=2" @click="ckpj(i,index)">
								<span>查看评价</span>
								<span>></span>
							</div>							
						</div>
						<!-- 评价信息 -->
						<div class="plxx_box" v-show="i!=2">
							<div class="pjxx" v-for="i in 3">
								<p class="pj_name_t">
									<span>工商管家-李四</span>
									<span>11/04 10:50</span>
								</p>
								<p class="pj_txt">业务处理比较麻烦，可能没有那么快，业务处理比较麻烦，可能没有那么快</p>
							</div>
							<div class="plxx_box_after"></div>
						</div>
					</li>
				</ul>
			</ul>
			<!-- 抄送人 -->
			<ul class="news_box img_tp_box">
				<p class="img_t"><i style="visibility: hidden;">*</i>抄送人</p>
				<ul class="img_list_box copy_person">
					<li>
						<p class="head_img">
							<img src="../../resources/images/commission/head_img.png" alt="">	
							<span class="del_img_btn"></span>
						</p>
						<p class="copy_name">张三</p>
					</li>
					<li>
						<p class="head_img">
							<img src="../../resources/images/commission/head_img.png" alt="">	
							<span class="del_img_btn"></span>
						</p>
						<p class="copy_name">张三</p>
					</li>
					<li @click="add_copy">
						<p class="head_img add_copy_person"></p>
						<p class="copy_name"></p>
					</li>
				</ul>
			</ul>
			<div class="see_lct">查看工单流程图</div>
		</div>

		<!-- 底部悬浮按钮 -->
		<div class="gs_box_bottom">
			<ul class="bottom_nav">
				<li @click="pass_btn">通过</li>
				<li @click="unpass_btn">驳回</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { MessageBox } from 'mint-ui';
	export default {
		data(){
			return{
				value:'',
				pj_state: false,//列表折叠
				pj_sta: 'yuan',//列表折叠状态
				zz_state: false,//遮罩层显示/隐藏控制
			}
		},
		methods:{
			add_copy(){
				this.$router.push({
					path:'/gs_copy',//跳转到审批页面123
					query:{}
				})
			},
			ckpj(i,index){
				this.ckpj_sreset();
				if(this.pj_sta == 'yuan'){
					this.pj_sta = index;
					this.pj_state = true;
				}else{
					if(this.pj_sta == index){
						this.pj_sta = index;
						this.pj_state = !this.pj_state;
					}else{
						this.pj_state = true;
						this.pj_sta = index;
					}
				}
		
				if(this.pj_state){
					$('.plxx_box').eq(index).css({
						display: "flex",
						display: "-webkit-flex"
					});					
				}
				if(!this.pj_state){
					$('.plxx_box').eq(index).css({
						display: "none"
					});	
				}
			},
			ckpj_sreset(){//样式重置
				for(var i=0; i<$('.plxx_box').length; i++){
					$('.plxx_box').eq(i).css({
						display: "none"
					});	
				}
			},
			pass_btn(){//审批通过
				MessageBox.confirm('', { 
					message: '是否确定通过?', 
					title: '提示', 
					confirmButtonText: '确认', 
					cancelButtonText: '取消' 
				}).then(action => { 
					if (action == 'confirm') {//确认的回调
						console.log('确认'); 
					}
				}).catch(err => { 
					if (err == 'cancel') {//取消的回调
						console.log('取消');
					} 
				})
			},
			unpass_btn(){//审批驳回
				MessageBox.confirm('', { 
					message: '是否确定驳回?', 
					title: '提示', 
					confirmButtonText: '确认', 
					cancelButtonText: '取消' 
				}).then(action => { 
					if (action == 'confirm') {//确认的回调
						console.log('确认'); 
					}
				}).catch(err => { 
					if (err == 'cancel') {//取消的回调
						console.log('取消');
					} 
				})
			},
		},
		mounted(){
			
		},
		
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
	overflow: hidden;
}
.gs_box_top{
	bottom: 1rem;
	overflow: auto;
	-webkit-overflow-scrolling: touch;
}
.gs_box_bottom{
	height: 1rem;
	top: initial;
	background: #ffffff;
}
.news_box{
	background: #fff;
	padding: 0 0 0 0.3rem;
	margin-bottom: 0.23rem;
}
.title{
	height: 0.76rem;
	line-height: 0.76rem;
	font-size: 0.32rem;
	color: #333;
	font-weight: bold;
}
.news_box li{
	display: flex;
	align-items: center;
	height: 1.1rem;
	border-bottom: 1px solid #e5e5e5;
}
.img_tp_box li{
	border-bottom: none;
}
.news_box li:last-child{
	border-bottom: none;
}
/* 图片 */
.img_t{
	font-size: 0.3rem;
	color: #333333;
	height: 1rem;
	line-height: 1rem;
}
.img_list_box{
	display: flex;
	display: -webkit-flex;
	flex-wrap: wrap;
	-webkit-flex-wrap: wrap;
	padding-bottom: 0.65rem;
	padding-left: 0.1rem;
	padding-right: 0.3rem;
}
.img_list_box li{
	position: relative;
	width: 1.25rem;
	height: 1.25rem;
	margin: 0 0.45rem 0.3rem 0rem;
}
.img_list_box li img{
	width: 100%;
	height: 100%;
}
.add_img{
	background: #f0eff5 url(../../resources/images/order_gd/add_img_ion.png) no-repeat center;
	background-size: 50% auto;
}
.del_img_btn{
	display: inline-block;
	position: absolute;
	top: -0.14rem;
	right: -0.14rem;
	width: 0.36rem;
	height: 0.36rem;
	background: url(../../resources/images/order_gd/close.png) no-repeat center;
	background-size: 100% auto;
}
/* 查看流程图 */
.see_lct{
	width: 3rem;
	height: 0.66rem;
	line-height: 0.66rem;
	font-size: 0.26rem;
	color: #2b70d8;
	text-align: center;
	margin: 0.46rem auto 0.6rem;
	background: #fff;
	border-radius: 0.3rem;
}
/* 抄送人 */
.copy_person{
	
}
.copy_person li{
	width: auto;
	height: auto;
	display: flex;
	display: -webkit-flex;
	flex-direction: column;
	-webkit-flex-direction: column;
}
.head_img{
	position: relative;
	width: 1rem;
	height: 1rem;
	border-radius: 50%;
}
.head_img .del_img_btn{
	right: -0.1rem;
	top: -0.1rem;
}
.copy_name{
	font-size: 0.28rem;
	color: #666666;
	text-align: center;
	margin-top: 0.2rem;
}
.head_img img{
	width: 100%;
	height: auto;
	border-radius: 50%;
}
.add_copy_person{
	background: #f0eff5 url(../../resources/images/order_gd/add_img_ion.png) no-repeat center;
	background-size: 50% auto;
}
.bottom_nav{
	display: flex;
	height: 100%;
	border-top: 1px solid #e5e5e5;
	li{
		position: relative;
		width: 50%;
		line-height: 1rem;
		font-size: 0.3rem;
		color: #2b70d8;
		text-align: center;
	}
}
.bottom_nav li::after{
	content: "";
	position: absolute;
	top: 50%;
	right: 0;
	margin-top: -0.21rem;
	display: block;
	width: 1px;
	height: 0.42rem;
	background: #e5e5e5;
}
.bottom_nav li:last-child::after{
	display: none;
}
/* 头部 */
.gd_take_order li{
	position: relative;
	display: flex;
	display: -webkit-flex;
	align-items: center;
	-webkit-align-items: center;
	.gd_ion{
		width: 0.62rem;
		height: 0.62rem;
		margin-right: 0.2rem;
		img{width: 100%;height: auto;}
	}
	.gd_tit{
		font-size: 0.32rem;
		color: #333333;
		font-weight: bold;
	}
	.gd_state{
		width: 0.87rem;
		height: 0.4rem;
		line-height: 0.4rem;
		background: #ff6263;
		font-size: 0.28rem;
		color: #fff;
		text-align: center;
		position: absolute;
		right: 0.3rem;
		border-radius: 0.05rem;
	}
}
.gd_news{
	padding: 0.37rem 0;
	li{
		font-size: 0.26rem;
		color: #969696;
		height: auto;
		border: none;
		line-height: 0.5rem;
	}
	.gd_lp{
		font-size: 0.3rem;
		color: #323232;
		margin-bottom: 0.15rem;
	}
	.gd_news_tit{
		
	}
}
.gd_new{
	padding: 0.38rem 0 0.3rem 0;
	li{
		height: auto;
		border: none;
		font-size: 0.3rem;
		line-height: 0.55rem;
		span{display: inline-block;}
	}
	.gd_new_tit{
		width: 1.85rem;
		color: #999999;
		text-align: right;
		margin-right: 0.55rem;
	}
	.gd_new_con{
		width: 4.6rem;
		color: #333333;
		text-align: left;
	}
}
.gd_tip{
	display: flex;
	display: -webkit-flex;
	align-items: flex-start!important;
	-webkit-align-items: flex-start!important;
	.gd_new_con{
		line-height: initial!important;
	}
}
/* 审批流 */
.spl_box{
	padding: 0.25rem 0 0.8rem 0;
	li{
		height: auto!important;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		border: none;
		margin-bottom: 0.15rem;
	}
	li:last-child .spl_headimg_after{display: none;}
	li:last-child .plxx_box_after{display: none;}
	.spl_bigbox{
		display: flex;
		display: -webkit-flex;
		position: relative;
		width: 100%;
		min-height: 1.05rem;
		height: auto;
		align-items: flex-start;
		-webkit-align-items: flex-start;
		border: none;
		.spl_headimg{
			position: relative;
			z-index: 9;
			width: 0.7rem;
			height: 0.7rem;
			border-radius: 50%;
			margin-right: 0.3rem;
			img{width: 100%;height: 100%;border-radius: 50%;}
		}
		.spl_headimg_after{
			position: absolute;
			top: 0.7rem;
			left: 0.33rem;
			width: 1px;
			height: 0.6rem;
			border-left: 1px dashed #3e3431;
		}
		.spl_con{
			flex: 1;
			-webkit-flex: 1;
			padding-right: 0.3rem;
			line-height: 0.36rem;
			font-size: 0.28rem;
		}
		.spl_name{
			display: flex;
			display: -webkit-flex;
			justify-content: space-between;
			span:first-child{
				color: #333333;
			}
			span:last-child{
				color: #999999;
			}
		}
		.spl_state{
			color: #0fac5f;
		}
		.see_pj{
			position: absolute;
			right: 0.3rem;
			top: 0.5rem;
			width: 1.58rem;
			height: 0.54rem;
			line-height: 0.54rem;
			font-size: 0.28rem;
			color: #ff6263;
			text-align: center;
			border-radius: 0.05rem;
			border: 1px solid #ff6263;
			span{display: inline-block;height: 100%;}
			span:last-child{transform: rotate(90deg)!important;}
		}
	}
}
.plxx_box{
	position: relative;
	display: flex;
	display: -webkit-flex;
	flex-direction: column;
	-webkit-flex-direction: column;
	align-items: flex-end;
	-webkit-align-items: flex-end;
	padding: 0.38rem 0.3rem 0 0;
	width: 100%;
	display: none;
}
.plxx_box_after{
	position: absolute;
	top: 0.25rem;
	left: 0.33rem;
	content: "";
	display: block;
	height: 100%;
	width: 1px;
	border-left: 1px dashed #3e3431;
}
.pjxx{
	width: 5.92rem;
	padding: 0.17rem;
	background: #f5f5f5;
	border-radius: 0.05rem;
	margin-bottom: 0.15rem;
	.pj_name_t{
		margin-bottom: 0.1rem;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
		-webkit-justify-content: space-between;
		span:first-child{
			font-size: 0.26rem;
			color: #666666;
		}
		span:last-child{
			font-size: 0.24rem;
			color: #999999;
		}
	}
	.pj_txt{
		font-size: 0.24rem;
		color: #999999;
		line-height: 0.36rem;
	}
}
.zzc_box{
	position: fixed;
	z-index: 99;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: rgba(0,0,0,0.5);
}
.more_nav{
	display: flex;
	display: -webkit-flex;
	position: absolute;
	left: 50%;
	bottom: 1.3rem;
	margin-left: -3.45rem;
	width: 6.9rem;
	height: 2.6rem;
	background: #fff;
	border-radius: 0.05rem;
	padding: 0.46rem 0 0 0.4rem;
	li{
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		-webkit-flex-direction: column;
		align-items: center;
		-webkit-align-items: center;
		margin-right: 0.7rem;
		p:first-child{
			width: 0.97rem;
			height: 0.97rem;
			border-radius: 50%;
			overflow: hidden;
			img{width: 100%;height: 100%;}
		}
		p:last-child{
			text-align: center;
			font-size: 0.28rem;
			color: #666666;
			margin-top: 0.16rem;
		}
	}
}
</style>
<style>
	.inp .mint-cell-wrapper{
		background: #fff!important;
		background-image: none!important;
		padding: 0!important;
	}
	.inp .mint-radiolist-label{
		padding: 0 1rem 0 0!important;
	}
	.inp .mint-radiolist-title{
		margin: 0!important;
	}
</style>
