<style scoped lang="less">
  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  input {
    padding: 0;
    margin: 0;
    border: 0;
  }

  @import "../resources/css/reset.css";
  @import "../resources/css/base.less";
  .color_blue {
    color: @bg_mid_blue
  }

  .color_black {
    color: @cl_black
  }
  .image_wrap {
    min-height: 1.6rem;
    margin-bottom: .20rem;
    border-bottom: 1px solid #dbdadf;
  }
  .bg_grey {
    background: @bg_lightgay !important;
  }

  .bd {
    font-weight: bold;
  }

  .mb20 {
    margin-bottom: .20rem;
  }

  .mf36 {
    margin-left: .36rem;
  }

  .no-bb {
    border-bottom: 0 !important;
  }
  .common_title{
    height: .54rem!important;
    line-height: .54rem!important;
  }
  .all_elements {
    font-size: .26rem;
  }

  .ys_item_ul li {
    .ys_tit {
      float: left;
      position: relative;
      width: 1.45rem;
      height: .72rem;
      margin-right: .18rem;
      &:after {
        content: ':';
        position: absolute;
        right: 0;
      }
      &.nor {
        width: inherit;
        &:after {
          content: '';
          display: none;
        }
      }
    }
    .ys_item_con {
      &.input-out {
        height: .72rem;
      }
      input {
        font-size: .26rem;
      }
    }
    .arrow {
      float: right;
      margin-right: .30rem;
    }
    .edit {
      float: right;
      border-radius: .5em;
      margin: .15rem .20rem 0 0;
      width: 1.46rem;
      height: .40rem;
      line-height: .40rem;
      text-align: center;
      border: none;
      background-color: @bg_mid_blue;
      color: @cl_white;
      font-size: .20rem;
    }
    .ys_item_con {
      input {
        height: inherit;
      }
    }

    .sub-ul {
      padding: .24rem .70rem .16rem .70rem;
      li {
        padding-left: 0;
        float: left;
        margin: 0 .22rem .22rem 0;
        width: 1.80rem;
        height: .50rem;
        line-height: .50rem;
        text-align: center;
        border-radius: .56em;
        border: 1px solid #373737;
        font-size: .20rem;
        span {
          display: inline-block;
          vertical-align: top;
        }
        span:first-child {
          margin-right: .20rem;
        }
        &.current {
          background-color: @bg_mid_blue;
          border: 1px solid @bg_mid_blue;
          color: @cl_white;
        }
        &:nth-child(3n) {
          margin: 0 0 .22rem 0;
        }
      }
    }
  }

  .ptitle {
    padding-left: .24rem;
    line-height: .72rem;

  }

  .uit-raio {
    position: relative;
    float: left;
    height: .72rem;
    line-height: .72rem;
    &:first-child {
      margin: 0 1.1rem 0 .50rem;
    }
    &.uit-raio:nth-child(2) {
      margin-right: .86rem;
    }
  }

  .tear-out {
    background-color: @cl_white;
    border-bottom: 1px solid #dbdadf;
    padding: .22rem 0;
    textarea {
      display: block;
      min-width: 94%;
      max-width: 94%;
      margin: 0 auto;
      background-color: @cl_white;
      border-radius: .18rem;
      border: .01rem solid #4d4d4d;
    }
  }

  button {
    display: block !important;
    margin: 1.78rem auto 0;
    width: 3.4rem;
    height: .72rem;
    text-align: center;
    border-radius: .4em;
    background-color: #dddce1;
    border: 0;
    font-size: .26rem;
    &.current {
      color: @cl_white;
      background: @bg_mid_blue;
    }
  }

  @media screen and (max-width: 320px) {
    .ys_item_ul li .ys_tit {
      width: 1.45rem !important;
      &.nor {
        width: inherit !important;
        &:after {
          content: '';
          display: none;
        }
      }
    }
  }
</style>
<template>
  <div class="all_elements">
    <div class="build_top">
      <ul class="ys_item_ul mb20">
        <li class="clearfix color_black bd">
          <span class="">建外SOHO A座 2201</span>
        </li>
        <li class="clearfix">
          <span class="ys_tit">当前位置</span>
          <div class="ys_item_con fl"><input type="text" placeholder="自动显示"/></div>
        </li>
      </ul>

      <div class="common_title">当前位置图片</div>
      <div  class="image_wrap clearfix mb140">
        <div class="upload_btn mr10 fl"></div>
        <div class="img_demo fl pr">
          <img src="/static/img/demo_img.9ee0b97.png" alt="" class="upload_demo_img">
          <i class="delete_icon"></i>
        </div>
      </div>
    </div>
    <button class="save current">签到</button>
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
