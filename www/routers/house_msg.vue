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
          <span class="ys_tit">房号：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">房源别名：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">楼层：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">是否为商铺：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" name="shop_type">是</label>
            <label ><input type="radio" name="shop_type">否</label>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">商铺类型：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请选择">
            <i class="right_arrow">&gt;</i>
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit">产权年限：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" name="rights_year">40</label>
            <label class="mr20"><input type="radio" name="rights_year">50</label>
            <label ><input type="radio" name="rights_year">70</label>
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit">朝向：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit">装修水平：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请选择">
            <i class="right_arrow">&gt;</i>
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit">抵押状态：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit">业主属性：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" name="owner_type">小业主</label>
            <label ><input type="radio" name="owner_type">开发商</label>
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit">航远房源：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" name="hy_type">是</label>
            <label ><input type="radio" name="hy_type">否</label>
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit">是否有租户：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" name="rent_num">是</label>
            <label ><input type="radio" name="rent_num">否</label>
          </div>
        </li>

        <li class="clearfix pr mb20">
          <span class="ys_tit">空置时间：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请选择日期">
            <i class="calendar_icon"></i>
          </div>
        </li>

        <li class="clearfix pr border_top">
          <span class="ys_tit w224">参考租赁价格：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
            <i class="right_unit">元/㎡/天</i>
          </div>
        </li>

        <li class="clearfix pr">
          <span class="ys_tit w224">业主期望租金：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
            <i class="right_unit">元/㎡/天</i>
          </div>
        </li>

        <li class="clearfix pr">
          <span class="ys_tit w224">业主租金底价：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
            <i class="right_unit">元/㎡/天</i>
          </div>
        </li>

        <li class="clearfix pr mb20">
          <span class="ys_tit w224">适合业态：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit w224">车位：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" name="parking_type">车库</label>
            <label class="mr20"><input type="radio" name="parking_type">地面</label>
            <label ><input type="radio" name="parking_type">无</label>
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
