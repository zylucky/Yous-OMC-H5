<template>
	<div class="record_box">
		<p class="record_head_box">
			<span>{{workType}}</span>
			<span>{{codenum}}</span>
		</p>
		<div class="totality_box">
			<p class="totality_text">评价</p>
			<p class="totality_ion">
				<span class="pj_ion"></span>
				<span class="pj_ion"></span>
				<span class="pj_ion"></span>
				<span class="pj_ion"></span>
				<span class="pj_ion"></span>
			</p>
			<p class="totality_tip"></p>
		</div>
		<p class="record_tip_box">
			<textarea class="text_ar" placeholder="请填写评论" v-model="comment"></textarea>
		</p>
		<div class="record_btn" id="record_btn" @click="btn_comment">提交</div>
	</div>
</template>

<script>
import axios from 'axios';
import { MessageBox } from 'mint-ui';
	export default {
		data(){
			return{
				workType: '',//工单类型
				codenum: '',//工单编号
				taskid: '',//任务id
				comment: '',//评论
				gd_id: '',//工单id
				csr_id: '',//抄送人id
				middleId: '',//中间表id
				isclick:true,//防止重复点击
				ztpj: '',
				ztpj_text: '',
			}
		},
		created(){
			this.workType = this.$route.query.workType;
			this.codenum = this.$route.query.codenum;
			this.taskid = this.$route.query.taskid;
			this.gd_id = this.$route.query.gdid;
			this.csr_id = this.$route.query.csr_id;
			this.middleId = this.$route.query.middleId;
		},
		methods:{
			btn_comment(){//确认评论
				var _this = this;
				if(_this.ztpj_text == ''){
					MessageBox('提示', '请对该工单进行评价');
					return;
				}
				if(_this.comment == ''){
					MessageBox('提示', '评论信息不能为空');
					return;
				}
				if(_this.isclick){
			        _this.isclick= false;
					const url = this.$api + "/yhcms/web/activitibusinessreg/getServiveHandle.do";
					axios.post(url,{
						"taskid": _this.taskid,
						"cookie": JSON.parse(localStorage.getItem('cookxs')).sjs,//用户cookie
						"middleId": _this.middleId,
						"workListId": _this.gd_id,
						"copyname": _this.csr_id.join(","),
						"evaluate": _this.ztpj_text,
						"evaluate": _this.comment
					}).then((res)=>{
						console.log(res);
						if(res.data.success){
							setTimeout(function(){
					            _this.isclick = true;
					        });
							_this.$router.push({
								path:'/gtasks_wc',//跳转到我发起的
								query:{}
							})
						}
					}, (err)=>{
						console.log(err);
					});					
				}
			},

		},
		mounted(){
			//总体满意度评价
			var _this = this;
			for (var i=0; i<$('.totality_ion span').length; i++) {
				(function(index){
					$('.totality_ion span').eq(index).click(function(){
						$('.totality_ion span').removeClass('pj_ion2');
						$('.totality_ion span').removeClass('pj_ion1');
						if(index == 0){
							$('.totality_ion span').eq(index).addClass('pj_ion2');
							$('.totality_tip').css('display','block');
							$('.totality_tip').text('很差');
							_this.ztpj = index + 1;
							_this.ztpj_text = '很差';
						}
						if(index == 1){
							$('.totality_tip').css('display','block');
							$('.totality_tip').text('一般');
							_this.ztpj = index + 1;
							_this.ztpj_text = '一般';
						}
						if(index == 2){
							$('.totality_tip').css('display','block');
							$('.totality_tip').text('满意');
							_this.ztpj = index + 1;
							_this.ztpj_text = '满意';
						}
						if(index == 3){
							$('.totality_tip').css('display','block');
							$('.totality_tip').text('非常满意');
							_this.ztpj = index + 1;
							_this.ztpj_text = '非常满意';
						}
						if(index == 4){
							$('.totality_tip').css('display','block');
							$('.totality_tip').text('无可挑剔');
							_this.ztpj = index + 1;
							_this.ztpj_text = '无可挑剔';
						}
						if(index > 0){
							for (var j=0; j<=index; j++) {
								$('.totality_ion span').eq(j).addClass('pj_ion1');
							}
						}
					});
				})(i);
			}
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
.totality_box{
	display: flex;
	display: -webkit-flex;
	align-items: center;
	height: auto;
	background: #fff;
	padding: 0.1rem 0.4rem 0.4rem 0.4rem;
}
.totality_text{
	font-size: 0.3rem;
	color: #333333;
	text-align: center;
}
.totality_tip{
	font-size: 0.28rem;
	color: #666666;
	text-align: center;
	display: none;
}
.totality_ion{
	display: flex;
	display: -webkit-flex;
	justify-content: space-between;
	-webkit-justify-content: space-between;
	width: 3.2rem;
	margin: 0 0.4rem;
}
/*默认*/
.pj_ion{
	display: inline-block;
	width: 0.5rem;
	height: 0.5rem;
	background: url(../../resources/images/advise/star1_ion.png) no-repeat center;
	background-size: 100%;
}
/*一般图标*/
.pj_ion1{
	background: url(../../resources/images/advise/star_ion.png) no-repeat center;
	background-size: 100%;
}
/*很差*/
.pj_ion2{
	background: url(../../resources/images/advise/star_ion.png) no-repeat center;
	background-size: 100%;
}
</style>
