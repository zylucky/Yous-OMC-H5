<style scoped lang='less'>
	@import "../../resources/css/reset.css";
	@import "../../resources/css/base.less";
	.box,.copy_top,.copy_bottom{
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: #fff;
		overflow: hidden;
	}
	.copy_top{
		height: 1.15rem;
		bottom: initial;
	}
	.copy_bottom{
		top: 1.15rem;
		overflow: auto;
		-webkit-overflow-scrolling: touch;
	}
	.search{
		display: flex;
		align-items: center;
		position: relative;
		top: 50%;
		left: 50%;
		margin: -0.34rem 0 0 -3.5rem;
		width: 7rem;
		height: 0.68rem;
		background: #eaeaea;
		border-radius: 0.08rem;
		overflow: hidden;
	}
	.search_ion{
		width: 0.31rem;
		height: 0.3rem;
		margin: 0 0.25rem;
		background: url(../../resources/images/order_gd/search_ion.png) no-repeat center;
		background-size: 100% auto;
	}
	.search_inp{
		flex: 1;
		height: 100%;
	}
	.search_inp .mint-cell{
		min-height: 100%!important;
	}
	input::-webkit-input-placeholder{
		color: #c8c8c8;
		font-size: 0.28rem;
	}
	.copy_list{
		padding-left: 0.34rem;
		li{
			display: flex;
			margin-top: 0.12rem;
		}
		.head_img{
			width: 0.75rem;
			height: 0.75rem;
			border-radius: 50%;
			margin-right: 0.25rem;
			overflow: hidden;
			img{
				width: 100%;
				height: auto;
			}
		}
		.copy_news{
			flex: 1;
			border-bottom: 1px solid #e5e4e4;
			padding-bottom: 0.25rem;
			p{line-height: 0.43rem;}
			.name{
				font-size: 0.3rem;
				color: #333333;
			}
			.tel{
				font-size: 0.26rem;
				color: #999999;
			}
		}
	}
</style>
<style>
	.mint-field .mint-cell-value{
		height: 100%!important;
		padding-right: 0.1rem!important;
	}
	.search_inp .mint-field-core{
		font-size: 0.28rem!important;
		color: #b7b7b7!important;
		background: initial!important;
		line-height: initial!important;
	}
	.search_inp .mint-cell{
		background: initial!important;
	}
	.search_inp .mint-cell-wrapper{
		background: none!important;
		width: 100%!important;
		padding: 0!important;
	}
</style>

<template>
	<div class="box">
		<div class="copy_top">
			<div class="search">
				<p class="search_ion"></p>
				<p class="search_inp">
					<mt-field placeholder="姓名/手机号" v-model="username"></mt-field>
				</p>
			</div>
		</div>
		<div class="copy_bottom">
			<!-- 搜索的抄送列表 -->
			<ul class="copy_list">
				<li v-for="i in 3">
					<div class="head_img"><img src="../../resources/images/commission/head_img.png" alt=""></div>
					<div class="copy_news">
						<p class="name">李三</p>
						<p class="tel">15936866025</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import { Field } from 'mint-ui';
	export default {
		data() {
			return {
				username:'',
			}
		},
		methods: {
			
		},
		mounted() {

		},
		computed: {

		},
		watch: {
			
		},
		filters:{

		}

	}
</script>