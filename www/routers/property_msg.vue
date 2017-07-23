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
    <div class="build_top h72 bg-white clearfix pr">
      <div class="ys_column3 fl tc">
        <select name="" id="property_com">
          <option value="">物业公司</option>
          <option value="">物业公司</option>
          <option value="">物业公司</option>
        </select>
      </div>
      <span class="ver_line left1"></span>
      <div class="ys_column3 fl tc">
        <select name="" id="tele_com">
          <option value="">电话运营商</option>
          <option value="">电话运营商</option>
          <option value="">电话运营商</option>
        </select>
      </div>
      <span class="ver_line left2"></span>
      <div class="ys_column3 fl tc">
        <select name="" id="net_com">
          <option value="">网络运营商</option>
          <option value="">网络运营商</option>
          <option value="">网络运营商</option>
        </select>
      </div>
    </div>

    <!--物业公司结果-->
    <div class="property_res">
      <div class="pt15 pro_item"><span>公司名称</span> | <span>地址</span> | <span>电话</span></div>
    </div>
    <div class="tc pt20"><a href="javascript:;" class="cl_link f30">+添加物业公司</a></div>

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
