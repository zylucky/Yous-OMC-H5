<style scoped lang="less">
  @import "../resources/css/website/list.less";

  .page-infinite-loading {
    text-align: center;
    background-color: #FFF;
    & > span {
      display: inline-block;
    }
  }

</style>
<template>
  <div>
    <!--header-->
    <section id="header">
      <header1></header1>
    </section>
    <router-view></router-view>
    <!--context end-->
  </div>
</template>
<script>
  import header1 from '../components/header.vue';
  import footer1 from '../components/footer.vue';
  export default {
    components: {
      header1,
      footer1,
    },

    data () {
      return {

      }
    },
    mounted(){

    },
    methods: {

    }
  }
</script>
