<style scoped lang='less'>
	@import "../../resources/css/reset.css";
	@import "../../resources/css/base.less";
	.box {
		/*position: relative;
  		left: 0;
  		right: 0;
  		bottom: 0;
  		top: 0;*/
		padding-bottom: 0.9rem;
		overflow: auto;
	}
	
	.site_card {
		width: 7.06rem;
		height: 2.05rem;
		margin: 0.25rem auto 0;
		border-radius: 0.07rem;
		background: url(../../resources/images/commission/card_bg.png) no-repeat center;
		background-size: 7.06rem 2.05rem;
		-webkit-box-shadow: 0px 0px 7px #2991f4;
		box-shadow: 0px 0px 7px #2991f4;
		color: @cl_white;
		padding: .22rem 0 0 .3rem;
		p:nth-child(1) {
			font-weight: bold;
			font-size: @font36;
		}
		p {
			display: flex;
			display: -webkit-flex;
			justify-content: flex-start;
			-webkit-justify-content: flex-start;
			margin-bottom: 0.15rem;
			span:nth-child(2) {
				display: inline-block;
				width: 5.5rem;
				word-break: break-all;
				white-space: pre-wrap;
			}
		}
		p:last-child {
			font-size: @font32;
		}
	}
	
	.new_box {
		width: 7.06rem;
		/*height:4.53rem;*/
		margin: 0.25rem auto 0;
		border-radius: 0.08rem;
		-webkit-box-shadow: 0px 0px 10px #C5C4C9;
		box-shadow: 0px 0px 10px #C5C4C9;
		font-size: @font32;
		background-color: #fff;
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
		p {
			display: flex;
			display: -webkit-flex;
			align-items: center;
			-webkit-align-items: center;
			height: 1.15rem;
			margin-left: 0.3rem;
			border-bottom: 1px solid #e4e4e4;
			input {
				font-size: @font32;
				margin-left: 0.75rem;
			}
			label {
				color: #3586f2;
				font-weight: bold;
			}
		}
		p:last-child {
			border-bottom: none;
		}
	}
	
	.invoice_list {
		background-color: #fdfcfa;
		border-top: 1px dashed #fcc487;
		li {
			display: flex;
			display: -webkit-flex;
			padding: 0.2rem 0.3rem;
			font-size: @font24;
			border-bottom: 1px solid #fcc487;
			i {
				display: inline-block;
				width: 1.7rem;
				height: 0.25rem;
				color: #fea74a;
			}
			span {
				display: inline-block;
				width: 4.74rem;
				color: #3084f6;
			}
		}
		li:last-child {
			border-bottom: none;
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
	}
	
	.shade {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		background: rgba(0, 0, 0, 0.2);
	}
	
	.picker_bottom {
		position: absolute;
		bottom: 0;
		width: 100%;
		background: #fff;
		font-size: @font30;
		color: #378eef;
		p {
			display: flex;
			display: -webkit-flex;
			justify-content: space-between;
			-webkit-justify-content: space-between;
			align-items: flex-end;
			-webkit-align-content: flex-end;
			height: 0.75rem;
			padding: 0 0.5rem;
		}
	}
	
	.picker-slot-wrapper {
		font-size: @font30;
	}
</style>

<template>
	<div class="box">
		<div class="site_card">
			<p>DRC北京工艺设计创意产业基地</p>
			<p>
				<span>南塔2-</span>
				<span>2908/2908/2908/2908/2908/2908/2908/2908/2908/2908</span>
			</p>
		</div>
		<!--佣金信息-->
		<div class="new_box">
			<h3>佣金金额</h3>
			<p>
				<span>佣金信息</span>
				<input type="text" placeholder="请输入佣金金额" v-model="money" v-on:blur="inputFunc" />
				<i>元</i>
			</p>
			<p>
				<span>渠道姓名</span>
				<input type="text" placeholder="请输入渠道人员姓名" v-model="channelname" />
			</p>
			<p>
				<span>联系方式</span>
				<input type="number" placeholder="请输入渠道登陆账号" v-model="tel" />
			</p>
		</div>
		<!--发票信息-->
		<div class="new_box">
			<h3>发票信息</h3>
			<p style="border: none;">
				<span>发票类型</span>
				<input id="invoice" type="text" placeholder="请选择发票类型" v-model="invoice" @click='selinvoice' />
				<label for="invoice">></label>
			</p>
			<ul class="invoice_list" v-if='thefp'>
				<li>
					<i>名<s style="visibility: hidden;">我我我我</s>称:</i>
					<span>{{theinvoice.companyName}}</span>
				</li>
				<li>
					<i>纳税人识别号:</i>
					<span>{{theinvoice.number}}</span>
				</li>
				<li>
					<i>地&nbsp;&nbsp;址、电&nbsp;&nbsp;话:</i>
					<span>{{theinvoice.address}}</span>
				</li>
				<li>
					<i>开户行及账号:</i>
					<span>{{theinvoice.bankplace}}</span>
				</li>
			</ul>
		</div>
		<button class="btn" disabled @click='bas()'>提交</button>
		<!--发票选择弹框-->
		<div class="shade" v-if="shade" @click='shade=false'>
			<div class="picker_bottom" v-if="pickshow" @click.stop="clk">
				<p>
					<span @click="elect(false)">取消</span>
					<span @click="elect(true)">确认</span>
				</p>
				<mt-picker :slots="slots" valueKey='name' @change="onValuesChange"></mt-picker>
			</div>
		</div>

	</div>
</template>

<script>
	import { Field } from 'mint-ui';
	import { Picker } from 'mint-ui'
	import { Toast } from 'mint-ui';
	export default {
		data() {
			return {
				money: '', //佣金信息
				channelname: '', //渠道姓名
				tel: '', //联系方式
				invoice: '', //发票类型
				slots: [{
					flex: 1,
					values: [{
							id: 0,
							name: '请选择发票类型',
							companyName: '',
							number: '',
							address: '',
							bankplace: ''
						},
						{
							id: 1,
							name: '幼狮增值税专用发票',
							companyName: '北京幼师科技有限公司',
							number: '9111 0105 3064 0709 X3',
							address: '北京市朝阳区东三环中路39号院24号楼22层2902 010-5643922',
							bankplace: '招商银行北京分行建国门支行11092166740910'
						},
						{
							id: 2,
							name: '幼狮增值税普通发票',
							companyName: '北京幼师科技有限公司',
							number: '9111 0105 3064 0709 X3',
							address: '',
							bankplace: ''
						},
						{
							id: 3,
							name: '华亮致新增值税普通发票',
							companyName: '北京华亮致新科技有限公司',
							number: '9111 0105 MA01 7E7T 62',
							address: '',
							bankplace: ''
						},
						{
							id: 4,
							name: '华溯商贸增值税普通发票',
							companyName: '北京幼师科技有限公司',
							number: '9111 0105 3064 0709 X3',
							address: '',
							bankplace: ''
						}
					],
					className: 'slot1',
					textAlign: 'center'
				}],
				invoicetype: '',
				shade: false,
				pickshow: false, //弹框状态控制
				theinvoice: { //生成的发票对象
					id: '',
					companyName: '',
					number: '',
					address: '',
					bankplace: ''
				},
				thefp: false, //生成发票显示状态

			}
		},
		created() {

		},
		methods: {
			selinvoice() { //发票类型选择
				this.shade = true;
				this.pickshow = true;
			},
			onValuesChange(picker, values) {
				this.invoicetype = values[0].name;
				console.log(values[0]);
				this.theinvoice.companyName = values[0].companyName;
				this.theinvoice.number = values[0].number;
				this.theinvoice.address = values[0].address;
				this.theinvoice.bankplace = values[0].bankplace;
				this.theinvoice.id = values[0].id;
			},
			clk() {}, //阻止默认
			elect(state) { //确认、取消
				console.log(state)
				if(state == true && this.theinvoice.id == '0') {
					Toast({
						message: '发票类型不能为空',
						position: 'center',
						duration: 3000
					});
					this.thefp = false;
					console.log(this.invoicetype.id)
				} else {
					this.invoice = this.invoicetype;
					this.shade = false;
					this.pickshow = false;
					this.thefp = true;
					if(this.money != '' && this.channelname !='' && this.tel != ''){
						$(".btn").addClass('btn btnactive');
						$(".btn").removeAttr("disabled");
					}
				}
			},
			splitk(num) { //千位分隔符 
				var decimal = String(num).split('.')[1] || ''; //小数部分
				var tempArr = [];
				var revNumArr = String(num).split('.')[0].split("").reverse(); //倒序
				for(var i in revNumArr) {
					tempArr.push(revNumArr[i]);
					if((i + 1) % 3 === 0 && i != revNumArr.length - 1) {
						tempArr.push(',');
					}
				}
				var zs = tempArr.reverse().join(''); //整数部分
				return decimal ? zs + '.' + decimal : zs + '.00';
			},
			inputFunc() {
				this.money = this.splitk(this.money);
			},
			bas(){
				console.log(123)
			}

		},
		mounted() {
			
		},
		watch: {
			
		},
		computed:{

		}

	}
</script>