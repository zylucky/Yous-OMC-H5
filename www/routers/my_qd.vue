<style scoped lang='less'>
	@import "../resources/css/reset.css";
  	@import "../resources/css/base.less";
  	.loading-background, .mint-loadmore-top span {
	    -webkit-transition: .2s linear;
	    transition: .2s linear;
	}
	.mint-loadmore-top span {
	    display: inline-block;
	    vertical-align: middle;
	}
	
	.mint-loadmore-top span.is-rotate {
	    -webkit-transform: rotate(180deg);
	    transform: rotate(180deg);
	}
	
	.page-loadmore .mint-spinner {
	    display: inline-block;
	    vertical-align: middle;
	}
	
	.page-loadmore-desc {
	    text-align: center;
	    color: #666;
	    padding-bottom: 5px;
	}
	
	.page-loadmore-desc:last-of-type,
	.page-loadmore-listitem {
	    border-bottom: 1px solid #eee;
	}
	
	.page-loadmore-listitem {
	    height: 50px;
	    line-height: 50px;
	    text-align: left;
	}
	
	.page-loadmore-listitem:first-child {
	    border-top: 1px solid #eee;
	}
	
	.page-loadmore-listitem:last-child {
	    border-bottom: none; 
	}

	.page-loadmore-wrapper {
	    overflow: scroll;
	}
	
	.mint-loadmore-bottom span {
	    display: inline-block;
	    -webkit-transition: .2s linear;
	    transition: .2s linear;
	    vertical-align: middle;
	}
	
	.mint-loadmore-bottom span.is-rotate {
	    -webkit-transform: rotate(180deg);
	    transform: rotate(180deg);
	}
	.sousuo{border-top: 1px solid #e5e5e5;border-bottom: 1px solid #e5e5e5;position: fixed;top: 0rem;height:0.88rem;width: 100%;background-color: #f2f2f2;display: flex;align-items: center;justify-content: center;z-index: 20;}
	.sousuo span{border: 1px solid #e8e8ea;display: flex;width: 4.8rem;height: 0.64rem;background-color: #e8e8ea;border-radius: 5px;align-items: center;}
	.suoysouico{width: 0.3rem;height: 0.3rem;margin-left:0.17rem;background: url(../resources/images/my_qd/sousuo.png) no-repeat center;background-size: 100% auto;}
	.suousokong{margin-left: 0.14rem;width: 4.18rem;font-size: 0.24rem;color: #999999;}
	.list{}
	.yaoqiyi{position: relative;width: 100%;height: 1.08rem;background-color: #ffffff;text-align: center;line-height: 1.08rem;}
	.yaoqiyi::after{content:"";display: block;position: absolute;bottom:0;left:0;width:100%;height:1px;border-bottom: 1px solid #e5e5e5;transform: scaleY(0.5);}
	.zitiyanse{font-size: 0.3rem;}
	.suoysoubail{background-color: #FFFFFF;}
	.listysms{border-bottom: 1px solid #e5e5e5;border-top: 0px solid #e5e5e5 !important;height: 1.85rem;margin-left: 0.3rem;display: flex;align-items: center;}
	.page-loadmore-listitem[data-v-79a17da2]{line-height: 50px;text-align:left;}
	.listysms span{display: inline-block;}
	.douxiang{width:0.86rem;height:0.86rem;}
	.douxiang img{border-radius: 50%;}
	.zhogmjianbufe{margin-left: 0.24rem;width: 5.06rem;height: 1.1rem;}
	.dadianhua{width: 0.71rem;height: 0.71rem;border-radius: 50%;background: url(../resources/images/my_qd/phone.png) no-repeat center;background-size: 40% auto;background-color: #cfe9ff;}
	.zhogmjianbufe p{line-height: 0.3rem;}
	.xingming{display: inline-block;font-size: 0.3rem;}
	.pboewid{display: inline-block;margin-left:0.3rem;width: 1.94rem;font-size: 0.3rem;}
	.beijign{margin-top: 0.15rem;line-height: 0.26rem;font-size:0.26rem;color: #666666;}
	.zhcue{margin-top: 0.15rem;line-height: 0.26rem;}
	.zhcue i{font-size: 0.26rem;color: #999999;}
	.blankdis{display: none;}
	.balk{position: absolute;top: 1.08rem;bottom: 0rem;left: 0rem;right: 0rem;background-color: #ffffff;}
	.wode_blank{
		height: 2.746666rem;
		margin-top: 1.773333rem;
		text-align: center;
		background: url(../resources/images/my_qd/balnk.png) no-repeat center;
		background-size: auto 100%;
	}
	.wode_blank_wenzi{
		font-size: 0.4rem;
		margin-top: 0.4rem;
		text-align: center;
		color: #999999;
	}
	.wode_blank_wenzi p:first-child{
		font-size: 0.3rem;
		color: #999999;
		margin-bottom: 0.15rem;
	}
	.wode_blank_wenzi p:last-child{
		font-size: 0.24rem;
		color: #cccccc;
	}
	.invite_btn{
		width: 2.65rem;
		height: 0.73rem;
		margin: 0.3rem auto 0;
		line-height: 0.73rem;
		border-radius: 0.08rem;
		background: url(../resources/images/commission/btn_bg.png) no-repeat center;
		background-size: 100% 100%;
		font-size: 0.32rem;
		color: #fff;
		text-align: center;
		overflow: hidden;
	}
	.box_con{
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0.88rem;
		background: #fff;
		overflow: hidden;
	}
	.contents{
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 1.2rem;
		overflow: auto;
	}
	.btn_invite_box{
		display: flex;
		display: -webkit-flex;
	    align-items: center;
	    -webkit-align-items: center;
	    justify-content: center;
	    -webkit-justify-content: center;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 1.2rem;
		background: #ffffff;
	}
	.btn_invite_box::after{
		content:"";
		display: block;
		position: absolute;
		top:-1px;
		left:0;
		width:100%;
		height:1px;
		border-bottom: 1px solid #e5e5e5;
		transform: scaleY(0.5);
	}
	.btn_sty::after{
		display: none;
	}
	.btn_invite{
		width: 6.9rem;
		height: 0.88rem;
		line-height: 0.88rem;
		border-radius: 0.04rem;
		background: url(../resources/images/commission/btn_bg.png) no-repeat center;
		background-size: 100%;
		font-size: 0.32rem;
		color: #fff;
		text-align: center;
	}
</style>

<template>
	<div class="">
		<div>
			<div class="sousuo">
				<span class="" @click="sousuotianzhuan">
					<i class="suoysouico"></i>
					<i class="suousokong" v-text="wenjian"></i>
				</span>
			</div>
			<!-- 更改块1 -->
			<div class="box_con">
				<!-- 主体 -->
				<div class="contents">
					<div class="page-loadmore list">
				  		<div class="yaoqiyi">
				  			<span class="zitiyanse">我的邀请码：</span>
				  			<span class="zitiyanse" v-text="yaqma"></span>
				  		</div>
				      	<div class="balk blankdis">
							<div class="wode_gj">
								<div class="wode_blank"></div>
								<div class="wode_blank_wenzi">
									<p>暂无渠道</p>
									<p>您还没有邀请过渠道哦</p>
								</div>
								<div class="invite_btn" @click="to_invite1">立即邀请</div>
							</div>
						</div>
				      	<mt-loadmore :top-method="loadTop" @translate-change="translateChange" @top-status-change="handleTopChange"       :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore" class="blankdis balkneor">
					        <ul class="page-loadmore-list suoysoubail">
					          <!--<li v-for="item in list" class="page-loadmore-listitem">{{ item }}</li>-->
					          <li v-for="item in list" class="page-loadmore-listitem listysms">
					          	<span class="douxiang">
					          		<img :src="item.wximg" width="100%" height="100%"/>
					          	</span>
					          	<span class="zhogmjianbufe">
					          		<p>
					          			<i class="xingming">{{item.name}}</i>
					          			<i class="pboewid">{{item.phone}}</i>
					          		</p>
					          		<p class="beijign">{{item.gsname}}</p>
					          		<p class="zhcue">
					          			<i>注册时间：</i>
					          			<i>{{item.createTime}}</i>
					          		</p>
					          	</span>
					          	<a :href="'tel:'+item.phone" class="dadianhua"></a>
					          </li>
					        </ul>
				      	</mt-loadmore>
				  	</div>
				</div>
				<!-- 底部按钮 -->
				<div class="btn_invite_box" v-if="btn_show">
					<div class="btn_invite" @click="to_invite">立即邀请</div>
				</div>
				<div class="btn_invite_box btn_sty" v-if="!btn_show"></div>
			</div>
		  	
		</div>
	</div>
</template>

<script>
  import {Indicator} from 'mint-ui';
  import {Toast} from 'mint-ui';
  
  export default {
    data() {
      return {
        list: [],
        allLoaded: false,

        bottomStatus: '',
        wrapperHeight: 0,

        topStatus: '',
        //wrapperHeight: 0,
        translate: 0,
        moveTranslate: 0,
        page:1,
        yaqma:'',
		wenjian:'请输入姓名或公司名称',
		search_keywork:'',
		status:1,
		btn_show: true,
      };
    },

    methods: {
	  init(){
  	    const user22 = JSON.parse(localStorage.getItem('cookxs'));
	  	this.$http.post(this.$api + "/yhcms/web/wxqx/getChannelInfo.do",{"cookie":user22.sjs,"curr_page":1,"items_perpage":10,"search_keywork":''}).then((res)=>{
	          Indicator.close();
	          var result = JSON.parse(res.bodyText);
	          if(result.success){
	          	if(result.data.length == 0){
	          		this.status = 3;
	          		this.btn_show = false;
					$('.balk').removeClass('blankdis');
	          	}else{
	          		$('.balkneor').removeClass('blankdis');
	          	}
	          	//执行这个代码会默认下拉一次
//				this.$refs.loadmore.onBottomLoaded();
	          }else{
	          }
	      }, (res)=>{
	          Indicator.close();
	      });
	  },
      handleBottomChange(status) {
        this.bottomStatus = status;
      },

      loadBottom() {
        setTimeout(() => {
//        上拉加载更多数据！
          const user22 = JSON.parse(localStorage.getItem('cookxs'));
          if(this.status == 1){
	    	  this.$http.post(this.$api + "/yhcms/web/wxqx/getChannelInfo.do",{"cookie":user22.sjs,"curr_page":this.page,"items_perpage":10,"search_keywork":this.search_keywork}).then((res)=>{
	              Indicator.close();
	              var result = JSON.parse(res.bodyText);
	              if(result.success){
	              	if(this.page == 2 && result.data.length<10){
	              		this.status = 2;
	              	}
	              	if(result.data.length == 0){
	              		if(this.status == 3){
	              			
	              		}else{
	              			Toast({
		                      message: '没有更多数据！',
		                      position: 'bottom'
		                	});
	              		}
	              		
	              	}else{
	              		this.status = 1;
	              		for(var i=0;i<result.data.length;i++){
	              			if(result.data[i].gsname == ''){
	              				result.data[i].gsname = '未知公司';
	              			}
	              		}
	              		this.list = this.list.concat(result.data);
	              		console.log(this.list);
	              		this.page = this.page + 1;
	              	}
					this.$refs.loadmore.onBottomLoaded();
	              }else{
	                  Toast({
	                      message: result.message,
	                      position: 'bottom'
	                  });
	              }
	          }, (res)=>{
	              Indicator.close();
	          });
          	
          }else{
			document.body.scrollTop = -100;
//			this.$refs.loadmore.onBottomLoaded();
          }
//        let lastValue = this.list[this.list.length - 1];
//        if (lastValue < 40) {
//          for (let i = 1; i <= 10; i++) {
//            this.list.push(lastValue + i);
//          }
//        } else {
//          this.allLoaded = true;
//        }
        }, 0);
      },


      handleTopChange(status) {
        this.moveTranslate = 1;
        this.topStatus = status;
      },
      translateChange(translate) {
        const translateNum = +translate;
        this.translate = translateNum.toFixed(2);
        this.moveTranslate = (1 + translateNum / 70).toFixed(2);
      },
      
      loadTop() {
        setTimeout(() => {
			//下拉刷新
		  const user22 = JSON.parse(localStorage.getItem('cookxs'));
    	  this.$http.post(this.$api + "/yhcms/web/wxqx/getChannelInfo.do",{"cookie":user22.sjs,"curr_page":1,"items_perpage":10,"search_keywork":this.search_keywork}).then((res)=>{
              Indicator.close();
              var result = JSON.parse(res.bodyText);
              if(result.success){
              	this.page = 2;
              	this.status = 1;
              	this.list = [];
                this.list = result.data;
              }else{
                  Toast({
                      message: result.message,
                      position: 'bottom'
                  });
              }
          }, (res)=>{
              Indicator.close();
          });
//        let firstValue = this.list[0];
//        for (let i = 1; i <= 10; i++) {
//          this.list.unshift(firstValue - i);
//        }
          this.$refs.loadmore.onTopLoaded();
          this.$refs.loadmore.onBottomLoaded();
        }, 1000);
      },
      sousuotianzhuan(){
      	var _this = this;
//    	_this.$router.push({path:'/zuodong_list/'+_this.lpid});
		if(this.wenjian == '请输入姓名或公司名称'){
      		_this.$router.push({path:'/my_suosuo/'});
		}else{
			_this.$router.push({
				path:'/my_suosuo',//跳转数据修改填写
				query:{
					"lisconte":this.wenjian,//所传参数
				}
			})
		}

      },
      to_invite(){//立即邀请
      	var _this = this;
      	_this.$router.push({
			path:'/invite',//跳转数据修改填写
			query:{
				invitecode: _this.yaqma
			}
		})
      },
	  to_invite1(){//立即邀请
	  	var _this = this;
	  	_this.$router.push({
	  			path:'/invite',//跳转数据修改填写
	  			query:{
	  				invitecode: _this.yaqma
	  			}
	  		})
	  },
    
},

    created() {
//    for (let i = 1; i <= 10; i++) {
//      this.list.push(i);
//    }
		
		
		if(this.$route.query.sscontent){
			if(this.$route.query.sscontent != ''){
				this.wenjian = this.$route.query.sscontent;
				this.search_keywork = this.$route.query.sscontent;
			}
		}
    },

    mounted() {
    	this.init();
//		$('.suoysoubail').animate({scrollTop:0},2);
//		alert(document.body.scrollTop);
//		$('.yaoqiyi').animate({scrollTop:0},2);
setTimeout(function(){
	document.body.scrollTop = -100;	
},500)
    	const user22 = JSON.parse(localStorage.getItem('cookxs'));
		this.$http.post(this.$api + "/yhcms/web/wxqx/getSaleNum.do",{"cookie":user22.sjs}).then((res)=>{
	        Indicator.close();
	        var result = JSON.parse(res.bodyText);
	        if(result.success){
	          	this.yaqma = result.saleNum;
	        }else{
	            Toast({
	                message: result.message,
	                position: 'bottom'
	            });
	        }
	      }, (res)=>{
	          Indicator.close();
	      });
//    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    }
  };
</script>