<style scoped lang="less">
  *{
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  input { padding: 0; margin: 0; border: 0; }
  @import "../resources/css/reset.css";
  @import "../resources/css/base.less";
  .color_blue{color:@bg_mid_blue}
  .color_black{color:@cl_black}
  .bg_grey{
    background:@bg_lightgay!important;
  }
  .bd{
    font-weight: bold;
  }
  .mb20{
    margin-bottom: .20rem;
  }
  .mf36{
    margin-left: .36rem;
  }
  .all_elements{
    font-size: .20rem;
    color: #8e8e8e;
  }
  .ys_item_ul li{
     padding: 0 .22rem;
     min-height: 1.44rem;
    .title{
      color: #373737;
    }
    .date{
      color: #8e8e8e;
      float: right;
    }
    p{
      line-height: 1em;
      font-size: .16rem;
    }
  }

</style>
<template>
  <div class="all_elements">
    <div class="build_top">
      <ul class="ys_item_ul mb20">
        <li class="clearfix color_black bd mb20">
           <div class="title-date">
             <span class="title">消息主题1</span>
             <span class="date">2017-5-18</span>
           </div>
          <p class="para">消息内容</p>
        </li>
        <li class="clearfix color_black bd mb20">
          <div class="title-date">
            <span class="title">消息主题2</span>
            <span class="date">2017-5-18</span>
          </div>
          <p class="para">消息内容</p>
        </li>
        <li class="clearfix color_black bd mb20">
          <div class="title-date">
            <span class="title">消息主题3</span>
            <span class="date">2017-5-18</span>
          </div>
          <p class="para">消息内容</p>
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
