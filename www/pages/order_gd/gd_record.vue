<template>
	<div class="record_box">
		<p class="record_head_box">
			<span>工商注册</span>
			<span>GS201811051234</span>
		</p>
		<!-- 驳回理由 -->
		<p class="record_tip_box">
			<textarea class="text_ar" placeholder="请输入备注/驳回理由"></textarea>
		</p>
		<div class="record_btn" id="record_btn">确认添加</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		mounted(){
			// 解决键盘弹出底部上浮问题
			var winHeight = $(window).height();   //获取当前页面高度
			$(window).resize(function(){
			   var thisHeight=$(this).height();
			    if(winHeight - thisHeight >50){
			         //当软键盘弹出，在这里面操作
					$("#record_btn").removeClass('record_btn');
			    	$("#record_btn").addClass('record_btn1');
			    }else{
			        //当软键盘收起，在此处操作
					$("#record_btn").removeClass('record_btn1');
			   		$("#record_btn").addClass('record_btn');
			    }
			});
		}
	}
</script>

<style scoped lang='less'>
@import "../../resources/css/reset.css";
@import "../../resources/css/base.less";
.record_box{
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: #fff;
	overflow: hidden;
}
.record_head_box{
	height: 1.16rem;
	width: 6.9rem;
	line-height: 1.16rem;
	margin: 0 auto 0;
	span:first-child{
		font-size: 0.3rem;
		color: #333333;
		font-weight: bold;
		margin-right: 0.2rem;
	}
	span:last-child{
		font-size: 0.28rem;
		color: #666666;
	}
}
.record_tip_box{
	width: 6.9rem;
	height: 2.65rem;
	margin: 0 auto 0;
	border: 1px solid #c8c8c8;
	border-radius: 0.05rem;
	overflow: hidden;
	textarea{
		width: 100%;
		height: 100%;
		background: none;
		font-size: 0.28rem;
		color: #333;
		border: none;
	}
}
.text_ar::-webkit-input-placeholder{
	font-size: 0.28rem;
	color: #c8c8c8;
}
.record_btn{
	position: absolute;
	bottom: 0.95rem;
	left: 50%;
	margin-left: -3.45rem;
	width: 6.9rem;
	height: 0.9rem;
	line-height: 0.9rem;
	font-size: 0.3rem;
	color: #fff;
	text-align: center;
	background: #30b1ff;
	border-radius: 0.05rem;
}
.record_btn1{
	position: static;
	margin: 6.43rem auto 0;
	width: 6.9rem;
	height: 0.9rem;
	line-height: 0.9rem;
	font-size: 0.3rem;
	color: #fff;
	text-align: center;
	background: #30b1ff;
	border-radius: 0.05rem;
}
</style>
