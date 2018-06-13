<style scoped lang='less'>
	@import "../resources/css/reset.css";
  	@import "../resources/css/base.less";
  	.box{
  		font-size: 0.3rem;
  	}
</style>

<template>
	<div class="box">
		<section id="header">
	      <header1></header1>
	    </section>
		<section class="section">
			12312312
		</section>
	</div>
</template>

<script>
import header1 from '../components/header2.vue';
export default {
	components: {
      header1,
   },
    data() {
      return {
       
      };
    },
    methods: {

    },
};
</script>
