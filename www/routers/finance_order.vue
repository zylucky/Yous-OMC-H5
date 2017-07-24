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
          <span>建外SOHO A座 2201</span>
          <div class="fr mt15 mr20">
            <a href="javascript:;" class="ys_sm_btn">编辑</a>
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit w224">房屋是否有抵押：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" name="pledge">有</label>
            <label ><input type="radio" name="pledge">无</label>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">贷款类型：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入贷款类型">
          </div>
        </li>
        <li class="clearfix pr mb10">
          <span class="ys_tit">业主业余爱好：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr bg_gray">
          <span class="f24">金融服务类贷款的资金用途</span>
        </li>
        <li class="clearfix">
          <div class="textarea_wrap pt10">
            <textarea name="" cols="30" rows="10" placeholder="请输入" class="bg-white"></textarea>
          </div>
        </li>

        <li class="clearfix bg_gray">
          <span>是否有理财计划和打算</span>
        </li>
        <li class="clearfix">
          <div class="textarea_wrap pt10">
            <textarea name="" cols="30" rows="10" placeholder="请输入" class="bg-white"></textarea>
          </div>
        </li>

        <li class="clearfix bg_gray">
          <span>是否了解市场各类贷款产品的用途和细则</span>
        </li>
        <li class="clearfix">
          <div class="textarea_wrap pt10">
            <textarea name="" cols="30" rows="10" placeholder="请输入" class="bg-white"></textarea>
          </div>
        </li>

        <li class="clearfix bg_gray">
          <span>长短期是否有资金要求</span>
        </li>
        <li class="clearfix">
          <div class="textarea_wrap pt10">
            <textarea name="" cols="30" rows="10" placeholder="请输入" class="bg-white"></textarea>
          </div>
        </li>

      </ul>
      <div class="btn_group clearfix mb80">
        <a href="javascript:;" class="ys_two_btn fl">提交并派发</a>
        <a href="javascript:;" class="ys_two_btn fr btn_gray">提交</a>
      </div>

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
