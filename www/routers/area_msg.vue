<style scoped lang="less">
  @import "../resources/css/reset.css";
  @import "../resources/css/base.less";

</style>
<template>
  <div class="all_elements">
    <div class="build_top">
      <ul class="ys_item_ul mb60">
        <li class="clearfix pr">
          <span class="ys_tit w224">建筑面积：</span>
          <div class="ys_item_con fl">
            <input type="tel" value="" v-model="jzmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">业主面积：</span>
          <div class="ys_item_con fl">
            <input type="tel" value="" v-model="yzmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">开发商自持面积：</span>
          <div class="ys_item_con fl">
            <input type="tel" value="" v-model="kfszcmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">单层面积：</span>
          <div class="ys_item_con fl">
            <input type="tel" value="" v-model="dcmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">空置面积：</span>
          <div class="ys_item_con fl">
            <input type="tel" value="" v-model="kzmj" placeholder="请输入">
            <i class="right_unit">㎡</i>
          </div>
        </li>
      </ul>
      <a href="javascript:;" class="ys_default_btn mb80" @click="saveAreaMsg">保存</a>
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
        //面积信息
        zdid: '', //座栋id
        jzmj: '', //建筑面积
        yzmj: '', //业主面积
        kfszcmj: '', //开发商自持面积
        dcmj: '', //单层面积
        kzmj: '', //空置面积
      }
    },
    methods: {
      //保存面积信息
      saveAreaMsg(){
        var _this = this;

        if(this.jzmj == ''){
          MessageBox('提示', '请输入建筑面积');
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
