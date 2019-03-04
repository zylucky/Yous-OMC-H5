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
			border-bottom: none!important;
		}
	}
</style>
<style>
	.search_inp .mint-field .mint-cell-value{
		height: 100%!important;
	}
	.search_inp .mint-field-core{
		height: 100%!important;
	}
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
				<p class="search_exit" @click="search_cancel">取消</p>
			</div>
		</div>
		<div class="copy_bottom">
			<!-- 搜索的待办列表 -->
			<ul class="db_list" :style="username!=''?'border-bottom: 1px solid #e5e5e5;':'border-bottom: none;'">
				<li v-for="item in listData" @click="link_db(item)" v-text="item.lpname+' '+item.zdname+'-'+item.fyname"></li>
				<p style="line-height: 0.5rem;font-size: 0.3rem;text-align: center;color: #999;">{{list_data.length!=0 && username!=''?'':'暂无搜索结果'}}</p>
			</ul>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';
	export default {
		data() {
			return {
				username: '',
				list_data: [],
			}
		},
		methods: {
			search_cancel(){//取消搜索
				this.$router.push({
					path: this.$route.query.laiyuan,//回退到列表
					query:{}
				});
				// history.go(-1);//返回上一页
			},
			link_db(item){//
				this.$router.push({
					path: this.$route.query.laiyuan,//回退到列表
					query:{
						// search_key: item.lpname,
						search_key: item.lpname+item.zdname+item.fyname
					}
				});
			},

		},
		mounted() {
			$("input").trigger("click").focus();
			this.to_page(this.$route.query.laiyuan);//返回地址重定向
		},
		computed: {
			listData(){//模糊查询渠道人员信息
				if(this.username != ''){
					const url = this.$api + "/yhcms/web/activitibusinessreg/handleList.do";
					axios.post(url,{
						"search_keywork": this.username,//关键词搜索
						"timeSort": "D",//时间排序
						"worList": "",//工单类型
						"curr_page": '1',
						"items_perpage":"10",
						"cookie": JSON.parse(localStorage.getItem('cookxs')).sjs
					}).then((res)=>{
						this.list_data = res.data.data;
					}, (err)=>{
						console.log(err);
					});
					return this.list_data;
				}
			}
		},
		watch: {
			
		},
		filters:{

		}

	}
</script>