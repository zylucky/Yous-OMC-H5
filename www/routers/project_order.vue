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
          <span class="fl">建外SOHO A座 2201</span>
          <div class="fr pt10 pr10"><a href="javascript:;" class="ys_sm_btn">签到</a></div>
        </li>
        <li class="clearfix">
          <div class="tc pro_label_wrap">
            <span class="ys_third_btn">工程 张三</span>
            <span class="ys_third_btn">销售 未结单</span>
            <span class="ys_third_btn">装修 王五</span>
          </div>
        </li>
        <li class="clearfix bg_gray line_nor pt10 pb10">
          <span class="f24">* 请告知业主房屋内的主体结构及设备设施（空调、入户门、外窗、马桶、入户网线、烟感、喷淋、上下水、燃气）均由业主方负责后期的维护，以及家电属于自然损耗品，房屋到期后家电不一定会好用。</span>
        </li>
        <li class="clearfix">
          <span class="ys_tit">业主常驻地：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">业主物业关系：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请选择">
            <i class="right_arrow">&gt;</i>
          </div>
        </li>
        <li class="clearfix bg_gray f24">业主与物业费用结算情况</li>

        <li class="clearfix pr">
          <span class="ys_tit">结算方式：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入结算费方式">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">结算时间点：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入结算时间点">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">结算方式：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入结算费方式">
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit w224">是否代缴：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" name="help_pay">是</label>
            <label><input type="radio" name="help_pay">否</label>
          </div>
          <i class="fl f24 cl_red ys_tips">*若代缴所支付的费用有下次房屋中直接扣除</i>
        </li>
        <li class="clearfix">
          <span class="ys_tit w224">资料齐全：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" name="help_pay">是</label>
            <label><input type="radio" name="help_pay">否</label>
          </div>
        </li>

        <li class="clearfix pr">
          <span class="ys_tit w224">资料齐全时间：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="确定资料补全时间">
            <i class="right_arrow">&gt;</i>
          </div>
        </li>

        <li class="clearfix pr">
          <span class="fl">业主配合维修时间：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请选择日期">
            <i class="calendar_icon"></i>
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit w224">业主承担维修费用：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" name="fix_radio">是</label>
            <label><input type="radio" name="fix_radio">否</label>
          </div>
        </li>

        <li class="clearfix pr">
          <span class="ys_tit">物业缴费至：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请选择日期">
            <i class="calendar_icon"></i>
          </div>
        </li>



        <li class="clearfix">
          <span class="ys_tit">产权性质：</span>
          <div class="ys_item_con fl"><a href="javascript:;" class="cl_link">请选择标签</a></div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">楼盘品质：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请选择">
            <i class="right_arrow">&gt;</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">楼盘均价：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
            <i class="right_unit">元/m³/天</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">使用率：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请选择">
            <i class="right_arrow">&gt;</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">空置比例：</span>
          <div class="cl_999">自动生成</div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit pt10">
            <i class="ys_tit_sm">装修配套设施明细</i>
          </span>
          <div class="ys_item_con fl pt10">
            <input type="text" value="" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">空置比例：</span>
          <div class="cl_999">自动生成</div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">楼盘设计公司：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">楼盘设计师：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">楼盘设计师风格：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
          </div>
        </li>
      </ul>
      <a href="javascript:;" class="ys_default_btn mb80">保存</a>
    </div>
  </div>
</template>
<script>
  import {Indicator} from 'mint-ui';
  import {InfiniteScroll} from 'mint-ui';
  export default {
    components: {
      InfiniteScroll
    },

    data () {
      return {}
    },
    methods: {},
    mounted(){

    },
  }
</script>
