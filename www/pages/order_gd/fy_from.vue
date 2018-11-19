<template>
	<div class="gs_register_box">
		<!-- 主体 -->
		<div class="gs_box_top">
			<!-- 客户信息 -->
			<ul class="news_box">
				<!-- <p class="title">客户信息</p> -->
				<li>
					<p class="tit"><i>*</i>费用承担公司</p>
					<p class="inp" @click="sel_fqsy">
						<span class="chel_tex">请选择费用承担公司</span>
					</p>
					<p class="jt"></p>
				</li>
				<li>
					<p class="tit"><i>*</i>收款人姓名</p>
					<p class="inp">
						<input type="text" placeholder="请输入收款人姓名">
					</p>
				</li>
				<li>
					<p class="tit"><i>*</i>开户行</p>
					<p class="inp">
						<input type="text" placeholder="请输入开户行名称">
					</p>
				</li>
				<li>
					<p class="tit"><i>*</i>收款账号</p>
					<p class="inp">
						<input type="text" placeholder="请输入收款账号">
					</p>
				</li>
				<li>
					<p class="tit"><i>*</i>申请金额</p>
					<p class="inp">
						<input type="text" placeholder="请输入申请金额">
					</p>
				</li>
				<li class="inp_are">
					<p class="tit inp_are_txt"><i style="visibility: hidden;">*</i>备注</p>
					<p class="inp inp_p" style="font-size: 0.3rem!important">
						<textarea class="text_ar" placeholder="请输入"></textarea>
					</p>
				</li>
			</ul>
			<!-- 图片 -->
			<ul class="news_box img_tp_box">
				<p class="img_t"><i style="visibility: hidden;">*</i>图片</p>
				<ul class="img_list_box">
					<li>
						<img src="" alt="">
						<span class="del_img_btn"></span>
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
			<div class="btn_fq">提交申请</div>
		</div>
		<!-- 选择框遮罩层 -->
		<div class="pop_picker_zzc" v-show="zzc_state">
			<div class="pop_picker">
				<div class="sel_picker">
					<p class="sel_qx" @click="sel_calc">取消</p>
					<p class="sel_qr" @click="sel_betrue">确认</p>
				</div>
				<mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
			</div>			
		</div>
	</div>
</template>

<script>
	import { Radio } from 'mint-ui';
	import { Picker } from 'mint-ui';
	export default {
		data(){
			return{
				value:'',
				slots: [
				{
				  flex: 1,
				  values: ['请选择发起事由', '工商注册', '工商备案', '工商迁址', '上传资料', '其他需求','咨询类服务','工商注册/备案/迁址'],
				  className: 'slot1',
				  textAlign: 'center',
				  defaultIndex:  1,
				}
			  ],
			  zzc_state: false,
			}
		},
		methods:{
			onValuesChange(picker, values) {
			  // picker.setSlotValue(1, values[0]);
			  console.log(values);
			},
			add_copy(){
				this.$router.push({
					path:'/gs_copy',//跳转到审批页面
					query:{}
				})
			},
			sel_fqsy(){//请选择发起事由
				this.zzc_state = true;
				$('.pop_picker').animate({
					bottom: 0
				},300)
			},
			sel_calc(){//取消选择
				this.zzc_state = false;
				$('.pop_picker').css("bottom","-5.2rem");
			},
			sel_betrue(){//确认选择
				this.zzc_state = false;
				$('.pop_picker').css("bottom","-5.2rem");
			}
			
		},
		mounted(){
			// 解决键盘弹出底部上浮问题
			var winHeight = $(window).height();   //获取当前页面高度
			$(window).resize(function(){
			   var thisHeight=$(this).height();
			    if(winHeight - thisHeight >50){
			         //当软键盘弹出，在这里面操作
					$(".gs_box_bottom").css({
						"display":"none"
					});
					$(".gs_box_top").css("bottom","0");
			    }else{
			        //当软键盘收起，在此处操作
					$(".gs_box_bottom").css({
						"display":"block",
						"height":"1.2rem"
					});
					$(".gs_box_top").css({
						"bottom":"1.2rem",
					});
			    }
			});
		}
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
	bottom: 1.2rem;
	overflow: auto;
	-webkit-overflow-scrolling: touch;
}
.gs_box_bottom{
	height: 1.2rem;
	top: initial;
	background: #ffffff;
	border-top: 1px solid #e5e5e5;
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
.tit{
	width: 2rem;
	font-size: 0.3rem;
	color: #333;
	/* font-weight: 500; */
	text-align: left;
	margin-right: 0.5rem;
}
.tit i{
	color: #ff6263;
}
.inp{
	width: 4.2rem;
	height: 1.1rem;
	line-height: 1.1rem;
	overflow: hidden!important;
}
.inp input{
	height: 100%;
	background: none;
	font-size: 0.3rem;
	color: #333;
	padding: 0;
}
.jt{
	width: 0.14rem;
	height: 0.24rem;
	background: url(../../resources/images/order_gd/jt_ion.png) no-repeat center;
	background-size: 100% auto;
	margin-left: 0.1rem;
}
input::-webkit-input-placeholder{
		color: #c8c8c8;
		font-size: 0.3rem;
}
.text_ar{
	height: 1.6rem;
	width: 100%;
	padding: 0.4rem 0 0 0;
	background: #fff;
	border: none;
}
.text_ar::-webkit-input-placeholder{
    color:#c8c8c8;
	font-size: 0.3rem;
}
.inp_are{
	height: auto!important;
	align-items: flex-start!important;
}
.inp_are_txt{
	padding-top: 0.4rem;
}
.inp_p{
	height: auto!important;
}
.inp .mint-radiolist{
	display: flex!important;
	align-items: center!important;
}
input{-webkit-appearance:none;}
.inp .chel_tex{
	display: inline-block;
	height: 100%;
	font-size: 0.3rem;
	color: #c8c8c8;
}
.btn_fq{
	position: absolute;
	top: 50%;
	left: 50%;
	width: 6.9rem;
	height: 0.9rem;
	line-height: 0.9rem;
	background: #2896ff;
	margin: -0.45rem 0 0 -3.45rem;
	border-radius: 0.05rem;
	font-size: 0.32rem;
	color: #fefefe;
	text-align: center;
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
.pop_picker{
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	height: 5.2rem;
	width: 100%;
	position: absolute;
	bottom: -5.2rem;
	background: #fff;
}
.pop_picker .picker{
	width: 100%!important;
}
.sel_picker{
	position: absolute;
	top: 0;
	display: flex;
	justify-content: space-between;
	padding: 0 0.45rem;
	width: 100%;
	height: 1rem;
	line-height: 1rem;
}
.sel_picker p{
	font-size: 0.3rem;
	color: #2b70d8;
}
.pop_picker_zzc{
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	background: rgba(0,0,0,0.5);
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
