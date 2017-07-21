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
        <li class="clearfix pr">
          <span class="ys_tit w224">物业费：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
            <i class="right_unit">元/㎡/天</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">电费：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
            <i class="right_unit">元/度</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">水费：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
            <i class="right_unit">元/吨</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">热水费：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
            <i class="right_unit">元/吨</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">供暖方式：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">供暖费：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
            <i class="right_unit">元/月</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">空调类型：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">空调品牌：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
          </div>
        </li>

        <li class="clearfix pr">
          <span class="ys_tit w224">制冷费：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
            <i class="right_unit">元/㎡/天</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">空调加时费：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
            <i class="right_unit">元/㎡/天</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">商业物业费：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
            <i class="right_unit">元/㎡/天</i>
          </div>
        </li>

        <li class="clearfix pr">
          <span class="ys_tit w224">商业电费：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
            <i class="right_unit">元/度</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">商业水费：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
            <i class="right_unit">元/吨</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">商业热水费：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
            <i class="right_unit">元/吨</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">商业制冷费：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
            <i class="right_unit">元/㎡/天</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">商业供暖费：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
            <i class="right_unit">元/月</i>
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
