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
        <li class="clearfix pr bg_gray">
          <span class="ys_tit w224">市场近期成交价</span>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">单价：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="scjqjdj" placeholder="请输入">
            <i class="right_unit">元/㎡/天</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">月租金：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="scjqjyzj" placeholder="请输入">
            <i class="right_unit">元/㎡/天</i>
          </div>
        </li>


        <li class="clearfix pr bg_gray">
          <span class="ys_tit w224">历史三年成交价</span>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">单价：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="lssnjdj" placeholder="请输入">
            <i class="right_unit">元/㎡/天</i>
          </div>

        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">月租金：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="lssnjyzj" placeholder="请输入">
            <i class="right_unit">元/㎡/天</i>
          </div>
        </li>

      </ul>
      <a href="javascript:;" class="ys_default_btn mb80" @click="savePrice">保存</a>
    </div>
  </div>
</template>
<script>
  import { Toast } from 'mint-ui'; //toast

  import { MessageBox } from 'mint-ui'; //弹窗

  export default {
    components: {},

    data () {
      return {
        //价格信息
        scjqjdj: '', //市场近期成交价 单价
        lssnjdj: '', //历史三年成交价 单价
        scjqjyzj: '', //市场近期成交价 月租金
        lssnjyzj: '', //历史三年成交价 月租金
      }
    },
    methods: {
      //保存价格信息
      savePrice(){
        var _this = this;

        if(this.scjqjdj == ''){
          MessageBox('提示', '请输入近期成交价');
          return;
        }

        Toast({
          message: '保存成功',
          position: 'bottom'
        });

        setTimeout(function () {
          _this.$router.push({path:'/list2'});
        }, 1500);

        this.$http.post(
          this.$api,
          {
            "parameters": {
              "id": this.zdid, //楼盘id
            },
            "foreEndType": 2,
            "code": "300000074"
          }
        ).then(function (res) {

          var result = JSON.parse(res.bodyText);
          if (result.success) {

          } else {
            this.$Message.error(res.message);
          }
        }, function (res) {
          this.$Message.error('保存失败');
        });
      }
    },
    mounted(){

    },
  }
</script>
