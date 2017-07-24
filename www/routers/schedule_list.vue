<style scoped lang="less">
  @import "../resources/css/reset.css";
  @import "../resources/css/base.less";
  @import "../resources/css/website/doc_attach.less";

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
      <div class="sche_search_wrap mb10 pr">
        <!--搜索-->
        <a href="javascript:;" class="detail-search" style="position: fixed;left: 0; top: 0">
          <input type="text" id="keyword1" placeholder="请输入关键字搜索" maxlength="50">
        </a>
        <a href="javascript:;" class="add_enter_wrap  f24"><i class="add_enter"></i>添加录入</a>
      </div>

      <!--日程列表-->
      <div class="attach_list_wrap">
        <ul>
          <li class="attach_item clearfix pt10">
            <div class="fl distri_block mb5">
              <span class="db">建外SOHO A座 2201 业主打电话</span>
              <span class="cl_999 f24">具体内容</span>
              <span class="cl_999 f24 db">2017-08-01 14:00</span>
            </div>
          </li>
        </ul>
      </div>

    </div>

    <!--遮罩-->
    <div class="ys_mask">

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
