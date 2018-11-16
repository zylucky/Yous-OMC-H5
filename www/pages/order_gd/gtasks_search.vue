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
		height: 1.08rem;
		bottom: initial;
		border-bottom: 1px solid #e5e5e5;
	}
	.copy_bottom{
		top: 1.08rem;
		overflow: auto;
		-webkit-overflow-scrolling: touch;
	}
	.search{
		display: flex;
		align-items: center;
		position: relative;
		top: 50%;
		left: 50%;
		margin: -0.32rem 0 0 -2.85rem;
		width: 5.7rem;
		height: 0.64rem;
		background: #eaeaea;
		border-radius: 0.08rem;
		/* overflow: hidden; */
		.search_exit{
			position: relative;
			right: -0.75rem;
			font-size: 0.28rem;
			color: #2b70d8;
			line-height: 0.64rem;
		}
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
		font-size: 0.26rem;
	}
	.db_list{
		border-bottom: 1px solid #e5e5e5;
		padding-left: 0.3rem;
		li{
			height: 1.12rem;
			line-height: 1.12rem;
			font-size: 0.28rem;
			color: #333;
			border-bottom: 1px solid #e5e5e5;
		}
		li:last-child{
			border-bottom: none;
		}
	}
</style>
<style>
	.search_inp .mint-field-core{
		font-size: 0.26rem!important;
		color: #333!important;
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
					<mt-field placeholder="搜索楼盘名称/座栋/房间号" v-model="username"></mt-field>
				</p>
				<p class="search_exit">取消</p>
			</div>
		</div>
		<div class="copy_bottom">
			<!-- 搜索的待办列表 -->
			<ul class="db_list">
				<li v-for="i in 3">建外SOHO 2-2908</li>
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