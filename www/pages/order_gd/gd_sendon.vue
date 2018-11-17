<template>
	<div class="gd_sendon_box">
		<ul class="sendon_box">
			<li>
				<p class="tit">转交人员</p>
				<p class="inp">
					<input type="text" placeholder="请输入转交人员姓名">
				</p>
			</li>
		</ul>
		<ul class="sendon_box">
			<li class="zjsm">
				<p class="tit">转交说明</p>
				<p class="inp inp1">
					<textarea placeholder="请输入转交说明"></textarea>
				</p>
			</li>
		</ul>
		<div class="record_btn" id="record_btn">确认转交</div>
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
.gd_sendon_box{
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	overflow: hidden;
}
.sendon_box{
	background: #fff;
	padding: 0 0.3rem;
	margin-bottom: 0.2rem;
}
.sendon_box li{
	display: flex;
	display: -webkit-flex;
	align-items: center;
	-webkit-align-items: center;
	min-height: 1.1rem;
	height: auto;
	.tit{
		width: 1.88rem;
		line-height: 1.1rem;
		font-size: 0.3rem;
		color: #333333;
	}
	.inp{
		height: 100%;
		flex: 1;
		-webkit-flex: 1;
		input{
			width: 100%;
			height: 100%;
			font-size: 0.3rem;
			color: #333;
		}
	}
	.inp1{
		height: 2.75rem;
		font-size: 0.3rem;
		color: #333;
		textarea{
			width: 100%;
			height: 100%;
			background: none;
			border: none;
			padding-top: 0.34rem;
			padding-left: 0;
		}
	}
}
.zjsm{
	align-items: flex-start!important;
	-webkit-align-items: flex-start!important;
}
.inp input::-webkit-input-placeholder,.inp1 textarea::-webkit-input-placeholder{
	font-size: 0.3rem;
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
