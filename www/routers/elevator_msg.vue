<style scoped lang="less">
  @import "../resources/css/reset.css";
  @import "../resources/css/base.less";
  @import "../resources/css/website/elevator_msg.less";

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
    <div class="build_top ele_wrap">
      <ul class="ys_item_ul mb60">
        <li class="clearfix">
          <span class="ys_tit w224">电梯品牌：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit w224">客梯数量：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit w224">客梯层级区分：</span>
          <div class="ys_item_con fl">
            <label for="ele_yes" class="mr20"><input type="radio" name="ele_type" id="ele_yes">是</label>
            <label for="ele_no" id="ele_no"><input type="radio" name="ele_type">否</label>
          </div>
        </li>
        <li class="clearfix mb20">
          <span class="ys_tit w224">所到楼层：</span>
          <div class="ys_item_con fl">
            <input type="text" class="inp_sm" value="" placeholder="请输入">
            <span class="hor_line"></span>
            <input type="text" class="inp_sm" value="" placeholder="请输入">
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit w224">货梯数量：</span>
          <div class="ys_item_con fl">
            <input type="text inp_sm" value="" placeholder="请输入">
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit w224">货梯层级区分：</span>
          <div class="ys_item_con fl">
            <label for="ele_yes" class="mr20"><input type="radio" name="ele_type" id="frei_ele_yes">是</label>
            <label for="ele_no" id="frei_ele_no"><input type="radio" name="ele_type">否</label>
          </div>
        </li>

        <li class="clearfix mb20">
          <span class="ys_tit w224">所到楼层：</span>
          <div class="ys_item_con fl">
            <input type="text" class="inp_sm" value="" placeholder="请输入">
            <span class="hor_line"></span>
            <input type="text" class="inp_sm" value="" placeholder="请输入">
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
