<style scoped lang='less'>
	@import "../../resources/css/reset.css";
  	@import "../../resources/css/base.less";
  	.box{
  		
  	}
  	.idea_box{
  		width: 7.05rem;
  		height: 4.5rem;
  		margin: 0.2rem auto 0;
  		border-radius: 0.08rem;
  		background: #fff;
  		padding: 0.35rem 0.25rem;
  		-webkit-box-shadow:0px 0px 5px #c5c4c9; 
  		box-shadow:0px 0px 5px #c5c4c9;
  		textarea{
  			font-size: @font36;
  			border: none;
  			height: 100%;
  			padding: 0;
  			background: #fff;
  		}
  	}
  	.btn{
  		display: block;
  		border: none;
  		border-radius: 0.06rem;
  		width: 5.5rem;
  		height: 0.75rem;
  		background: url(../../resources/images/commission/btn_bg.png) no-repeat center;
  		background-size: cover;
  		margin: 5.6rem auto 0.95rem;
  		font-size: @font34;
  		color: #fff;
  		text-align: center;
  	}
</style>

<template>
	<div class="box">
		<!--填写区域-->
		<div class="idea_box">
			<textarea name="" placeholder="请输入您的审批意见（非必填）" v-model="idea"></textarea>
		</div>
		<button class="btn">确认同意</button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				idea:'',				
			}
		}
	}
</script>
