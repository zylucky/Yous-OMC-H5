<template>
	<div class="big_box">
		<ul class="box_img">
			<li v-for='(item,index) in images.localId' @click='see_img(item,index)' v-if="item.isdelete==0">
				<span class="del_img" tag="fy" @click.stop='del_img(index, item.id, $event)'></span>
				<img :src="item.url" alt="">
			</li>
			<li class="btns">+</li>
		</ul>
		<div class="upload_btn">保存</div>
	</div>
</template>

<script type="text/javascript">
	import axios from 'axios';
	import wx from 'weixin-js-sdk';
	import { MessageBox } from 'mint-ui';
	import {Toast} from 'mint-ui';
  	import {Indicator} from 'mint-ui';
	export default {
		data(){
			return{
				images: {
			        localId: [],//房源图片列表
			        serverId: []//微信服务端图片id
			    },
			    fy: 0,
		        hx: 0,
		        fm: 0,
		        imglist:[],//房源图片列表
			}
		},
		methods: {
			wechat_share(){//微信授权获取配置信息
		      	const url = "http://omc.urskongjian.com/yhcms/web/weixin/shareYskj.do";
		      	var url_share = window.location.href;
		      	url_share = url_share.split('#')[0];
				axios.post(url,{
					"url":url_share
			     }).then((res)=>{
			        let we_cs = res.data;
			        console.log(we_cs);	          
					//微信签名调取
					wx.config({
				      debug: false, // 开启调试模式
				      appId: we_cs.appId, // 必填，公众号的唯一标识
				      timestamp: we_cs.timestamp, // 必填，生成签名的时间戳
				      nonceStr: we_cs.nonceStr, // 必填，生成签名的随机串
				      signature: we_cs.signature, // 必填，签名
				      jsApiList: ["chooseImage", "previewImage", "uploadImage", "downloadImage","getLocalImgData"]
					});
							
			      }, (err)=>{
					console.log(err);
			      });
		      },
		      // 删除图片
		      del_img(index, id, event){
		      	const tag = $(event.target).attr("tag"), which = {"fy":"localId", "hx":"hxList", "fm":"fmList"}[tag];
		      	MessageBox({
				  title: '提示',
				  message: '请确认是否删除?',
				  showCancelButton: true,
				  confirmButtonText:"确认删除",
          		  cancelButtonText:"取消删除"
				}).then(action => {
		          if(action == 'confirm'){
		            console.log('确认删除')
					if(id != ''){
			            this.images[which][index].isdelete = "1";
			        }
		          }else{
		            console.log('取消删除')
		          }
			    })

		      },
		      // 预览图片
		      see_img(item,index){
		      	var _this = this;
		      	var url_img = [];//图片列表
		      	for (var i = 0; i < _this.images.localId.length; i++) {
		      		url_img.push(_this.images.localId[i].url);
		      	}
		      	wx.ready(function(){
		      		wx.previewImage({
				    	current: item.url,
					    urls: url_img
					});
		      	});
		      },
		      getInitData(){
		          // const fyid = this.$route.params.fyid;
		          // this.fyid = fyid;
		          Indicator.open({
		             text: '',
		             spinnerType: 'fading-circle'
		          });
		          const url = this.$api + "/yhcms/web/zdfyxx/getLpZdFyTp.do";
		          let that = this;
		          this.$http.post(url, {"parameters":{"fyid":'51562'},"foreEndType":2,"code":"300000059"}).then((res)=>{
		            Indicator.close()
		            const data = JSON.parse(res.bodyText).data;
		            // that.imgList = data.b3;
		            that.images.localId = data.b3;
		            that.imglist = data.b3;//房源列表
		            for (var i = 0; i < that.images.localId.length; i++) {
		            	that.images.localId[i].url = that.$prefix + '/' + that.images.localId[i].url;
		            }
		            console.log(data);
		          }, (res)=>{
		            Indicator.close()
		          });
		      },

		},
		mounted(){
			this.getInitData();//获取房源图片信息
			this.wechat_share();//授权签名方法调用
			var _this = this;
			wx.ready(function(){  
			  // 点击选择图片
			  $('.btns').click(function() {
			  	wx.chooseImage({
			  	  count: 9, // 默认9
		          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
		          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
			      success: function (res) {
			      	var localIds = res.localIds;
			        // _this.images.localId = _this.images.localId.concat(res.localIds);
			        // if(res.localIds.indexOf("wxlocalresource") != -1){
	          //           res.localIds = res.localIds.replace("wxlocalresource", "wxLocalResource");
	          //       }
			        alert('已选择 ' + res.localIds.length + ' 张图片');
			        // 上传预览方法
			        var i = 0, length = res.localIds.length;
			        function upload() {
			        	if (window.__wxjs_is_wkwebview){
                        	// ios端缩略图预览方法（兼容）
                            wx.getLocalImgData({
                                localId:res.localIds[i],
                                success: function (res){
                                    var localData = res.localData; // localData是图片的base64数据，可以用img标签显示
                                    localData = localData.replace('jgp', 'jpeg');//iOS 系统里面得到的数据，类型为 image/jgp,因此需要替换一下
                                    var fyobj = {id:'',fyid:'',isdelete:'0',type:'',url:''};
									fyobj.url = localData;
                                    _this.images.localId.push(fyobj);
                                }
                            });
	                    }else{
	                    	var fyobj = {id:'',fyid:'',isdelete:'0',type:'',url:''};
							fyobj.url = res.localIds[i];
	                    	_this.images.localId.push(fyobj);
	                    }
	                    // 上传到微信服务器
	                    wx.uploadImage({
	                        localId: res.localIds[i],
	                        isShowProgressTips: 0, // 默认为1，显示进度提示
	                        success: function (res) {
	                            i++;
	                            var media_id = res.serverId;
	                            _this.images.serverId.push(res.serverId);
	                            if (i < length) {
	                                upload();
	                            }
	                            if(i == length && _this.images.serverId.length !=0){
				                	alert(123);
			                    	setTimeout(function(){
			                    		img_back();
			                    	},300);
			                    }
	                        },
	                        fail: function (res) {
	                            alert(JSON.stringify(res));
	                        }
	                    });

	                }
	                upload();
	                // 从后台服务器返回

	                function img_back(){
	                	alert(_this.images.serverId.length);
					    axios.post(_this.$api + '/yhcms/web/jcsj/uploadWxPic.do',{
							"parameters": {
								"pic1": _this.images.serverId.join(';').toString(),
								"pic2": "",
								"pic3": "",
								"token": "14_m_Ez1WQPWm1YnTE_GG2BV9o4p8XfL6tutH0ibcNYy08iajF92OAjmLF_xDDJdlIq8SqCkHY8RKix_hkAgN8acS6SGl0pa07LUiOJkZ-DSJUdOCzWg8oPAG8nMIPypb24L_1IZxctaxC3P1pMQPCjAGAUTG"
							}
					    }).then((res)=>{
					    	var pic1 = res.data.pic1.split(';');
					    	var arr = _this.images.localId.reverse();
					    	for(var m=0; m<pic1.length; m++){
					    		arr[m].url = _this.$prefix + '/' +pic1[m];
					    	}
					    	_this.images.localId = arr.reverse();
					    	// for (var i = 0; i < pic1.length; i++) {
					    	// 	var fyobj = {id:'',fyid:'',isdelete:'0',type:'',url:''};
					    	// 	fyobj.url = pic1[i];
					    	// 	_this.imglist.push(fyobj);
					    	// }
					    	// alert(JSON.stringify(_this.imglist));
					    	// alert(_this.imglist.length);
					    }, (err)=>{
							console.log(err);
					    });
	                }

			      }
			    });

			  });


			});
			// 上传保存图片到自己的服务器
		    $('.upload_btn').click(function() {
		        // Indicator.open({
		        //   text: '保存中...',
		        //   spinnerType: 'fading-circle'
		        // });
		        let fp = _this.images.localId.map((item, idx)=>{
		            return {"id": item.id, "isdelete": item.isdelete, "url": item.url};
		        });

		        console.log(fp)
		        // alert(JSON.stringify(fp));
		        alert(JSON.stringify(_this.images.localId));
		        alert(JSON.stringify(_this.images.localId.length));
		        alert(JSON.stringify(_this.imglist));
		        // const data = {"parameters":{"fyid":this.fyid,"fytp":fp,"hxt":hx,"gjt":this.gjList,"fmtp":fm},"foreEndType":2,"code":"300000082"};
		        // this.$http.post(
		        //    this.$api + "/yhcms/web/zdfyxx/saveZdFyTp.do", data).then((res)=>{
		        //   Indicator.close();
		        //   var result = JSON.parse(res.bodyText);
		        //   if (result.success) {
		        //     Toast({
		        //         message: '保存成功',
		        //         position: 'bottom',
		        //         duration: 1000
		        //     });
		        //     let link = '/fang_detail?house_id=';
		        //     if(this.fyid){
		        //         link += this.fyid;
		        //     }
		        //     /*if(this.zdid){
		        //         link += '/' + this.zdid;
		        //     }*/
		        //     setTimeout(function(){
		        //         that.$router.push({path:link});
		        //     },1000);
		        //   } else {
		        //     Toast({
		        //         message: '保存失败: ' + result.message,
		        //         position: 'bottom'
		        //     });
		        //   }
		        // },(res)=>{
		        //   Indicator.close();
		        //   Toast({
		        //       message: '保存失败! 请稍候再试',
		        //       position: 'bottom'
		        //   });
		        // });
		    });


		}

	}
</script>

<style scoped lang='less'>
	@import "../../resources/css/reset.css";
  	@import "../../resources/css/base.less";
	.btns{
		font-size: 0.6rem;
		text-align: center;
		line-height: 1.26rem;
		border: 1px solid #000;
	}
	.box_img{
		width: 7.3rem;
		margin: 0 auto 0;
		margin-top: 0.133333rem;
		display: flex;
		flex-wrap: wrap;
	}
	.box_img li{
		position: relative;
		width: 1.26rem;
		height: 1.26rem;
		border: 1px solid red;
		margin: 0 0 0.133333rem 0.17rem;
	}
	.box_img li img{
		width: 100%;
		height: 100%;
	}
	.upload_btn{
		width: 2.0rem;
		height: 0.8rem;
		line-height: 0.8rem;
		background: blue;
		font-size: 0.32rem;
		color: #fff;
		text-align: center;
		margin: 0 auto 0;
		border-radius: 0.133333rem;
	}
	.del_img{
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
</style>