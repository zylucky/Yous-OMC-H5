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
						<span class="chel_tex" :style="fycdgs=='请选择费用承担公司'?'color:#c8c8c8;':'color:#333;'">{{fycdgs}}</span>
					</p>
					<p class="jt"></p>
				</li>
				<li>
					<p class="tit"><i>*</i>收款人姓名</p>
					<p class="inp">
						<input type="text" placeholder="请输入收款人姓名" v-model="skr_name" @input="news_ipt1">
					</p>
				</li>
				<li>
					<p class="tit"><i>*</i>开户行</p>
					<p class="inp">
						<input type="text" placeholder="请输入开户行名称" v-model="khh_bank" @input="news_ipt2">
					</p>
				</li>
				<li>
					<p class="tit"><i>*</i>收款账号</p>
					<p class="inp">
						<input type="text" placeholder="请输入收款账号" v-model="bank_number" maxlength="30" @input="news_ipt3">
					</p>
				</li>
				<li>
					<p class="tit"><i>*</i>申请金额</p>
					<p class="inp">
						<input type="text" placeholder="请输入申请金额" v-model="sq_money" @input="news_ipt4">
					</p>
				</li>
				<li class="inp_are">
					<p class="tit inp_are_txt"><i style="visibility: hidden;">*</i>备注</p>
					<p class="inp inp_p" style="font-size: 0.3rem!important">
						<textarea class="text_ar" placeholder="请输入" v-model="remark" @input="news_ipt5"></textarea>
					</p>
				</li>
			</ul>
			<!-- 图片 -->
			<ul class="news_box img_tp_box">
				<p class="img_t"><i style="visibility: hidden;">*</i>图片</p>
				<ul class="img_list_box">
					<li v-for="(item,index) in images.localId" @click="see_img(item,index)" v-if="item.isdelete=='0'">
						<img :src="$prefix+'/' + item.url" alt="">
						<span class="del_img_btn" tag="tp" @click.stop="del_img(index,$event,item)"></span>
					</li>
					<li class="add_img btns"></li>
				</ul>
			</ul>
			<!-- 抄送人 -->
			<ul class="news_box img_tp_box">
				<p class="img_t"><i style="visibility: hidden;">*</i>抄送人</p>
				<ul class="img_list_box copy_person">
					<li v-for="(item,index) in copy_data" v-show="item.isdelete==1">
						<p class="head_img">
							<img src="../../resources/images/commission/head_img.png" alt="">
							<span class="del_img_btn" v-if="item.admin!=1" @click="del_copy(item,index)"></span>
							<span class="admin_ion" v-if="item.admin==1"></span>
						</p>
						<p class="copy_name">{{item.topic || item.name}}</p>
					</li>
					<li @click="add_copy">
						<p class="head_img add_copy_person"></p>
						<p class="copy_name"></p>
					</li>
				</ul>
			</ul>
			<div class="see_lct" @click="see_flowimg">查看工单流程图</div>
		</div>

		<!-- 底部悬浮按钮 -->
		<div class="gs_box_bottom">
			<div class="btn_fq" @click="commit_btn">提交申请</div>
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
	import wx from 'weixin-js-sdk';
	import { Radio } from 'mint-ui';
	import { Picker } from 'mint-ui';
	import { DatetimePicker } from 'mint-ui';
	import axios from 'axios';
	import { MessageBox } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	import { Toast } from 'mint-ui';
	export default {
		data(){
			return{
				value:'',
				slots: [{
					flex: 1,
					values: ['请选择费用承担公司', '幼狮', '华亮', '航远投资', '华亮致新', '幼狮装饰'],
					className: 'slot1',
					textAlign: 'center',
					// defaultIndex:  0,
				}],
				zzc_state: false,
				fycdgs: '请选择费用承担公司',//费用承担公司
				skr_name: '',//收款人姓名
				khh_bank: '',//开户行
				bank_number: '',//收款账号
				sq_money: '',//申请金额
				remark: '',//备注
			    images: {
					localId: [], //图片列表
					serverId: [] //微信服务端图片id
				},
				count:0,//未删减图片数量
				copy_data: [],//抄送人
				cs_person: [],//默认抄送人
				form_obj: {},//表单数据暂存
				seltype: '',//判断选择的是哪一项
				sel_value: '',//当前选中value
				isclick:true,//防止重复点击
				busId: '',
				documentaryper: '',
				fyid: '',
				lpid: '',
				zdid: '',
				responsible: '',
				taskid: '',//任务id
			}
		},
		created() {
			this.taskid = this.$route.query.taskid;
			this.busId = this.$route.query.busId;
			this.documentaryper = this.$route.query.documentaryper;
			this.fyid = this.$route.query.fyid;
			this.lpid = this.$route.query.lpid;
			this.zdid = this.$route.query.zdid;
			this.responsible = this.$route.query.responsible;
			
			this.images.localId = this.$store.state.arrImg;//获取图片
			this.copy_data = this.$store.state.copyData;//获取添加的抄送人
			this.get_cs_person();//默认抄送人
			if(JSON.parse(sessionStorage.getItem('form_obj'))){
				this.form_obj = JSON.parse(sessionStorage.getItem('form_obj'));
				this.fycdgs = this.form_obj.fycdgs;//费用承担公司
				this.skr_name = this.form_obj.skr_name;//收款人姓名
				this.khh_bank = this.form_obj.khh_bank;//开户行
				this.bank_number = this.form_obj.bank_number;//收款账号
				this.sq_money = this.form_obj.sq_money;//申请金额
				this.remark = this.form_obj.remark;//备注
			}
		},
		methods:{
			news_ipt1(){
				this.form_obj.skr_name = this.skr_name;//暂存
			},
			news_ipt2(){
				this.form_obj.khh_bank = this.khh_bank;//暂存
			},
			news_ipt3(){
				if(this.bank_number != ''){
					this.bank_number = this.bank_number.replace(/[^\d]/g,'');//限制只能输入数字
					this.form_obj.bank_number = this.bank_number;//暂存
				}
			},
			news_ipt4(){

				if(this.sq_money != ''){
					this.sq_money = this.sq_money.replace(/[^\d.]/g,""); //清除"数字"和"."以外的字符
					this.sq_money = this.sq_money.replace(/^\./g,""); //验证第一个字符是数字而不是字符          
					this.sq_money = this.sq_money.replace(/\.{2,}/g,"."); //只保留第一个.清除多余的       
					this.sq_money = this.sq_money.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
					this.sq_money = this.sq_money.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3'); //只能输入两个小数
					this.form_obj.sq_money = this.sq_money;//暂存
				}
			},
			news_ipt5(){
				this.form_obj.remark = this.remark;//暂存
			},
			onValuesChange(picker, values) {
			  // picker.setSlotValue(0, values[0]);
			  // console.log(values[0]);
			  this.sel_value = values[0];
			},
			add_copy(){
				var _this = this;
				if(JSON.stringify(this.form_obj) == "{}"){
					MessageBox('提示', '请先填写表单信息');
					return;
				}
				//this.$store.commit('form_set',this.form_obj);
				if(JSON.parse(sessionStorage.getItem('form_obj'))){
					var obj_data = JSON.parse(sessionStorage.getItem('form_obj'));
					for(var key in obj_data){
						if(obj_data[key] != this[key]){
							sessionStorage.setItem("form_obj",JSON.stringify(this.form_obj));
						}
					}
					console.log(JSON.parse(sessionStorage.getItem('form_obj')));
					// 保存图片
					this.$store.commit('save_img',this.images.localId);
					this.$router.push({
						path:'/gs_copy1',//跳转到添加抄送人
						query:{
							laiyuan: '/fy_from',
							gdid: _this.$route.query.gdid,//工单id
							taskid: _this.$route.query.taskid,//任务id
							busId: _this.$route.query.busId,
							documentaryper: _this.$route.query.documentaryper,
							fyid: _this.$route.query.fyid,
							lpid: _this.$route.query.lpid,
							zdid: _this.$route.query.zdid,
							responsible: _this.$route.query.responsible
						}
					})
				}else{
					sessionStorage.setItem("form_obj",JSON.stringify(this.form_obj));
					console.log(JSON.parse(sessionStorage.getItem('form_obj')));
					this.$router.push({
						path:'/gs_copy1',//跳转到添加抄送人
						query:{
							laiyuan: '/fy_from',
							gdid: _this.$route.query.gdid,//工单id
							taskid: _this.$route.query.taskid,//任务id
							busId: _this.$route.query.busId,
							documentaryper: _this.$route.query.documentaryper,
							fyid: _this.$route.query.fyid,
							lpid: _this.$route.query.lpid,
							zdid: _this.$route.query.zdid,
							responsible: _this.$route.query.responsible
						}
					})
				}
			},
			sel_fqsy(){//请选择公司
				this.seltype = 'cdgs_sel';
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
				if(this.seltype == 'cdgs_sel'){
					this.fycdgs = this.sel_value;
					this.form_obj.fycdgs = this.fycdgs;//暂存
				}
				this.zzc_state = false;
				$('.pop_picker').css("bottom","-5.2rem");
			},
			wechat_share() { //微信授权获取配置信息
				const url = "http://omc.urskongjian.com/yhcms/web/weixin/shareYskj.do";
				var url_share = window.location.href;
				url_share = url_share.split('#')[0];
				axios.post(url, {
					"url": url_share
				}).then((res) => {
					let we_cs = res.data;
					console.log(we_cs);
					//微信签名调取
					wx.config({
						debug: false, // 开启调试模式
						appId: we_cs.appId, // 必填，公众号的唯一标识
						timestamp: we_cs.timestamp, // 必填，生成签名的时间戳
						nonceStr: we_cs.nonceStr, // 必填，生成签名的随机串
						signature: we_cs.signature, // 必填，签名
						jsApiList: ["chooseImage", "previewImage", "uploadImage", "downloadImage", "getLocalImgData"]
					});
				}, (err) => {
					console.log(err);
				});
			},
			see_img(item, index) { // 预览图片
				var _this = this;
				var url_img = []; //图片列表
				for (var i = 0; i < _this.images.localId.length; i++) {
					url_img.push(_this.$prefix + '/' + _this.images.localId[i].url);
				}
				wx.ready(function() {
					wx.previewImage({
						current: item.url,
						urls: url_img
					});
				});
			},
			del_img(index, event, item) { // 删除图片
				const tag = $(event.target).attr("tag"),
					which = {
						"tp": "localId",
					} [tag];
				MessageBox({
					title: '提示',
					message: '请确认是否删除?',
					showCancelButton: true,
					confirmButtonText: "确认删除",
					cancelButtonText: "取消删除"
				}).then(action => {
					if (action == 'confirm') {
						console.log('确认删除')
						this.images[which][index].isdelete = "1";
						var cout = 0;//统计未删除标识
						for(var i=0; i<this.images[which].length; i++){
							if(this.images[which][i].isdelete == '0'){
								cout += 1;
							}
						}
						this.count = cout;//还可以上传数量
					} else {
						console.log('取消删除')
					}
				})
			},
			get_cs_person(){//发起工单默认抄送人
				const url = this.$api + "/yhcms/web/activitibusinessreg/getFindSendPer.do";
				axios.post(url,{
					"type": 'fysq'//工单类型
				}).then((res)=>{
					// this.copy_data = res.data.data;
					let cs_person = res.data.data;
					// 房源图片数据处理
					this.cs_person = cs_person.map((item, idx) => {
						return {
							"id": item.id,
							"admin": 1,
							"isdelete": 1,
							"topic": item.name
						};
					});
					this.copy_data = this.copy_data.map((item, idx) => {
						return {
							"id": item.id,
							"admin": 0,
							"isdelete": 1,
							"topic": item.topic
						};
					});
					this.copy_data = this.copy_data.concat(this.cs_person);
				}, (err)=>{
					console.log(err);
				});
			},
			del_copy(item,index){
				item.isdelete = 0;
				var newcopy = [];
				for (var i=0; i<this.copy_data.length; i++) {
					if(this.copy_data[i].isdelete==1){
						newcopy.push(this.copy_data[i]);
					}
				}
				this.copy_data = newcopy;
				this.$store.commit('del_copy',item.id);
			},
			commit_btn(){//提交申请
				var _this = this;
				// 验证
				if(_this.fycdgs == '请选择费用承担公司'){
					MessageBox('提示', '请选择费用承担公司');
					return;
				}
				if(_this.skr_name == ''){
					MessageBox('提示', '请输入收款人姓名');
					return;
				}
				if(_this.khh_bank == ''){
					MessageBox('提示', '请输入开户行名称');
					return;
				}
				if(_this.bank_number == ''){
					MessageBox('提示', '请输入收款账号');
					return;
				}
				if(_this.sq_money == ''){
					MessageBox('提示', '请输入申请金额');
					return;
				}
				console.log(this.fycdgs);
				console.log(this.skr_name);
				console.log(this.khh_bank);
				console.log(this.bank_number);
				console.log(this.sq_money);
				console.log(this.remark);
				console.log(this.busId);
				console.log(this.documentaryper);
				console.log(this.fyid);
				console.log(this.lpid);
				console.log(this.zdid);
				console.log(this.responsible);
				let csr_id = _this.copy_data.map((item, idx) => {
					return item.id
				});
				console.log(csr_id);
				
				// return//测试时暂停提交
				
				if(_this.isclick){
			        _this.isclick= false;
					const url = this.$api + "/yhcms/web/activitibusinessreg/saveCostApproval.do";
					axios.post(url,{
						"cookie": JSON.parse(localStorage.getItem('cookxs')).sjs,//用户cookie
						"ActivitiCostApproval":{
							"accountnumber": _this.bank_number,
							"applicationamount": _this.sq_money,
							"bankname": _this.khh_bank,
							"busId": _this.busId,
							"costcompany": _this.fycdgs,
							"documentaryper": _this.documentaryper,
							"fyid": _this.fyid,
							"lpid": _this.lpid,
							"receivablesname": _this.skr_name,
							"remark": _this.remark,
							"responsible": _this.responsible,
							"zdid": _this.zdid
						},
						"pic": _this.images.localId,//图片地址
						"copyname": csr_id.join(","),//抄送人
					}).then((res)=>{
						console.log(res);
						if(res.data.success){//成功后
							sessionStorage.removeItem("form_obj");//清除表单缓存存储信息
							setTimeout(function(){
					            _this.isclick = true;
					        });
							Toast({
							  message: '申请已提交',
							  position: 'center',
							  duration: 3000
							});
							_this.$router.push({
								path:'/fy_putin',//跳转到审批页面
								query:{
									gdid: _this.$route.query.gdid,//工单id
									taskid: _this.$route.query.taskid,//任务id
									busId: _this.$route.query.busId,
									documentaryper: _this.$route.query.documentaryper,
									fyid: _this.$route.query.fyid,
									lpid: _this.$route.query.lpid,
									zdid: _this.$route.query.zdid,
									responsible: _this.$route.query.responsible
								}
							});
						}
					}, (err)=>{
						console.log(err);
					});
				}
				
			},
			see_flowimg(){//查看工单流程图
				const url = this.$api_lct + "/lswapi/processOpt/processImage.do?actKeyType=fysq";
				this.$http.get(
				url
				).then((res) => {
					var _this = this;
					console.log(res);
					var url_img = []; //图片列表
					url_img.push(res.url);
					wx.ready(function() {
						wx.previewImage({
							current: res.url,
							urls: url_img
						});
					});
				}, (response) => {});
			},

			
		},
		mounted(){
			var _this = this;
			this.to_page_cs2('/fy_from',this.$route.query.gdid,this.$route.query.taskid,this.$route.query.busId,this.$route.query.documentaryper,this.$route.query.fyid,this.$route.query.lpid,this.$route.query.zdid,this.$route.query.responsible);//从定向默认返回键
			this.wechat_share(); //授权签名方法调用
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
			// 图片上传
			wx.ready(function() {
				$('.btns').click(function() {
					wx.chooseImage({
						count: 9, // 默认9
						sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
						success: function(res) {
							var localIds = res.localIds;
							// 上传预览方法
							var i = 0,
								length = res.localIds.length;

							function upload() {
								if (window.__wxjs_is_wkwebview) {
									// ios端缩略图预览方法（兼容）
									wx.getLocalImgData({
										localId: res.localIds[i],
										success: function(res) {
											var localData = res.localData; // localData是图片的base64数据，可以用img标签显示
											localData = localData.replace('jgp', 'jpeg'); //iOS 系统里面得到的数据，类型为 image/jgp,因此需要替换一下
											var fyobj = {
// 												id: '',
// 												fyid: '',
												url: '',
												type: '',
												isdelete: 0,
												state: 1,
												endesc: ""
											};
											fyobj.url = localData;
											_this.images.localId.push(fyobj);
										}
									});
								} else {
									var fyobj = {
// 										id: '',
// 										fyid: '',
										url: '',
										type: '',
										isdelete: 0,
										state: 1,
										endesc: ""
									};
									fyobj.url = res.localIds[i];
									_this.images.localId.push(fyobj);
								}
								// 上传到微信服务器
								wx.uploadImage({
									localId: res.localIds[i],
									isShowProgressTips: 0, // 默认为1，显示进度提示
									success: function(res) {
										i++;
										var media_id = res.serverId;
										_this.images.serverId.push(res.serverId);
										if (i < length) {
											upload();
										}
										if (i == length && _this.images.serverId.length != 0) {
											setTimeout(function() {
												img_back();
											}, 300);
										}
									},
									fail: function(res) {
										alert(JSON.stringify(res));
									}
								});

							}
							upload();
							// 从后台服务器返回

							function img_back() {
								Indicator.open({
									text: '等待中...',
									spinnerType: 'fading-circle'
								});
								// alert(_this.images.serverId.length);
								axios.post(_this.$api + '/yhcms/web/jcsj/uploadWxPic.do', {
									"parameters": {
										"pic1": _this.images.serverId.join(';').toString(),
										"pic2": "",
										"pic3": "",
										"token": _this.$token
									}
								}).then((res) => {
									var pic1 = res.data.pic1.split(';').reverse();
									var arr = _this.images.localId.reverse();
									// var arr1 = _this.images.localId.reverse();
									for (var m = 0; m < pic1.length; m++) {
										// arr[m].url = _this.$prefix + '/' + pic1[m];
										// 工单提交时的图片格式
										arr[m].url = pic1[m];
										arr[m].type = 22;
										arr[m].isdelete = 0;
										arr[m].state = 1;
										arr[m].endesc = "";
									}
									// 上传前的页面显示图片格式
									_this.images.localId = arr.reverse();
									// 工单提交时的图片格式
									// _this.imgArr = arr1.reverse();
									var cout = 0;//统计未删除标识
									for(var m=0; m<_this.images.localId.length; m++){
										if(_this.images.localId[m].isdelete == '0'){
											cout += 1;
										}
									}
									// _this.count = cout;//已有有效图片数量
									Indicator.close();
									// alert(JSON.stringify(_this.images.localId));//图片包含地址
								}, (err) => {
									console.log(err);
								});
							}

						}
					});

				});
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
