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
          <span class="ys_tit w224">租赁部合作方式：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="HZFS" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">租赁返佣比例：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="FYBL" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">租赁返佣周期：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="FYZQ" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">租赁部地址：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="ZLDZ" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">租赁部电话：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="ZLDH" placeholder="请输入">
          </div>
        </li>
      </ul>
      <a href="javascript:;" class="ys_default_btn mb80" @click="saveAreaMsg">保存</a>
    </div>
  </div>
</template>
<script>
  import {Toast} from 'mint-ui';
  import { MessageBox } from 'mint-ui'; //弹窗
  export default {
    components: {
      Toast,
      MessageBox
    },
    data () {
      return {
        HZFS:"", //租赁部合作方式
        FYBL:"", //租赁返佣比例
        FYZQ:"", //租赁返佣周期
        ZLDZ:"", //租赁部地址
        ZLDH:"", //租赁部电话
      }
    },
    methods: {
      saveAreaMsg(){
        var _this = this;
        if(this.HZFS == ''){
          MessageBox('提示', '请输入租赁部合作方式!');
          return;
        }else if(this.FYBL == ''){
          MessageBox('提示', '请输入租赁返佣比例!');
          return;
        }else if(this.FYZQ == ''){
          MessageBox('提示', '请输入租赁返佣周期!');
          return;
        }else if(this.ZLDZ == ''){
          MessageBox('提示', '请输入租赁部地址!');
          return;
        }else if(this.ZLDH == ''){
          MessageBox('提示', '请输入租赁部电话!');
          return;
        }

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
          console.log(res)
          var result = res;
          if (result.status==200) {
            Toast({
              message: '保存成功',
              duration: 1500
            });
            setTimeout(function () {
              _this.$router.push({path: '/information_insert'})
            }, 1500);
          } else {
            Toast({
              message: '保存失败',
              duration: 1500
            });
          }
        }, function (res) {
          Toast({
            message: '保存失败',
            duration: 1500
          });
        });
      }
    },
    mounted(){
    },
  }
</script>
