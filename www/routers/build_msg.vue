<style scoped lang="less">
  @import "../resources/css/reset.css";
  @import "../resources/css/base.less";

  .page-infinite-loading {
    text-align: center;
    background-color: #FFF;
    & > span {
      display: inline-block;
    }
  }


</style>
<template>
  <div class="all_elements">
    <div class="build_top">
      <ul class="ys_item_ul mb60">
        <li class="clearfix">
          <span class="ys_tit">楼盘名称：</span>
          <div class="ys_item_con fl" v-text="topic"></div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">楼盘地址：</span>
          <div class="ys_item_con ellip fl" v-text="address"></div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">特色标签：</span>
          <div class="ys_item_con fl"><a href="javascript:;" class="cl_link">请选择标签</a></div>
        </li>
        <li class="clearfix bg_gray">
          <div class="ys_item_con fl" @click="selectTag($event)">
            <span class="ys_tag">地铁附近1</span>
            <span class="ys_tag">地铁附近2</span>
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">开发商：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-text="kfsh" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">开盘日期：</span>
          <div class="ys_item_con fl">
            <input type="text" value=""
                   readonly
                   placeholder="请选择日期"
                   v-model="kprq"
                   @click="openPicker()">
            <i class="calendar_icon" @click="openPicker()"></i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">楼盘级别：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="pickerLevel" readonly placeholder="请选择" @click="openLevel">
            <i class="right_arrow" @click="openLevel">&gt;</i>
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">产权性质：</span>
          <div class="ys_item_con fl"><a href="javascript:;" class="cl_link">请选择标签</a></div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">特色标签：</span>
          <div class="ys_item_con fl w570">
            <div class="check_wrap clearfix">
              <label class="fl"><input type="checkbox" value="" name="">写字楼</label>
            </div>
            <div class="check_wrap clearfix">
              <label class="fl"><input type="checkbox" value="" name="">公寓</label>
            </div>
            <div class="check_wrap clearfix">
              <label class="fl"><input type="checkbox" value="" name="">商务楼</label>
            </div>
            <div class="check_wrap clearfix">
              <label class="fl"><input type="checkbox" value="" name="">住宅</label>
            </div>
            <div class="check_wrap clearfix">
              <label class="fl"><input type="checkbox" value="" name="">商业</label>
            </div>
            <div class="check_wrap clearfix">
              <label class="fl"><input type="checkbox" value="" name="">酒店</label>
            </div>
            <div class="check_wrap clearfix">

              <label class="fl"><input type="checkbox" value="" name="">别墅</label>
            </div>
            <div class="check_wrap clearfix">
              <label class="fl"><input type="checkbox" value="" name="">综合</label>
            </div>
            <div class="check_wrap clearfix">
              <label class="fl"><input type="checkbox" value="" name="">商业综合体</label>
            </div>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">楼盘品质：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="lppz" placeholder="请选择" @click="openQuality">
            <i class="right_arrow">&gt;</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">楼盘均价：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="zxjnjg" placeholder="请输入">
            <i class="right_unit">元/m³/天</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">使用率：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="shyl" placeholder="请选择" @click="openUse">
            <i class="right_arrow">&gt;</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">空置比例：</span>
          <div class="cl_999" v-text="hshkzbl">自动生成</div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit pt10">
            <i class="ys_tit_sm">装修配套设施明细</i>
          </span>
          <div class="ys_item_con fl pt10">
            <input type="text" value="" v-model="zxptmx" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">楼盘设计公司：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="lpsjgs" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">楼盘设计师：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="lpsjs" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">楼盘设计师风格：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="lpsjfg" placeholder="请输入">
          </div>
        </li>
      </ul>
      <a href="javascript:;" class="ys_default_btn mb80" @click="saveBuildMsg">保存</a>
    </div>

    <!--日期选择-->
    <mt-datetime-picker
      ref="picker"
      v-model="pickerValue"
      type="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      :startDate="startDate"
      @confirm="handleConfirm">
    </mt-datetime-picker>

    <!--楼盘级别-->
    <mt-popup v-model="popupVisible" position="bottom" class="mint-popup-4">
      <div class="picker-toolbar">
        <span class="mint-datetime-action mint-datetime-cancel" @click="sureLevel">取消</span>
        <span class="mint-datetime-action mint-datetime-confirm" @click="sureLevel">确定</span>
      </div>
      <mt-picker :slots="slots" @change="selectLevel"></mt-picker>
    </mt-popup>

    <!--楼盘品质-->
    <mt-popup v-model="popQuality" position="bottom" class="mint-popup-4">
      <div class="picker-toolbar">
        <span class="mint-datetime-action mint-datetime-cancel" @click="sureQuality">取消</span>
        <span class="mint-datetime-action mint-datetime-confirm" @click="sureQuality">确定</span>
      </div>
      <mt-picker :slots="slots_quality" @change="selectQuality"></mt-picker>
    </mt-popup>


    <!--使用率-->
    <mt-popup v-model="popUse" position="bottom" class="mint-popup-4">
      <div class="picker-toolbar">
        <span class="mint-datetime-action mint-datetime-cancel" @click="sureUse">取消</span>
        <span class="mint-datetime-action mint-datetime-confirm" @click="sureUse">确定</span>
      </div>
      <mt-picker :slots="slots_use" @change="selectUse"></mt-picker>
    </mt-popup>


  </div>
</template>
<script>

  var lang = {
    '优': 1,
    '良': 2,
    '差': 3,
  };

  import { Toast } from 'mint-ui';

  import {DatetimePicker} from 'mint-ui';  //日期选择

  import {Popup} from 'mint-ui'; //弹窗

  export default {
    components: {
      DatetimePicker,
      Popup
    },

    data () {
      return {
        "lpid": "300", //楼盘id
        "topic": "建外SOHO", //楼盘名称
        "address": "北京市朝阳区建国门外大街4号demo", //地址
        "tsbq": "", //特色标签
        "kfsh": "", //开发商名称
        "kprq": "", //开盘日期(必选)
        "lpjb": "", //楼盘级别(必选)
        "chqxz": "", //产权性质
        "lppz": "", //楼盘品质 1优 2良 3差
        "zxjnjg": "", //均价
        "shyl": "",  //使用率
        "hshkzbl": "", //户数空置比例
        "zxptmx": "",  //装修设施配套明细
        "lpsjgs": "", //楼盘设计公司
        "lpsjs": "", //楼盘设计师
        "lpsjfg": "", //楼盘设计风格


        //日期
        pickerValue: '',
        startDate: new Date(),

        //楼盘级别
        pickerLevel: '',
        slots: [
          {
            values: ['level1', 'level2', 'level3'],
          }
        ],

        //品质
        slots_quality: [
          {
            values: ["优", "良", "差"],  //1优 2良 3差
          }
        ],

        //使用率
        slots_use: [
          {
            values: ["一般", "经常", "非常"],  //1优 2良 3差
          }
        ],

        //级别弹窗显示隐藏
        popupVisible: false,

        //品质弹窗隐藏
        popQuality: false,

        //使用率隐藏
        popUse: false

      }
    },
    methods: {

      //日期panel展示
      openPicker() {
        this.$refs.picker.open();
      },

      //日期确定
      handleConfirm(value){
        this.kprq = this.transformDate(value);
      },

      //楼盘类型panel展示
      openLevel() {
        this.popupVisible = true;
      },

      //选择类型
      selectLevel(picker, values) {
        this.pickerLevel = values[0];
      },

      //类型确定
      sureLevel(){
        this.popupVisible = false;
      },


      //打开品质
      openQuality(){
        this.popQuality = true;
      },

      //选择品质
      selectQuality(picker, values){
        this.lppz = values[0];
      },

      //品质确定
      sureQuality(){
        this.popQuality = false;
      },


      //打开品质
      openUse(){
        this.popUse = true;
      },

      //选择品质
      selectUse(picker, values){
        this.shyl = values[0];
      },

      //品质确定
      sureUse(){
        this.popUse = false;
      },

      //日期转换
      transformDate: function (date) {
        var str = '';
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        str = year + '-' + this.addZero(month) + '-' + this.addZero(day);
        return str;
      },

      //补零
      addZero(n){
        return n = n < 10 ? '0' + n : '' + n;
      },

      //选择tag
      selectTag(e){
        if ($(e.target).hasClass('active')) {
          $(e.target).removeClass('active');
        } else {
          $(e.target).addClass('active');
        }

      },


      saveBuildMsg(){
        var _this = this;
        Toast({
          message: '保存成功'
        });

        setTimeout(function(){
            _this.$router.push({path:'/information_insert'})
        },1000)

        this.$http.post(
          this.$api,
          {
            "parameters": {
              "lpid": this.lpid, //楼盘id
              "topic": this.topic, //楼盘名称
              "address": this.address, //地址
              "tsbq": this.tsbq, //特色标签
              "kfsh": this.kfsh, //开发商名称
              "kprq": this.kprq, //开盘日期(必选)
              "lpjb": this.pickerLevel, //楼盘级别(必选)
              "chqxz": this.chqxz, //产权性质
              "lppz": lang[this.lppz], //楼盘品质 1优 2良 3差
              "zxjnjg": this.zxjnjg, //均价
              "shyl": this.shyl,  //使用率
              "hshkzbl": this.hshkzbl, //户数空置比例
              "zxptmx": this.zxptmx,  //装修设施配套明细
              "lpsjgs": this.lpsjgs, //楼盘设计公司
              "lpsjs": this.lpsjs, //楼盘设计师
              "lpsjfg": this.lpsjfg //楼盘设计风格
            },
            "foreEndType": 2,
            "code": "300000041"
          }
        ).then(function (res) {

          var result = JSON.parse(res.bodyText);
          if (result.success) {

          } else {
            this.$Message.error(res.message);
          }
        }, function (res) {
          this.$Message.error('保存失败');
        });
      }

    },
    mounted(){

    },
  }
</script>
