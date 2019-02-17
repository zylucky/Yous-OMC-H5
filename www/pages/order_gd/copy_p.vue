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
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
		-webkit-justify-content: center;
		align-items: center;
		-webkit-align-items: center;
		height: 1.15rem;
		bottom: initial;
		padding: 0 0.3rem;
	}
	.copy_bottom{
		top: 1.15rem;
		overflow: auto;
		-webkit-overflow-scrolling: touch;
	}
	.search{
		display: flex;
		display: -webkit-flex;
		align-items: center;
		-webkit-align-items: center;
		position: relative;
		/* top: 50%;
		left: 50%;
		margin: -0.34rem 0 0 -3.5rem; */
		width: 6.2rem;
		height: 0.68rem;
		background: #eaeaea;
		border-radius: 0.08rem;
		overflow: hidden;
	}
	.cancel{
		height: 0.68rem;
		flex: 1;
		line-height: 0.68rem;
		text-align: center;
		font-size: 0.28rem;
		color: #2b70d8;
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
					<mt-field placeholder="姓名" v-model="username"></mt-field>
				</p>
			</div>
			<p class="cancel" @click="search_cancel">取消</p>
		</div>
		<div class="copy_bottom">
			<!-- 搜索的抄送列表 -->
			<ul class="copy_list">
				<li v-for="item in listData" @click="add_person(item)">
					<div class="head_img"><img src="../../resources/images/commission/head_img.png" alt=""></div>
					<div class="copy_news">
						<p class="name">{{item.topic}}</p>
						<p class="tel">{{item.fybh}}</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import { Field } from 'mint-ui';
import { MessageBox } from 'mint-ui'
	export default {
		data() {
			return {
				username:'',
				list_data: [],
				copy_data: [],//抄送人
			}
		},
		methods: {
			search_cancel(){//取消搜索
				this.$router.push({
					path:this.$route.query.laiyuan,//回退到列表
					query:{
						gdid: this.$route.query.gdid//工单id
					}
				});
			},
			add_person(item){
				if(this.$store.state.copyData.length != 0){
					this.copy_data = this.$store.state.copyData;
					for(var i=0; i<this.copy_data.length; i++){
						if(this.copy_data[i].id == item.id){
							MessageBox('提示', '已存在该抄送人');
							return;
						}
					}
				}
				var obj = {
					"id": item.id,
					"admin": 0,
					"isdelete": 1,
					"topic": item.topic					
				}
				this.$store.commit('add_copy',obj);
				console.log(this.$store.state.copyData);
				this.$router.push({
					path:this.$route.query.laiyuan,//回退到列表
					query:{
						gdid: this.$route.query.gdid,//工单id
					}
				});
			},
			unique(array){
				var newArr = [];
				var len = this.length;
				for(var i = 0;i < len; i++){
					if(newArr.indexOf(this[i]) == -1){
						newArr.push(this[i]);
					}
				}
				return newArr;
			},
			
		},
		mounted() {

		},
		computed: {
			listData(){//模糊查询渠道人员信息
				if(this.username != ''){
					const url = this.$api + "/yhcms/web/activitibusinessreg/getPersonnel.do";
					axios.post(url,{
						"search_keywork": this.username,//关键词搜索
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