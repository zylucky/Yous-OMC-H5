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
          <span class="ys_tit">开发商：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">开盘日期：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请选择日期">
            <i class="calendar_icon"></i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">楼盘级别：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请选择">
            <i class="right_arrow">&gt;</i>
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
              <input type="checkbox" value="" name="">
              <label class="fl">写字楼</label>
            </div>
            <div class="check_wrap clearfix">
              <input type="checkbox" value="" name="">
              <label class="fl">公寓</label>
            </div>
            <div class="check_wrap clearfix">
              <input type="checkbox" value="" name="">
              <label class="fl">商务楼</label>
            </div>
            <div class="check_wrap clearfix">
              <input type="checkbox" value="" name="">
              <label class="fl">住宅</label>
            </div>
            <div class="check_wrap clearfix">
              <input type="checkbox" value="" name="">
              <label class="fl">商业</label>
            </div>
            <div class="check_wrap clearfix">
              <input type="checkbox" value="" name="">
              <label class="fl">酒店</label>
            </div>
            <div class="check_wrap clearfix">
              <input type="checkbox" value="" name="">
              <label class="fl">别墅</label>
            </div>
            <div class="check_wrap clearfix">
              <input type="checkbox" value="" name="">
              <label class="fl">综合</label>
            </div>
            <div class="check_wrap clearfix">
              <input type="checkbox" value="" name="">
              <label class="fl">商业综合体</label>
            </div>
          </div>
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
