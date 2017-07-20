<style scoped lang="less">
  @import "../resources/css/reset.css";
  @import "../resources/css/website/login.less";

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
      <div class="login_bg"></div>
      <div class="login_wrap">
        <div class="login_box">
          <div class="inp_item pt33">
            <i class="ys_icon user"></i>
            <input type="text" value="" placeholder="请输入用户名">
          </div>
          <div class="inp_item pt33">
            <i class="ys_icon pass"></i>
            <input type="text" value="" placeholder="请输入密码">
          </div>
          <div class="inp_item login pt23">
            <router-link class="ys_btn" :to="{path:'/list'}">登 录</router-link>
          </div>
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
      return {

      }
    },
    methods: {

    },
    mounted(){

    },
  }
</script>
