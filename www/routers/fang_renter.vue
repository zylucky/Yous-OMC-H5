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
      <ul class="ys_item_ul mb20">
        <li v-for="datum in data" class="clearfix pr">
          <span class="ys_tit">{{datum.topic}}</span>
          <span class="ys_tit">{{datum.xb == "1" ? "男":"女"}}</span>
          <span>{{datum.phone}}</span>
          <i class="right_arrow" :agent="datum.id" @click="modifyAgent">&gt;</i>
        </li>
      </ul>
      <div class="tc"><a href="javascript:;" class="cl_link f30" @click="addAgent">+添加租户</a></div>
    </div>
  </div>
</template>
<script>
  import {Indicator} from 'mint-ui';
  export default {
    data () {
      return {
          "id": "",
          "data": []
      }
    },
    methods: {
      getInitData(){
          const fyid = this.$route.params.fyid;
          this.id = fyid;
          Indicator.open({
             text: '',
             spinnerType: 'fading-circle'
          });
          const url = this.$api + "/yhcms/web/zdfyxx/getZdfyZhxx.do";
          let that = this;
          this.$http.post(url, {"parameters":{ "id":fyid},"foreEndType":2,"code":"300000020"}).then((res)=>{
            Indicator.close()
            const data = JSON.parse(res.bodyText).data;
            that.data = data;
          }, (res)=>{
            Indicator.close()
          });
      },
      addAgent(){
          this.$router.push({path:'/fang_add_agent/'+this.id});
      },
      modifyAgent(){
          this.$router.push({path:'/fang_edit_agent/'+this.id});
      },
    },
    mounted(){
        this.getInitData();
    },
  }
</script>
