<template>
	<div class="add_card_box">
		<div class="card_top">
			<!-- 输入卡号 -->
			<ul class="inp_card">
				<li v-for="(module,index) in modules">
					<p class="inp_box">
						<input type="text" v-model="module.text" placeholder="请输入VIP卡序列号"/>
					</p>
					<p class="inp_btnbox">
						<span class="add_btn" @click="add(index)" v-if="module.isshow=='s' && index<9"></span>
						<span class="del_btn" @click="del(index)" v-if="module.isshow=='h' || index==9"></span>
					</p>
				</li>
				<p class="btn_c" @click="bound">绑定VIP卡</p>
			</ul>
		</div>
		<!-- 注意事项 -->
		<div class="card_bottom">
			<p class="tit_box">
				<span class="tit_l"></span>
				<span class="tit">注意事项</span>
				<span class="tit_r"></span>
			</p>
			<!-- 事项 -->
			<div class="tip_box">
				<p>1、VIP系列卡序列号均为8位数随机码，不记名；</p>
				<p>2、一个序列号只能被销售绑定一次；</p>
				<p>3、客户手机号必须与商城订单买家手机号一致；</p>
				<p>4、商城订单的买家留言里必须填写激活码，否则不认定业绩；</p>
				<p>5、最终解释权归亮狮企服商城所有。</p>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import { MessageBox } from 'mint-ui';
import { Indicator } from 'mint-ui';
import { Toast } from 'mint-ui';
	export default {
		data(){
			return{
				modules:[{
					text:'',
					isshow:'s'
				}],
				card_number:[],
			}
		},
		methods:{
			add(index){//添加
				this.modules.push({text:'',isshow:'s'});
				this.modules[index].isshow = 'h';
            },
			del(index){//删除
				if(index == 9){
					this.modules[index-1].isshow = 's';
				}
				this.modules.splice(index,1);
				this.card_number.splice(index,1);
				console.log(this.card_number);//输出查看
			},
			bound(){//绑定卡片
				for(var i=0; i<this.modules.length; i++){
					if(this.modules[i].text != ''){
						this.card_number[i]=this.modules[i].text;
					}
				}
				if(this.card_number.length == 0){
					MessageBox('提示', '没有要进行VIP卡序列号！');
					return;
				}
				console.log(this.card_number);//输出查看
				const url = this.$api + "/yhcms/web/vipcard/salesCard.do";
				axios.post(url,{
					"cookie": JSON.parse(localStorage.getItem('cookxs')).sjs,
					"serialnumber": this.card_number.join(',')
				}).then((res)=>{
					if(res.data.success){
						if(!res.data.status){
							var card_obj = res.data.data;
							for(var i=0; i<this.card_number.length; i++){
								for(var key in card_obj){
									if(this.card_number[i] == key && card_obj[key] == "此卡序列号已被绑定！"){
										$('.inp_box').eq(i).css({
											"-webkit-box-shadow":"0px 0px 8px #EEF51B",
											"box-shadow":"0px 0px 8px #EEF51B"
										});
										MessageBox('提示', '已绑定！');
									}else{
										$('.inp_box').eq(i).css({
											"-webkit-box-shadow": 'none',
											"box-shadow": 'none'
										});
									}
									if(this.card_number[i] == key && card_obj[key] == "此卡序列号错误！"){
										$('.inp_box').eq(i).css({
											"-webkit-box-shadow":"0px 0px 8px #FF1900",
											"box-shadow":"0px 0px 8px #FF1900"
										});
										MessageBox('提示', '此卡序列号错误！');
									}
								}
							}					
						}else{
							Toast({
							  message: '绑定VIP成功！',
							  position: 'bottom',
							  duration: 2000
							});
							this.$router.push({
								path:'/card_list',//跳转到绑卡列表
								query:{}
							});
						}
					}
				}, (err)=>{
					console.log(err);
				});
			},
		}
	}
</script>

<style scoped lang='less'>
@import "../../resources/css/reset.css";
@import "../../resources/css/base.less";
.add_card_box{
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: #00040e;
	overflow: auto;
	-webkit-overflow-scrolling: touch;
}
.card_top{
	width: 100%;
	padding: 0.4rem 0.3rem;
}
.inp_card{
	
}
.inp_card li{
	display: flex;
	display: -webkit-flex;
	justify-content: space-between;
	-webkit-justify-content: space-between;
	align-items: center;
	-webkit-align-items: center;
	margin-bottom: 0.2rem;
	margin-left: 0.15rem;
	text-align: center;
}
.inp_box{
	width: 6.08rem;
	height: 0.8rem;
	background: #fff;
	border-radius: 0.15rem;
}
.inp_box input{
	outline: none;
	background: none;
	width: 100%;
	height: 100%;
	padding-left: 0.3rem;
	font-size: 0.24rem;
}
.inp_box input::-webkit-input-placeholder{
    color:#ccc;
	font-size: 0.24rem;
}
.inp_btnbox{
	
}
.inp_btnbox span{
	display: inline-block;
	width: 0.45rem;
	height: 0.46rem;
}
.add_btn{
	background: url(../../resources/images/card_img/add.png) no-repeat center;
	background-size: 100% auto;
}
.del_btn{
	background: url(../../resources/images/card_img/del.png) no-repeat center;
	background-size: 100% auto;
}
.btn_c{
	width: 6.08rem;
	height: 0.8rem;
	line-height: 0.8rem;
	margin-left: 0.15rem;
	margin-top: 0.4rem;
	font-size: 0.3rem;
	color: #030b13;
	text-align: center;
	background: url(../../resources/images/card_img/btn_c.png) no-repeat center;
	background-size: 100% 100%;
}
.card_bottom{
	margin-top: 0.4rem;
}
.tit_box{
	display: flex;
	display: -webkit-flex;
	justify-content: center;
	-webkit-justify-content: center;
	align-items: center;
	-webkit-align-items: center;
}
.tit_box span{
	display: inline-block;
}
.tit_l{
	width: 1.03rem;
	height: 0.02rem;
	background: url(../../resources/images/card_img/title_bg.png) no-repeat center;
	background-size: 100% auto;
	transform: rotate(180deg);
}
.tit_r{
	width: 1.03rem;
	height: 0.02rem;
	background: url(../../resources/images/card_img/title_bg.png) no-repeat center;
	background-size: 100% auto;
}
.tit{
	font-size: 0.28rem;
	color: #fff;
	text-align: center;
	margin: 0 0.12rem;
}
.tip_box{
	display: flex;
	display: -webkit-flex;
	flex-direction: column;
	-webkit-flex-direction: column;
	justify-content: space-around;
	-webkit-justify-content: space-around;
	width: 6.43rem;
	min-height: 3.45rem;
	height: auto;
	background: #050c1d;
	margin: 0.25rem auto 0;
	padding: 0.38rem 0.5rem;
}
.tip_box p{
	font-size: 0.24rem;
	color: #acacac;
	line-height: 0.48rem;
}
</style>
