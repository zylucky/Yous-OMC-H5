<style scoped lang='less'>
	@import "../../resources/css/reset.css";
	@import "../../resources/css/base.less";
	.box {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		overflow: hidden;
		background: #fff;
		.list {
			padding-left: 0.25rem
		}
		.list li {
			display: flex;
			display: -webkit-flex;
			align-items: center;
			-webkit-align-items: center;
			.pic {
				width: 0.75rem;
				height: 0.75rem;
				margin-right: 0.25rem;
				img {
					width: 100%;
					height: auto;
				}
			}
			.name {
				width: 100%;
				p {
					height: 0.5rem;
				}
				p:first-child {
					font-size: @font30;
					color: #323232;
				}
				p:last-child {
					font-size: @font24;
					color: #969696;
					border-bottom: 1px solid #e4e4e4;
				}
			}
		}
	}
	
	.header {
		height: 1.15rem;
	}
	.keyword{color: red;}
</style>

<template>
	<div class="box">
		<div class="header">
			<mt-search v-model="search" cancel-text="取消" placeholder="搜索名字/岗位/部门"></mt-search>
		</div>
		<ul class="list" id="list">
			<li v-for='(item,index) in searchData' @click="addcopy(index,item)">
				<div class="pic">
					<img src="../../resources/images/commission/head_img.png" />
				</div>
				<div class="name">
					<p>{{item.name}}</p>
					<p>{{item.value}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				search: '',
				products: [{
						name: '李三',
						qx: '0',
						id: '1',
						value: '东北一区-销售主管'
					},
					{
						name: '张明',
						qx: '0',
						id: '2',
						value: '东北一区-助理销售主管'
					},
					{
						name: '李四',
						qx: '0',
						id: '3',
						value: '东北二区-销售主管'
					},
					{
						name: '赵三',
						qx: '1',
						id: '4',
						value: '东北二区-销售员'
					},

				],
				addCopy: [],
			}
		},
		methods: {
			addcopy(index, item) { //选择抄送人
				this.addCopy.push(item);
				localStorage.setItem('addCopy', JSON.stringify(this.addCopy));
				this.$router.push({
					path: '/approval'
				});
			},

		},
		mounted() {
			
		},
		computed: {
			searchData: function() {
				var search = this.search;
				if(search) {
					return this.products.filter(function(product) {
						return Object.keys(product).some(function(key) {
							return String(product[key]).toLowerCase().indexOf(search) > -1
						})
					})
				}
				return this.products;
			}
		},
		watch: {
			search(newV,oldV){
				console.log(newV);
				console.log(oldV);
			}
		}
	}
</script>