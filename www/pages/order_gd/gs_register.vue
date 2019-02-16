<template>
	<div class="gs_register_box">
		<!-- 主体 -->
		<div class="gs_box_top">
			<!-- 房间信息 -->
			<ul class="news_box">
				<p class="title">房间信息</p>
				<li>
					<p class="tit"><i>*</i>楼盘</p>
					<p class="inp">
						<input type="text" placeholder="请输入楼盘名称" v-model="lpname" @focus="lp_stat">
					</p>
					<p class="box_list" v-show="list_lp.length>0 && lpname != ''" v-if="lp_state">
						<span v-for="item in listLp" @click="sel_lp(item)">{{item.topic}}</span>
					</p>
				</li>
				<li>
					<p class="tit"><i>*</i>座栋</p>
					<p class="inp" @click="sel_zd">
						<!-- <input type="text" readonly="readonly" placeholder="请选择座栋"> -->
						<span class="chel_tex" :style="zdxx_sel.zdh=='请选择座栋'?'color:#c8c8c8;':'color:#333;'">{{zdxx_sel.zdh}}</span>
					</p>
					<p class="jt"></p>
				</li>
				<li>
					<p class="tit"><i>*</i>房间号</p>
					<p class="inp" @click="sel_fjxx">
						<!-- <input type="text" placeholder="请输入房间号"> -->
						<span class="chel_tex" :style="fjxx_sel.fybh=='请选择房间号'?'color:#c8c8c8;':'color:#333;'">{{fjxx_sel.fybh}}</span>
						<p class="jt"></p>
					</p>
				</li>
			</ul>
			<!-- 工单类型 -->
			<ul class="news_box">
				<p class="title">工单类型</p>
				<li>
					<p class="tit"><i>*</i>发起事由</p>
					<p class="inp" @click="sel_fqsy">
						<!-- <input type="text" readonly="readonly" placeholder="请选择发起事由"> -->
						<span class="chel_tex" :style="fqsy_sel=='请选择发起事由'?'color:#c8c8c8;':'color:#333;'">{{fqsy_sel}}</span>
					</p>
					<p class="jt"></p>
				</li>
				<li>
					<p class="tit"><i>*</i>需求方属性</p>
					<p class="inp" @click="sel_xqfsx">
						<!-- <input type="text" readonly="readonly" placeholder="请选择需求方属性"> -->
						<span class="chel_tex" :style="xqfsx_sel=='请选择需求方属性'?'color:#c8c8c8;':'color:#333;'">{{xqfsx_sel}}</span>
					</p>
					<p class="jt"></p>
				</li>
				<li>
					<p class="tit"><i>*</i>接单来源</p>
					<p class="inp" @click="sel_jdly">
						<!-- <input type="text" readonly="readonly" placeholder="请选择接单来源"> -->
						<span class="chel_tex" :style="jdly_sel=='请选择接单来源'?'color:#c8c8c8;':'color:#333;'">{{jdly_sel}}</span>
					</p>
					<p class="jt"></p>
				</li>
				<li>
					<p class="tit"><i>*</i>工单紧急情况</p>
					<p class="inp" @click="sel_gdjjqk">
						<!-- <input type="text" readonly="readonly" placeholder="请选择工单紧急情况"> -->
						<span class="chel_tex" :style="gdjjqk_sel=='请选择工单紧急情况'?'color:#c8c8c8;':'color:#333;'">{{gdjjqk_sel}}</span>
					</p>
					<p class="jt"></p>
				</li>
			</ul>
			<!-- 客户信息 -->
			<ul class="news_box">
				<p class="title">客户信息</p>
				<li>
					<p class="tit"><i>*</i>客户姓名</p>
					<p class="inp">
						<input type="text" placeholder="请输入客户姓名" v-model="client_name" @input="client">
					</p>
				</li>
				<li>
					<p class="tit"><i>*</i>联系方式</p>
					<p class="inp">
						<input type="text" placeholder="请输入联系方式" v-model="telphone" @input="phone_tel">
					</p>
				</li>
				<li class="inp_are">
					<p class="tit inp_are_txt"><i>*</i>告知详情</p>
					<p class="inp inp_p" style="font-size: 0.3rem!important">
						<textarea class="text_ar" placeholder="请输入告知详情" v-model="gz_detail" @input="detail_gz"></textarea>
					</p>
				</li>
			</ul>
			<!-- 其他信息 -->
			<ul class="news_box">
				<p class="title">其他信息</p>
				<li>
					<p class="tit"><i>*</i>管家是否联系</p>
					<p class="inp" style="display: flex;display: -webkit-flex;">
						<mt-radio
						align="left"
						title=""
						v-model="value"
						:options="options" @change="check">
						</mt-radio>
					</p>
				</li>
				<li>
					<p class="tit"><i style="visibility: hidden;">*</i>回复客户时间</p>
					<p class="inp" @click="openPicker">
						<span class="chel_tex" :style="hf_date=='请选择客户回复时间'?'color:#c8c8c8;':'color:#333;'">{{hf_date | formatDate}}</span>
					</p>
					<p class="jt"></p>
				</li>
				<li class="inp_are">
					<p class="tit inp_are_txt"><i style="visibility: hidden;">*</i>备注</p>
					<p class="inp inp_p" style="font-size: 0.3rem!important">
						<textarea class="text_ar" placeholder="请输入备注" v-model="tip_detail" @input="detail_tip"></textarea>
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
			<!-- 跟单人 -->
			<ul class="news_box img_tp_box" v-if="gdr_data.length>0">
				<p class="img_t"><i style="visibility: hidden;">*</i>跟单人</p>
				<ul class="img_list_box copy_person">
					<li v-for="item in gdr_data">
						<p class="head_img">
							<img src="../../resources/images/commission/head_img.png" alt="">	
						</p>
						<p class="copy_name">{{item.name}}</p>
					</li>
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
			<div class="btn_fq" @click="start_order">发起工单</div>
		</div>
		<!-- 选择框遮罩层 -->
		<div class="pop_picker_zzc" v-show="zzc_state">
			<div class="pop_picker">
				<div class="sel_picker">
					<p class="sel_qx" @click="sel_calc">取消</p>
					<p class="sel_qr" @click="sel_betrue">确认</p>
				</div>
				<mt-picker :slots="soltData" @change="onValuesChange" valueKey="zdh" v-if="zd_state"></mt-picker>
				<mt-picker :slots="soltData" @change="onValuesChange" valueKey="fybh" v-else-if="fy_state"></mt-picker>
				<mt-picker :slots="soltData" @change="onValuesChange" valueKey="fybh" v-else></mt-picker>
			</div>
		</div>
		<!-- 日期选择器 -->
		<mt-datetime-picker
		  ref="picker"
		  v-model="pickerVisible"
		  type="date"
		  :startDate = "startDate"
          :endDate = "endDate"
		  @confirm = "handleConfirm"
		  @cancel = "cancelbtn">
		</mt-datetime-picker>

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
	export default {
		data(){
			return{
				value:'',
				options: [{
					label: '是',
					value: '1',
				},
				{
					label: '否',
					value: '0',
				}],
				zzc_state: false,
				sel_solt: '',//选择项
				pickerVisible: '',//定义当前显示时间
				startDate: new Date(),//设置开始时间
				endDate: new Date('2088-01-01'),//设置结束时间
				handler:function(e){e.preventDefault()},//阻止默认
				hf_date: '请选择客户回复时间',
				seltype: '',//判断选择的是哪一项
				sel_value: '',//赋值
				fqsy_sel: "请选择发起事由",
				xqfsx_sel: "请选择需求方属性",
				jdly_sel: "请选择接单来源",
				gdjjqk_sel: "请选择工单紧急情况",
				list_lp: '',//楼盘列表
				lpname: '',//楼盘名称
				lp_id: '',//楼盘id
				lp_state: true,//显示状态
				zdxx_sel: {id:0,zdh:"请选择座栋"},//座栋
				zd_id: '',//座栋id
				fjxx_sel: {id:0,fybh:"请选择房间号"},// 房源信息
				fj_id: '',//房源id
				fy_state: false,//房间号状态
				zd_state: false,//座栋号状态
				gdr_data: [],//跟单人
				copy_data: [],//抄送人
				cs_person: [],//默认抄送人
				form_obj: {},//表单数据暂存
				client_name: '',//客户姓名
				telphone: '',//联系电话
				gz_detail: '',//告知详情
				tip_detail: '',//备注
				store_data: '',//表单回显数据暂存
				images: {
					localId: [], //图片列表
					serverId: [] //微信服务端图片id
				},
				count:0,//未删减图片数量
				imgArr: [],
			}
		},
		created() {
			this.images.localId = this.$store.state.arrImg;//获取图片
			this.copy_data = this.$store.state.copyData;//获取添加的抄送人
			this.get_cs_person();//默认抄送人
			if(JSON.parse(sessionStorage.getItem('form_obj'))){
				this.form_obj = JSON.parse(sessionStorage.getItem('form_obj'));
				this.lpname = this.form_obj.lpname;//楼盘
				this.lp_id = this.form_obj.lp_id;//楼盘id
				this.lp_state = this.form_obj.lp_state;//座栋
				this.zd_id = this.form_obj.zd_id;//座栋id
				this.zdxx_sel = this.form_obj.zdxx_sel;//座栋名
				this.zd_state = this.form_obj.zd_state;//座栋显示状态
				this.fjxx_sel = this.form_obj.fjxx_sel;//房源名
				this.fy_state = this.form_obj.fy_state;//房源显示状态
				this.fj_id = this.form_obj.fj_id;//房源id
				this.fqsy_sel = this.form_obj.fqsy_sel;//发起事由
				this.xqfsx_sel = this.form_obj.xqfsx_sel;//需求方属性
				this.jdly_sel = this.form_obj.jdly_sel;//接单来源
				this.gdjjqk_sel = this.form_obj.gdjjqk_sel;//工单紧急情况
				this.hf_date = this.form_obj.hf_date;//回复日期
				this.value = this.form_obj.value;//管家是否联系
				this.client_name = this.form_obj.client_name;//客户姓名
				this.telphone = this.form_obj.telphone;//联系电话
				this.gz_detail = this.form_obj.gz_detail;//告知详情
				this.tip_detail = this.form_obj.tip_detail;//备注
				this.get_gdr();//跟单人
			}
			
		},
		methods:{
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
			client(){//客户姓名
				this.form_obj.client_name = this.client_name;//暂存
			},
			phone_tel(){//联系方式
				this.form_obj.telphone = this.telphone;//暂存
			},
			detail_gz(){//告知详情
				this.form_obj.gz_detail = this.gz_detail;//暂存
			},
			detail_tip(){//备注
				this.form_obj.tip_detail = this.tip_detail;//暂存
			},
			onValuesChange(picker, values) {
				// picker.setSlotValue(1, values[0]);
				console.log(values);
				this.sel_value = values[0];
				if(this.seltype == "zdxx"){
					this.zd_id = this.sel_value.id;
					this.form_obj.zd_id = this.zd_id;//暂存
					this.get_gdr();//获取跟单人
				}
				if(this.seltype == "fjxx"){
					this.fj_id = this.sel_value.id;
					this.form_obj.fj_id = this.fj_id;//暂存
				}
			},
			add_copy(){//添加抄送人
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
// 					var arr = [{
// 								url: '123',
// 								type: '21',
// 								isdelete: 0,
// 								state: 1,
// 								endesc: ""
// 							}]
// 					this.$store.commit('save_img',arr);
// 					console.log(this.$store.state.arrImg);
					this.$router.push({
						path:'/gs_copy',//跳转到添加抄送人
						query:{
							laiyuan: '/gs_register',
						}
					})
				}else{
					sessionStorage.setItem("form_obj",JSON.stringify(this.form_obj));
					console.log(JSON.parse(sessionStorage.getItem('form_obj')));
					this.$router.push({
						path:'/gs_copy',//跳转到添加抄送人
						query:{
							laiyuan: '/gs_register',
						}
					})
				}
			},
			check(value){//管家是否联系1是0否
				this.value = value;
				this.form_obj.value = this.value;//暂存
				console.log(value);
			},
			// 解决iphone页面层级相互影响滑动的问题
			closeTouch:function(){
				document.getElementsByTagName("body")[0].addEventListener('touchmove',
				this.handler,{passive:false});//阻止默认事件
			},
			openTouch:function(){
				document.getElementsByTagName("body")[0].removeEventListener('touchmove',
				this.handler,{passive:false});//打开默认事件
			},
			sel_fqsy(){//请选择发起事由
				this.closeTouch();
				this.seltype = 'fysqsel';
				this.sel_solt = ['请选择发起事由', '工商注册', '工商备案', '工商迁址', '上传资料', '其他需求','咨询类服务','工商注册/备案/迁址'];
				this.zzc_state = true;
				$('.pop_picker').animate({bottom: 0},300);
			},
			sel_lp(item){//选择楼盘
				this.lpname = item.topic;
				this.lp_id = item.id;
				this.lp_state = false;
				this.form_obj.lpname = item.topic;//暂存
				this.form_obj.lp_state = this.lp_state;//暂存
				this.form_obj.lp_id = this.lp_id;//暂存
			},
			lp_stat(){//获取焦点
				this.lp_state = true;
			},
			sel_zd(){//选取座栋
				this.zd_state = true;
				if(this.lp_id == ''){
					MessageBox('提示', '请先输入楼盘信息');
					return;
				}
				const url = this.$api + "/yhcms/web/activitibusinessreg/getPedestal.do";
				axios.post(url,{
					"lpid": this.lp_id,//关键词搜索
				}).then((res)=>{
					this.zdxx_sel = res.data.data;
					this.seltype = 'zdxx';
					var str = {id:0,zdh:"请选择座栋"};
					this.zdxx_sel.unshift(str);
					this.sel_solt = this.zdxx_sel;
					this.zzc_state = true;
					$('.pop_picker').animate({bottom: 0},300);
				}, (err)=>{
					console.log(err);
				});
			},
			sel_fjxx(){//房源信息
				this.fy_state = true;
				if(this.zd_id == ''){
					MessageBox('提示', '请先选择座栋信息');
					return;
				}
				const url = this.$api + "/yhcms/web/activitibusinessreg/getHouse.do";
				axios.post(url,{
					"zdid": this.zd_id,//关键词搜索
				}).then((res)=>{
					this.fjxx_sel = res.data.data;
					this.seltype = 'fjxx';
					var str = {id:0,fybh:"请选择房间号"};
					this.fjxx_sel.unshift(str);
					this.sel_solt = this.fjxx_sel;
					this.zzc_state = true;
					$('.pop_picker').animate({bottom: 0},300);
				}, (err)=>{
					console.log(err);
				});
			},
			sel_xqfsx(){//请选择需求方属性
				this.closeTouch();
				this.seltype = 'xqfsxsel';
				this.sel_solt = ['请选择需求方属性','业主','租户'];
				this.zzc_state = true;
				$('.pop_picker').animate({bottom: 0},300);
			},
			sel_jdly(){//请选择接单来源
				this.closeTouch();
				this.seltype = 'jdlysel';
				this.sel_solt = ['请选择接单来源','APP扫码','400电话','渠道','内部','其他'];
				this.zzc_state = true;
				$('.pop_picker').animate({bottom: 0},300);
			},
			sel_gdjjqk(){//请选择工单紧急情况
				this.closeTouch();
				this.seltype = 'gdjjqksel';
				this.sel_solt = ['请选择工单紧急情况','常规','紧急','特急'];
				this.zzc_state = true;
				$('.pop_picker').animate({bottom: 0},300);
			},
			sel_calc(){//取消选择
				this.openTouch();
				if(this.seltype == "zdxx"){
					this.zdxx_sel = {id:0,zdh:"请选择座栋"};
				}
				if(this.seltype == "fjxx"){
					this.zdxx_sel = {id:0,fybh:"请选择房间号"};
				}
				this.zzc_state = false;
				$('.pop_picker').css("bottom","-5.2rem");
			},
			sel_betrue(){//确认选择
				this.openTouch();
				if(this.seltype == 'fysqsel'){
					this.fqsy_sel = this.sel_value;
					this.form_obj.fqsy_sel = this.fqsy_sel;//暂存
				}
				if(this.seltype == "xqfsxsel"){
					this.xqfsx_sel = this.sel_value;
					this.form_obj.xqfsx_sel = this.xqfsx_sel;//暂存
				}
				if(this.seltype == "jdlysel"){
					this.jdly_sel = this.sel_value;
					this.form_obj.jdly_sel = this.jdly_sel;//暂存
				}
				if(this.seltype == "gdjjqksel"){
					this.gdjjqk_sel = this.sel_value;
					this.form_obj.gdjjqk_sel = this.gdjjqk_sel;//暂存
				}
				if(this.seltype == "zdxx"){
					this.zdxx_sel = this.sel_value;
					this.zd_state = false;
					this.form_obj.zdxx_sel = this.zdxx_sel;//暂存
					this.form_obj.zd_state = this.zd_state;//暂存
				}
				if(this.seltype == "fjxx"){
					this.fjxx_sel = this.sel_value;
					this.fy_state = false;
					this.form_obj.fjxx_sel = this.fjxx_sel;//暂存
					this.form_obj.fy_state = this.fy_state;//暂存
				}
				this.zzc_state = false;
				$('.pop_picker').css("bottom","-5.2rem");
			},
			openPicker() {//回复日期选择
				this.closeTouch();
				this.$refs.picker.open();
			},
			cancelbtn(){//日期选择取消
				this.openTouch();
				console.log('取消');
				this.hf_date = '请选择客户回复时间';
			},
			handleConfirm(value){//日期选择确认
				this.openTouch();
				console.log(value);
				this.hf_date = value;
				this.form_obj.hf_date = value;//暂存
			},
			get_gdr(){//获取跟单人
				const url = this.$api + "/yhcms/web/activitibusinessreg/getFlowPer.do";
				axios.post(url,{
					"zdid": this.zd_id,//关键词搜索
					"type": 'gszc '//工单类型
				}).then((res)=>{
					this.gdr_data = res.data.data;
				}, (err)=>{
					console.log(err);
				});
			},
			get_cs_person(){//发起工单默认抄送人
				const url = this.$api + "/yhcms/web/activitibusinessreg/getFindSendPer.do";
				axios.post(url,{
					"type": 'gszc'//工单类型
				}).then((res)=>{
					// this.copy_data = res.data.data;
					let cs_person = [{"id":775,"name":"孙丽娟"}];
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
			see_flowimg(){//查看工单流程图
				const url = this.$api_lct + "/lswapi/processOpt/processImage.do?actKeyType=gszc";
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
			formatTen(num) { //时间
				return num > 9 ? (num + "") : ("0" + num); 
			},
			formatDate(date) { //时间转化年月日
				var year = date.getFullYear(); 
				var month = date.getMonth() + 1; 
				var day = date.getDate(); 
				var hour = date.getHours(); 
				var minute = date.getMinutes();
				var second = date.getSeconds(); 
				return year + "-" + this.formatTen(month) + "-" + this.formatTen(day); 
			},
			start_order(){//发起工单
				var _this = this;
				let csr_id = _this.copy_data.map((item, idx) => {
					return item.id
				});
				console.log(csr_id);
				console.log(_this.client_name);
				console.log(_this.telphone);
				console.log(_this.xqfsx_sel);
				let gdr_id = _this.gdr_data.map((item, idx) => {
					return item.id
				});
				console.log(gdr_id);//跟单人id
				console.log(_this.fj_id);
				console.log(_this.value);
				console.log(_this.gz_detail);
				console.log(_this.fqsy_sel);
				console.log(_this.gdjjqk_sel);
				console.log(_this.lp_id);
				console.log(_this.tip_detail);
				console.log(_this.jdly_sel);
				console.log(_this.zd_id);
				var d1 = new Date(_this.hf_date);
				_this.hf_date = _this.formatDate(d1);
				console.log(_this.hf_date);
				// return//测试时暂停提交
				const url = this.$api + "/yhcms/web/activitibusinessreg/saveBusReg.do";
				axios.post(url,{
					"cookie": JSON.parse(localStorage.getItem('cookxs')).sjs,//用户cookie
					"ActivitiBusinessReg":{
						"customername": _this.client_name,//客户姓名
						"customerphone": _this.telphone,//联系方式
						"demandattribute": _this.xqfsx_sel,//需求方属性
						"documentaryper": gdr_id.join(","),//跟单人
						"fyid": _this.fj_id,//房源ID
						"housekeepercontact": _this.value,//管家是否联系 1是0否
						"informingdetail": _this.gz_detail,//告知详情
						"initiatcause": _this.fqsy_sel,//发起事由
						"liststyle": _this.gdjjqk_sel,//工单紧急情况
						"lpid": _this.lp_id,//楼盘ID
						"remark": _this.tip_detail,//备注
						"singlesource": _this.jdly_sel,//接单来源
						"zdid": _this.zd_id,//'座栋ID
						"recoverytime": _this.hf_date,//回复时间
					},
					"pic": _this.images.localId,//图片地址
					"copyname": csr_id.join(","),//抄送人
				}).then((res)=>{
					console.log(res);
					alert(res.data.success);
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
				console.log(this.$store.state.copyData);
				console.log(this.copy_data);
			},
			
			
		},
		computed:{
			soltData(){
				let slots = [
				{
				  flex: 1,
				  values: this.sel_solt,
				  className: 'slot1',
				  textAlign: 'center',
				  defaultIndex:  1
				}
			  ];
			  return slots;
			},
			listLp(){//模糊查询渠道人员信息
				if(this.lpname != ''){
					const url = this.$api + "/yhcms/web/activitibusinessreg/getBuild.do";
					axios.post(url,{
						"search_keywork": this.lpname,//关键词搜索
					}).then((res)=>{
						this.list_lp = res.data.data;
					}, (err)=>{
						console.log(err);
					});
					return this.list_lp;
				}
			},
			
		},
		mounted(){
			var _this = this;
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
										"token": "18_rG4nHmXqMCT3Gzrz5fS9g7kZ7E-dWlrgIL2_pinsiEVu4FFJWjGaKiz7K5QmKzUwNM_MQYoSqCmitSTlHKnD5MYbihE9tofCdqYqgVAaUikQZixB0ivGrE_RFP5_a45zovmkTq6hvUEivzFDAHEbAAAOVS"
									}
								}).then((res) => {
									var pic1 = res.data.pic1.split(';').reverse();
									var arr = _this.images.localId.reverse();
									// var arr1 = _this.images.localId.reverse();
									for (var m = 0; m < pic1.length; m++) {
										// arr[m].url = _this.$prefix + '/' + pic1[m];
										// 工单提交时的图片格式
										arr[m].url = pic1[m];
										arr[m].type = 21;
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
			
			
		},
		filters: {
			formatDate(time) {//时间转换
				var currentdate = ''
				if(time == '请选择客户回复时间'){
					currentdate = '请选择客户回复时间';
					return currentdate;
				}
				var date = new Date(time);
				var seperator1 = "-";
				var year = date.getFullYear();
				var month = date.getMonth() + 1;
				var strDate = date.getDate();
				if (month >= 1 && month <= 9) {
					month = "0" + month;
				}
				if (strDate >= 0 && strDate <= 9) {
					strDate = "0" + strDate;
				}
				currentdate = year + seperator1 + month + seperator1 + strDate;
				return currentdate
			}
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
	background: #fff;
}
.news_box li{
	position: relative;
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
.box_list{
	position: absolute;
	z-index: 999;
	bottom: -5.1rem;
	width: 100%;
	height: 5rem;
	overflow: auto;
	background: #fff;
	span{
		display: block;
		height: 0.8rem;
		line-height: 0.8rem;
		margin-left: 0.3rem;
		border-bottom: 1px solid #e5e5e5;
	}
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
.admin_ion{
	position: absolute;
	right: 0;
	bottom: 0.07rem;
	display: block;
	width: 0.3rem;
	height: 0.3rem;
	background: url(../../resources/images/order_gd/admin_ion.png);
	background-size: 100% auto;
}
.copy_person li{
	width: 25%;
	height: auto;
	display: flex;
	display: -webkit-flex;
	flex-direction: column;
	-webkit-flex-direction: column;
	margin-right: 0!important;
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