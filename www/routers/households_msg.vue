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
          <span class="ys_tit w224">总户数：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="zhsh" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">开发商总数：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="kzhsh" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">业主总户数：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="kzhbl" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">商业总户数：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="shyhsh" placeholder="请输入">
          </div>
        </li>
      </ul>
      <a href="javascript:;" class="ys_default_btn mb80" @click="saveHouse">保存</a>
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
        zhsh: '', //总户数
        kzhsh: '', //空置户数
        kzhbl: '', //空置比例
        shyhsh: '', //商业户数
      }
    },
    methods: {
      //保存户数信息
      saveHouse(){
        var _this = this;

        if(this.zhsh == ''){
          MessageBox('提示', '请输入总户数');
          return;
        }

        Toast({
          message: '保存成功'
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
