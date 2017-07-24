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
      <div class="work_title cl_link mb10">
        <span class="ys_tit ">查看跟进</span>
        <div class="ys_item_con fl">
          <i class="right_arrow">&gt;</i>
        </div>
      </div>
      <ul class="ys_item_ul mb60">
        <li class="clearfix pr">
          <span>建外SOHO A座 2201 业主约见谈判</span>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit ">派单时间：</span>
          <div class="ys_item_con fl">
            <span>2017-08-12 14:00</span>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit ">房间面积：</span>
          <div class="ys_item_con fl">
            <span>220㎡</span>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">装修：</span>
          <div class="ys_item_con fl">
            <span>毛坯</span>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">配合收房人身份：</span>
          <div class="ys_item_con fl">
            <span>代理人</span>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit ">与业主关系：</span>
          <div class="ys_item_con fl">
            <span>朋友</span>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">配合收房人姓名：</span>
          <div class="ys_item_con fl">
            <span>姓名</span>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit ">收房时间：</span>
          <div class="ys_item_con fl">
            <span>2017-08-12 14:00</span>
          </div>
        </li>
      </ul>
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
