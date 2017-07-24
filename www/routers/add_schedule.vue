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
          <span class="ys_tit">标签：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">内容：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">开始时间：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请选择开始时间">
            <i class="calendar_icon"></i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">结束时间：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请选择结束时间">
            <i class="calendar_icon"></i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">提醒：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="准时、10分钟前、1小时前">
            <i class="right_arrow">&gt;</i>
          </div>
        </li>

      </ul>
      <div class="btn_group clearfix mb80">
        <a href="javascript:;" class="ys_two_btn fl">保存</a>
        <a href="javascript:;" class="ys_two_btn fr btn_gray cl_333">取消</a>
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
