<style lang="less">
  @import "../resources/css/reset.less";
  @import "../resources/css/color.less";
  @import "../resources/css/base.less";
  @import "../resources/css/website/list.less";
  [header]{
    .mint-popup{
      width:100%;
      position: fixed;
      left:0;
      top:0;
    }
  }
.news{
  	position: relative;
  	margin-top: 0.2rem;
    display:block;
    width:0.43rem;
    height:0.4rem;
    float:right;
    margin-right:0.52rem;
    /*border: 1px solid #fff;*/
    img{
    	width: 100%;
    	vertical-align: inherit;
    }
    .newcount{
			position: absolute;
			top: -0.165rem;
			right: -0.2rem;
			width: 0.33rem;
			height: 0.33rem;
			text-align: center;
			background: url(../resources/images/news/point.png) no-repeat center;
			background-size: cover;
			line-height: 0.33rem;
			i{
				text-align: center;
				color: #fff;
			}
    }
  }
  .news:link{
  	background: url(../resources/images/news/new_ion.png) no-repeat center;
  	background-size: cover;
  }
  .news:active{
  	background: url(../resources/images/news/new_ion1.png) no-repeat center;
  	background-size: cover;
  }
  #header{
  	line-height: inherit;
  }
</style>
<template>
  <div header>
    <!--header start-->
    <header id="header" class="clearfix">
      <label class="side_nav side-nav" @click.native="popupVisible= true"  v-on:click="showMenu">
        <img src="../resources/images/ys_more.png" width="20" alt="">
      </label>
       <!--<a href="javascript:void(0);" class="detail-search">
          <input type="text" id="keyword" placeholder="请输入关键字搜索" value="" maxlength="50">
      </a>-->
      <a href="javascript:;" class="news" @click="tonews">
      	<span class="newcount" v-if="newData.length != 0"><i style="display: inline-block;transform: scale(0.5);">{{newData.length}}</i></span>
      	<!--<img src="../resources/images/news/new_ion.png"/>-->
      </a>
      <a href="javascript:;" class="detail-search" style="position: fixed;left: 0; top: 0">
        <input type="text" id="keyword" placeholder="请输入楼盘关键字搜索" v-model.trim="para.search_keywork" maxlength="50"
               @focus="changeRou">
      </a>
      <i class="location_icon"></i>
    </header>
    <mt-popup v-model="popupVisible" position="left" class="mint-popup-3" :modal="false">
      <!--左侧登录div-->
      <div class="main-nav-wrapper sidenav">
        <div class="user-box clearfix">
          <img class="portrait" src="../resources/images/user/por_icon.png" alt="">
          <div class="user_name tc mb20">{{username}}</div>
          <div class="ys_function tc">
            <!--<router-link :to="{path:'/list2'}" id="first_list_link">房源列表</router-link>
            <a href="javascript:;">房源信息采集</a>
            <a href="javascript:;">待办任务</a>-->

            <a href="javascript:;" @click="daikan_daka">带看打卡</a>
            <a href="javascript:;" @click="daikan_logs">带看记录</a>
            <a href="javascript:;" @click="yjgl">佣金管理</a>
            <a href="javascript:;" @click="yjsp">佣金确认</a>
            <a href="javascript:;" @click="yjsp1">佣金审批</a>
            <!--<a href="javascript:;" @click="daikan_total">带看统计</a>-->
            <a href="javascript:;" @click="modify_pwd">修改密码</a>
          </div>
        </div>
        <a href="javascript:;" class="log_out_btn" @click="login_out">退出登录</a>
      </div>
    </mt-popup>
  </div>
  <!--header end-->
</template>
<script type="text/babel">
	import axios from 'axios';
    import $ from 'jquery';
    import {Toast} from 'mint-ui';
    import {Indicator} from 'mint-ui';
  export default {
    data() {
      return {
        popupVisible: false,
          username:"",
          para: {
              "search_keywork": "",
          },
          userid:'',//用户id
          newData:[],//消息通知数据
      };
    },
    created(){
    	this.takeid();
    },
    methods: {
    	takeid(){//获取用户id
        var cookxs = JSON.parse(localStorage.getItem('cooknx'));
//      console.log(cookxs);
  //      const url = "http://116.62.68.26:8080/yhcms/web/qdyongjin/getLoginInfo.do";
        const url = this.$api + "/yhcms/web/qdyongjin/getLoginInfo.do";
        axios.post(url,{
          "cookie":cookxs,
          "ptype":1
             }).then((res)=>{
                if(res.data.success){
    //            console.log(res.data.data.userid)
                  this.userid = res.data.data.userid
                  this.takenews();
                }else{
                  return;
                }
              }, (err)=>{
          console.log(err);
              });
      },
      takenews(){//接收消息
        const url = "http://erp.youshikongjian.com/receiveMessage/"+ this.userid + "/sys/qd";//消息接口地
        axios.get(url, {
          
        }).then((res)=>{
  //        clearInterval(timer);//清楚定时器
          if(res.data.success){
            this.newData = res.data.data;
            console.log(this.newData);
  //          var timer = setTimeout(this.takenews,2000);//定时查询
          }       
              }, (err)=>{
          console.log(err);
              });
      },
      init(){
          this.para.search_keywork = this.$route.query.keyword;
      },
      changeRou: function () {
          this.$router.push({path: '/filter'})
      },
      showMenu() {
        this.popupVisible = true;
        var wwd = $("#section").width();
        if (!wwd) {
          wwd = $(".section").width();
        }
        var wgd = $(window).height() + 50;
        $("body").prepend('<div id="zhezhao"></div>');
        $("#zhezhao").css({
          width: "" + wwd + "px",
          height: "" + wgd + "px",
          "background-color": "#000",
          "z-index": "12",
          opacity: "0.5",
          position: "absolute",
          top: "0px",
          left: "0px"
        });

        $(".sidenav").css("left", "-100%");
        $(".sidenav").show();
        $("#zhezhao").animate({
          left: "75%"
        }, 150);
        $("#zhezhao").animate({
          backgroundColor: "#000000"
        }, 150);

        $(".sidenav").css({
          height:$(window).height()
        });

        $(".sidenav").animate({
          left: "0"
        }, 150, function () {
          $('html').css({'height': '100%', 'overflow': 'hidden'});
          $('body').css({'height': '100%', 'overflow': 'hidden'});
          $("#zhezhao").on("click",
            function () {
              $('.sidenav').animate({
                left: '-100%'
              }, 150, function () {
                $('.sidenav').hide();
              });
              $("#section").animate({
                left: '0'
              }, 150);
              $(".section").animate({
                left: '0'
              }, 150);
              this.popupVisible = false;
              $("#zhezhao").remove();
              $('html').css({'height': 'auto', 'overflow': 'auto'});
              $('body').css({'height': 'auto', 'overflow': 'auto'});
              $('html').removeAttr("style");
              $("body").removeAttr("style");

            }
          )
        });
        // $("#section").animate({
        //   left: "75%"
        // }, 150);
        // $(".section").animate({
        //   left: "75%"
        // }, 150);

      },
      modify_pwd(){
          $("#zhezhao").remove();
          $('html').removeAttr("style");
          $("body").removeAttr("style");
          this.$router.push({path:'/modify_pwd'});
      },
      daikan_daka(){//带看打卡
          $("#zhezhao").remove();
          $('html').removeAttr("style");
          $("body").removeAttr("style");
          this.$router.push({path:'/daikan'});
      },
      daikan_logs(){//带看记录
          $("#zhezhao").remove();
          $('html').removeAttr("style");
          $("body").removeAttr("style");
          this.$router.push({path:'/daikan_logs'});
      },
      daikan_total(){
          $("#zhezhao").remove();
          $('html').removeAttr("style");
          $("body").removeAttr("style");
          this.$router.push({path:'/daikan_total'});
      },
      yjgl(){//佣金管理
        $("#zhezhao").remove();
        $('html').removeAttr("style");
        $("body").removeAttr("style");
        this.$router.push({path:'/commission_list'});
      },
      yjsp(){//佣金确认
        $("#zhezhao").remove();
        $('html').removeAttr("style");
        $("body").removeAttr("style");
        this.$router.push({path:'/confirmed_list'});
      },
      yjsp1(){//佣金审批
        $("#zhezhao").remove();
        $('html').removeAttr("style");
        $("body").removeAttr("style");
        this.$router.push({path:'/commission_ask1'});
      },
      login_out(){
        $("#zhezhao").remove();
          const url = this.$api + "/yhcms/web/wxqx/getXsUser.do";
          const user22 = JSON.parse(localStorage.getItem('cookxs')).sjs;
          //console.log(user22);
          let that = this;
          this.$http.post(url,{ "cookie":user22,"foreEndType":2,"code":"300000086"}).then((res)=>{
              Indicator.close()
              const data = JSON.parse(res.bodyText).success;
              if(data){
                  $('html').removeAttr("style");
                  $("body").removeAttr("style");
                  localStorage.removeItem('cookxs');
                  localStorage.removeItem('loginxs');
                  this.$router.push({path:'/login'});
              }else{
                  Toast({
                      message: '系统异常，请稍后再试!',
                      position: 'middle',
                      duration: 3000
                  });
              }
          }, (res)=>{
              Indicator.close()
          });
      },
      tonews(){
      	if(localStorage.getItem('cooknx')){
	      	this.$router.push({
						path:'/news',//跳转到消息列表
					})
      	}else{
      		this.$router.push({path:'/login'});
          return;
      	}
      }
    },
    mounted: function () {
      this.init();
      let username = JSON.parse(localStorage.getItem('userxs'));
      this.username = username;
      var _this = this;
      $('#first_list_link').click(function(){
        $("#zhezhao").remove();
      });
    }
  };
</script>
