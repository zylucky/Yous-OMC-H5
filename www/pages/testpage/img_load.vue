<template>
	<div class="big_box">
		<!-- 房源图 -->
		<div class="fy_img_box">
			<p class="fy_title">房源图</p>
			<ul class="box_img">
				<li v-for="(item,index) in images.localId" @click="see_img(item,index)" v-if="item.isdelete=='0'">
					<span v-show="fytqxzt" class="del_img" tag="fy" @click.stop="del_img(index, item.id, $event,item)"></span>
					<img :src="item.url" alt="">
				</li>
				<li class="btns" v-show="count<8">+</li>
			</ul>
		</div>
		<div class="fy_img_box">
			<p class="fy_title">户型图</p>
			<ul class="box_img">
				<li v-for='(item,index) in images2.localId' @click='see_img2(item,index)' v-if="item.isdelete=='0'">
					<span v-show="fytqxzt" class="del_img" tag="hx" @click.stop='del_img2(index, item.id, $event,item)'></span>
					<img :src="item.url" alt="">
				</li>
				<li class="btns2" v-show="count2<1">+</li>
			</ul>
		</div>
		<div class="fy_img_box">
			<p class="fy_title">封面图</p>
			<ul class="box_img">
				<li v-for='(item,index) in images3.localId' @click='see_img3(item,index)' v-if="item.isdelete=='0'">
					<span v-show="fytqxzt" class="del_img" tag="fm" @click.stop='del_img3(index, item.id, $event,item)'></span>
					<img :src="item.url" alt="">
				</li>
				<li class="btns3" v-show="count3<1">+</li>
			</ul>
		</div>
		<div class="upload_btn">保存</div>
	</div>
</template>

<script type="text/javascript">
	import axios from 'axios';
	import wx from 'weixin-js-sdk';
	import {
		MessageBox
	} from 'mint-ui';
	import {
		Toast
	} from 'mint-ui';
	import {
		Indicator
	} from 'mint-ui';
	export default {
		data() {
			return {
				images: {
					localId: [], //房源图片列表
					serverId: [] //微信服务端图片id
				},
				images2: {
					localId: [], //房源图片列表
					serverId: [] //微信服务端图片id
				},
				images3: {
					localId: [], //房源图片列表
					serverId: [] //微信服务端图片id
				},
				fy: 0,
				hx: 0,
				fm: 0,
				imglist: [], //房源图片列表
				gjList: [],
				hourse_id: '',
				fytqxzt: true, //删除权限控制
				count:0,//未删减房源图片数量
				count2:0,//未删减户型图片数量
				count3:0,//未删减封面图片数量
			}
		},
		created() {
			this.hourse_id = this.$route.query.house_id;
		},
		methods: {
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
			tebqqxpd() {
				let user22 = JSON.parse(localStorage.getItem('cookxs'));
				const url = this.$api + "/yhcms/web/wxqx/getXsQx.do";
				this.$http.post(url, {
					"cookie": user22.sjs,
					"fyid": this.$route.query.house_id,
					"foreEndType": 2,
					"code": "30000008"
				}).then((res) => {
					Indicator.close();
					const data = JSON.parse(res.bodyText).data;
					const meg = JSON.parse(res.bodyText).message;
					console.log(data);
					console.log(meg);
					if (data.qxzt == 0) {
						MessageBox('提示', meg);
						window.history.go(-1);
						return;
					}
					if (data.qxzt == 2) {
						MessageBox('提示', "此用户已被禁用，请联系管理员！");
						this.$router.push({
							path: '/login'
						});
					}
					//所有权限
					if (data.qxzt == 3 || data.qxzt == 4) {

					}
					if (data.qxzt == 5) {
						this.fytqxzt = false;
					}
				}, (res) => {
					Indicator.close()
				});
			},
			// 删除图片
			del_img(index, id, event, item) {
				const tag = $(event.target).attr("tag"),
					which = {
						"fy": "localId",
						"hx": "",
						"fm": ""
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
						// if(id != ''){
						this.images[which][index].isdelete = "1";
						var cout = 0;//统计未删除标识
						for(var i=0; i<this.images[which].length; i++){
							if(this.images[which][i].isdelete == '0'){
								cout += 1;
							}
						}
						this.count = cout;//还可以上传数量
						// }
					} else {
						console.log('取消删除')
					}
				})

			},
			del_img2(index, id, event, item) {
				const tag = $(event.target).attr("tag"),
					which = {
						"fy": "localId",
						"hx": "localId",
						"fm": "localId"
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
						// if(id != ''){
						this.images2[which][index].isdelete = "1";
						var cout = 0;//统计未删除标识
						for(var i=0; i<this.images2[which].length; i++){
							if(this.images2[which][i].isdelete == '0'){
								cout += 1;
							}
						}
						this.count2 = cout;//还可以上传数量
						// }
					} else {
						console.log('取消删除')
					}
				})

			},
			del_img3(index, id, event, item) {
				const tag = $(event.target).attr("tag"),
					which = {
						"fy": "localId",
						"hx": "localId",
						"fm": "localId"
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
						// if(id != ''){
						this.images3[which][index].isdelete = "1";
						var cout = 0;//统计未删除标识
						for(var i=0; i<this.images3[which].length; i++){
							if(this.images3[which][i].isdelete == '0'){
								cout += 1;
							}
						}
						this.count3 = cout;//还可以上传数量
						// }
					} else {
						console.log('取消删除')
					}
				})

			},
			// 预览图片
			see_img(item, index, event) {
				var _this = this;
				var url_img = []; //图片列表
				for (var i = 0; i < _this.images.localId.length; i++) {
					url_img.push(_this.images.localId[i].url);
				}
				wx.ready(function() {
					wx.previewImage({
						current: item.url,
						urls: url_img
					});
				});
			},
			see_img2(item, index, event) {
				var _this = this;
				var url_img = []; //图片列表
				for (var i = 0; i < _this.images2.localId.length; i++) {
					url_img.push(_this.images2.localId[i].url);
				}
				wx.ready(function() {
					wx.previewImage({
						current: item.url,
						urls: url_img
					});
				});
			},
			see_img3(item, index, event) {
				var _this = this;
				var url_img = []; //图片列表
				for (var i = 0; i < _this.images3.localId.length; i++) {
					url_img.push(_this.images3.localId[i].url);
				}
				wx.ready(function() {
					wx.previewImage({
						current: item.url,
						urls: url_img
					});
				});
			},
			getInitData() {
				Indicator.open({
					text: '',
					spinnerType: 'fading-circle'
				});
				const url = this.$api + "/yhcms/web/zdfyxx/getLpZdFyTp.do";
				let _this = this;
				this.$http.post(url, {
					"parameters": {
						"fyid": _this.hourse_id
					},
					"foreEndType": 2,
					"code": "300000059"
				}).then((res) => {
					Indicator.close()
					const data = JSON.parse(res.bodyText).data;
					_this.images.localId = data.b3; //房源图
					_this.images2.localId = data.b4; //户型图
					_this.images3.localId = data.b9; //封面图
					_this.gjList = data.b7;

					_this.fy = _this.images.localId.length; //房源图
					_this.hx = _this.images2.localId.length; //户型图
					_this.fm = _this.images3.localId.length; //封面图
					
					_this.count = _this.images.localId.length;//房源图数量控制
					_this.count2 = _this.images2.localId.length;//户型图数量控制
					_this.count3 = _this.images3.localId.length;//封面图数量控制

					for (var i = 0; i < _this.images.localId.length; i++) {
						_this.images.localId[i].url = _this.$prefix + '/' + _this.images.localId[i].url;
					}
					for (var j = 0; j < _this.images2.localId.length; j++) {
						_this.images2.localId[j].url = _this.$prefix + '/' + _this.images2.localId[j].url;
					}
					for (var k = 0; k < _this.images3.localId.length; k++) {
						_this.images3.localId[k].url = _this.$prefix + '/' + _this.images3.localId[k].url;
					}
				}, (res) => {
					Indicator.close()
				});
			},

		},
		mounted() {
			this.tebqqxpd();
			this.getInitData(); //获取房源图片信息
			this.wechat_share(); //授权签名方法调用
			var _this = this;
			wx.ready(function() {
				// 点击选择图片上传房源图片
				$('.btns').click(function() {
					var max = 8 - _this.count;
					wx.chooseImage({
						count: max, // 默认9
						sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
						success: function(res) {
							var localIds = res.localIds;
							// _this.images.localId = _this.images.localId.concat(res.localIds);
							// if(res.localIds.indexOf("wxlocalresource") != -1){
							//           res.localIds = res.localIds.replace("wxlocalresource", "wxLocalResource");
							//       }
							// alert('已选择 ' + res.localIds.length + ' 张图片');
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
												id: '',
												fyid: '',
												isdelete: '0',
												type: '',
												url: ''
											};
											fyobj.url = localData;
											_this.images.localId.push(fyobj);
										}
									});
								} else {
									var fyobj = {
										id: '',
										fyid: '',
										isdelete: '0',
										type: '',
										url: ''
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
										"token": "14_Hama5z5-Pp6mnBEm5lOfvG3JPyojSdJ-zXBg_UyZXUfQOZAxoKqHrVcp0XtHF8kCjuU_U7XGXKINu0zJgTCQUlt4gueqcbnzj4TJEW4w5dM6F6eLIwQrAM_W3XcJVGiAEARDO"
									}
								}).then((res) => {
									var pic1 = res.data.pic1.split(';').reverse();
									var arr = _this.images.localId.reverse();
									for (var m = 0; m < pic1.length; m++) {
										arr[m].url = _this.$prefix + '/' + pic1[m];
									}
									_this.images.localId = arr.reverse();
									var cout = 0;//统计未删除标识
									for(var m=0; m<_this.images.localId.length; m++){
										if(_this.images.localId[m].isdelete == '0'){
											cout += 1;
										}
									}
									_this.count = cout;//已有有效图片数量
									Indicator.close();
								}, (err) => {
									console.log(err);
								});
							}

						}
					});

				});
				// 点击选择图片上传户型图
				$('.btns2').click(function() {
					wx.chooseImage({
						count: 1, // 默认9
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
												id: '',
												fyid: '',
												isdelete: '0',
												type: '',
												url: ''
											};
											fyobj.url = localData;
											_this.images2.localId.push(fyobj);
										}
									});
								} else {
									var fyobj = {
										id: '',
										fyid: '',
										isdelete: '0',
										type: '',
										url: ''
									};
									fyobj.url = res.localIds[i];
									_this.images2.localId.push(fyobj);
								}
								// 上传到微信服务器
								wx.uploadImage({
									localId: res.localIds[i],
									isShowProgressTips: 0, // 默认为1，显示进度提示
									success: function(res) {
										i++;
										var media_id = res.serverId;
										_this.images2.serverId.push(res.serverId);
										if (i < length) {
											upload();
										}
										if (i == length && _this.images2.serverId.length != 0) {
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
										"pic1": "",
										"pic2": _this.images2.serverId.join(';').toString(),
										"pic3": "",
										"token": "14_Hama5z5-Pp6mnBEm5lOfvG3JPyojSdJ-zXBg_UyZXUfQOZAxoKqHrVcp0XtHF8kCjuU_U7XGXKINu0zJgTCQUlt4gueqcbnzj4TJEW4w5dM6F6eLIwQrAM_W3XcJVGiAEARDO"
									}
								}).then((res) => {
									var pic2 = res.data.pic2.split(';').reverse();
									var arr = _this.images2.localId.reverse();
									for (var m = 0; m < pic2.length; m++) {
										arr[m].url = _this.$prefix + '/' + pic2[m];
									}
									_this.images2.localId = arr.reverse();
									var cout = 0;//统计未删除标识
									for(var m=0; m<_this.images2.localId.length; m++){
										if(_this.images2.localId[m].isdelete == '0'){
											cout += 1;
										}
									}
									_this.count2 = cout;//已有有效图片数量
									Indicator.close();
								}, (err) => {
									console.log(err);
								});
							}

						}
					});
				});
				// 点击选择图片上传封面图
				$('.btns3').click(function() {
					wx.chooseImage({
						count: 1, // 默认9
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
												id: '',
												fyid: '',
												isdelete: '0',
												type: '',
												url: ''
											};
											fyobj.url = localData;
											_this.images3.localId.push(fyobj);
										}
									});
								} else {
									var fyobj = {
										id: '',
										fyid: '',
										isdelete: '0',
										type: '',
										url: ''
									};
									fyobj.url = res.localIds[i];
									_this.images3.localId.push(fyobj);
								}
								// 上传到微信服务器
								wx.uploadImage({
									localId: res.localIds[i],
									isShowProgressTips: 0, // 默认为1，显示进度提示
									success: function(res) {
										i++;
										var media_id = res.serverId;
										_this.images3.serverId.push(res.serverId);
										if (i < length) {
											upload();
										}
										if (i == length && _this.images3.serverId.length != 0) {
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
										"pic1": "",
										"pic2": "",
										"pic3": _this.images3.serverId.join(';').toString(),
										"token": "14_Hama5z5-Pp6mnBEm5lOfvG3JPyojSdJ-zXBg_UyZXUfQOZAxoKqHrVcp0XtHF8kCjuU_U7XGXKINu0zJgTCQUlt4gueqcbnzj4TJEW4w5dM6F6eLIwQrAM_W3XcJVGiAEARDO"
									}
								}).then((res) => {
									var pic3 = res.data.pic3.split(';').reverse();
									var arr = _this.images3.localId.reverse();
									for (var m = 0; m < pic3.length; m++) {
										arr[m].url = _this.$prefix + '/' + pic3[m];
									}
									_this.images3.localId = arr.reverse();
									var cout = 0;//统计未删除标识
									for(var m=0; m<_this.images3.localId.length; m++){
										if(_this.images3.localId[m].isdelete == '0'){
											cout += 1;
										}
									}
									_this.count3 = cout;//已有有效图片数量
									Indicator.close();
								}, (err) => {
									console.log(err);
								});
							}

						}
					});
				});




			});
			// 上传保存图片到自己的服务器
			$('.upload_btn').click(function() {
				if (_this.images.localId.length == 0 && _this.images2.localId.length == 0 && _this.images3.localId.length == 0) {
					alert('保存失败，请尝试再次点击保存！');
					return;
				}
				Indicator.open({
					text: '保存中...',
					spinnerType: 'fading-circle'
				});
				// 房源图片数据处理
				let fp = _this.images.localId.map((item, idx) => {
					return {
						"id": item.id,
						"isdelete": item.isdelete,
						"url": item.url.indexOf(_this.$prefix + '/') != -1 ? item.url.replace(_this.$prefix + '/', '') : item.url
					};
				});
				// 户型图片数据处理
				let hx = _this.images2.localId.map((item, idx) => {
					return {
						"id": item.id,
						"isdelete": item.isdelete,
						"url": item.url.indexOf(_this.$prefix + '/') != -1 ? item.url.replace(_this.$prefix + '/', '') : item.url
					};
				});
				// 封面图片数据处理
				let fm = _this.images3.localId.map((item, idx) => {
					return {
						"id": item.id,
						"isdelete": item.isdelete,
						"url": item.url.indexOf(_this.$prefix + '/') != -1 ? item.url.replace(_this.$prefix + '/', '') : item.url
					};
				});
				// 提交保存数据
				const data = {
					"parameters": {
						"fyid": _this.hourse_id,
						"fytp": fp,
						"hxt": hx,
						"gjt": _this.gjList,
						"fmtp": fm
					},
					"foreEndType": 2,
					"code": "300000082"
				};
				_this.$http.post(
					_this.$api + "/yhcms/web/zdfyxx/saveZdFyTp.do", data).then((res) => {
					Indicator.close();
					var result = JSON.parse(res.bodyText);
					if (result.success) {
						Toast({
							message: '保存成功',
							position: 'bottom',
							duration: 1000
						});
						setTimeout(function() {
							_this.$router.push({
								path: '/fang_detail', //跳转到审批页面
								query: {
									"house_id": _this.hourse_id, //所传参数
								}
							})
						}, 1000);

					} else {
						Toast({
							message: '保存失败: ' + result.message,
							position: 'bottom'
						});
					}
				}, (res) => {
					Indicator.close();
					Toast({
						message: '保存失败! 请稍候再试',
						position: 'bottom'
					});
				});


			});


		}

	}
</script>

<style scoped lang='less'>
	@import "../../resources/css/reset.css";
	@import "../../resources/css/base.less";

	.btns,
	.btns2,
	.btns3 {
		font-size: 0.6rem;
		text-align: center;
		line-height: 1.26rem;
		border: 1px solid #ccc;
		border-radius: 0.066667rem;
	}

	.box_img {
		width: 100%;
		margin: 0 auto 0;
		display: flex;
		flex-wrap: wrap;
	}

	.box_img li {
		position: relative;
		width: 1.26rem;
		height: 1.26rem;
		margin: 0 0 0.266667rem 0.2rem;
	}

	.box_img li img {
		width: 100%;
		height: 100%;
	}

	.upload_btn {
		width: 2.0rem;
		height: 0.8rem;
		line-height: 0.8rem;
		background: #16abdc;
		font-size: 0.32rem;
		color: #fff;
		text-align: center;
		margin: 0 auto 0.666667rem;
		border-radius: 0.133333rem;
	}

	.del_img {
		position: absolute;
		top: -0.16rem;
		right: -0.16rem;
		display: block;
		width: 0.346667rem;
		height: 0.346667rem;
		border: 1px solid #ccc;
		border-radius: 50%;
		text-align: center;
		line-height: 0.346667rem;
		background: #fff url(../../resources/images/close.png) no-repeat center;
		background-size: 50% auto;
	}

	.fy_img_box {
		margin-bottom: 0.8rem;
	}

	.box_img {
		min-height: 2.04rem;
		height: auto;
		background: #fff;
		padding: 0.4rem 0 0.133333rem 0;
	}

	.fy_title {
		height: 0.8rem;
		line-height: 0.8rem;
		font-size: 0.266667rem;
		padding-left: 0.266667rem;
	}

	.big_box {
		padding-bottom: 0.666667rem;
	}
</style>
