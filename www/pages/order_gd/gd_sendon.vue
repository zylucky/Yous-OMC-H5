<template>
	<div class="gd_sendon_box">
		<ul class="sendon_box">
			<li>
				<p class="tit">转交人员</p>
				<p class="inp">
					<input type="text" placeholder="请输入转交人员姓名" v-model="username" @input="set_state" @focus="list_stat">
				</p>
			</li>
			<!-- 搜索的抄送列表 -->
			<ul class="copy_list" v-show="username!='' && state && list_stat">
				<li v-for="item in listData" @click="add_person(item)">
					<div class="head_img"><img src="../../resources/images/commission/head_img.png" alt=""></div>
					<div class="copy_news">
						<p class="name">{{item.topic}}</p>
						<p class="tel">{{item.fybh}}</p>
					</div>
				</li>
				<!-- <p style="line-height: 0.5rem;font-size: 0.3rem;text-align: center;color: #999;">{{list_data.length!=0 && username!=''?'':'系统中暂无该人员'}}</p> -->
			</ul>
		</ul>
		<ul class="sendon_box">
			<li class="zjsm">
				<p class="tit">转交说明</p>
				<p class="inp inp1" style="font-size: 0.3rem!important">
					<textarea placeholder="请输入转交说明" v-model="explain" style="font-size: 0.3rem!important"></textarea>
				</p>
			</li>
		</ul>
		<div class="record_btn" id="record_btn" @click="careof">确认转交</div>
	</div>
</template>

<script>
import axios from 'axios';
import { Toast } from 'mint-ui';
import { Field } from 'mint-ui';
import { MessageBox } from 'mint-ui'
	export default {
		data(){
			return{
				username:'',
				username_id:'',
				list_data: [],
				explain: '',
				state: true,//列表块
				isclick:true,//防止重复点击
				middleId: '',//中间表id
				nodeName: '',
				laiyuan: '',
				list_data_state: true,
			}
		},
		created(){
			this.taskid = this.$route.query.taskid;
			this.gd_id = this.$route.query.gdid;
			this.nodeName = this.$route.query.nodeName;
			this.laiyuan = this.$route.query.laiyuan;
			this.csr_id = this.$route.query.csr_id;
			this.middleId = this.$route.query.middleId;
		},
		methods:{
			list_stat(){
				this.list_data_state = true;
			},
			add_person(item){//选择转交人员
				this.state = false;
				this.username = item.topic;
				this.username_id = item.id;
				console.log(item);
			},
			set_state(){
				this.state = true;
			},
			careof(){//转交
				var _this = this;
				if(_this.username_id == ''){
					MessageBox('提示', '请输入转交人员名称');
					return;
				}
				if(_this.explain == ''){
					MessageBox('提示', '转交说明不能为空');
					return;
				}
				
				// return;//ceshi
				
				if(_this.isclick){
			        _this.isclick= false;
					const url = this.$api + "/yhcms/web/activitibusinessreg/getTransfer.do";
					axios.post(url,{
						"taskid": _this.taskid,
						"middleId": _this.middleId,
						"cookie": JSON.parse(localStorage.getItem('cookxs')).sjs,//用户cookie,
						"workListId": _this.gd_id,
						"copyname": _this.csr_id.join(","),
						"assigneeReamrk": _this.explain,
						"assignee": _this.username_id
					}).then((res)=>{
						if(res.data.success){
							setTimeout(function(){
					            _this.isclick = true;
					        });
							console.log(res);
							// 跳转我经办的
							_this.$router.push({
								path:'/gtasks_jb',//跳转我的经办
								query:{}
							});
						}
					}, (err)=>{
						console.log(err);
					});
				}
			}
			
		},
		computed: {
			listData(){//模糊查询渠道人员信息
				if(this.username != '' && this.list_data_state){
					const url = this.$api + "/yhcms/web/activitibusinessreg/getPersonnel.do";
					axios.post(url,{
						"search_keywork": this.username,//关键词搜索
					}).then((res)=>{
						this.list_data = res.data.data;
						if(res.data.data.length == 0){
							this.list_data_state = false;
							MessageBox.alert('没有找到该人员').then(action => {
								this.username = '';
							});
						}
					}, (err)=>{
						console.log(err);
					});
					return this.list_data;
				}
			}
		},
		mounted(){
			this.to_page_zj(this.laiyuan,this.gd_id,this.taskid,this.nodeName);//返回地址重定向
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
	position: relative;
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
.copy_list{
	overflow: auto;
    position: fixed;
    z-index: 9;
    background: #fff;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    top: 1.1rem;
	padding-left: 0.34rem;
	li{
		display: flex;
		margin-top: 0.12rem;
	}
	.head_img{
		width: 0.75rem;
		height: 0.75rem;
		border-radius: 50%;
		margin-right: 0.25rem;
		overflow: hidden;
		img{
			width: 100%;
			height: auto;
		}
	}
	.copy_news{
		flex: 1;
		border-bottom: 1px solid #e5e4e4;
		padding-bottom: 0.25rem;
		p{line-height: 0.43rem;}
		.name{
			font-size: 0.3rem;
			color: #333333;
		}
		.tel{
			font-size: 0.26rem;
			color: #999999;
		}
	}
}
</style>
