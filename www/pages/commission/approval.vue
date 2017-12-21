<style scoped lang='less'>
	@import "../../resources/css/reset.css";
  	@import "../../resources/css/base.less";
  	.box{
  		position: absolute;
  		left: 0;
  		top: 0;
  		right: 0;
  		bottom: 0;
  		overflow: hidden;
  	}
  	.content{
  		position: absolute;
  		left: 0;
  		top: 0;
  		right: 0;
  		bottom: 1rem;
  		overflow: auto;
  		padding-bottom: 1rem;
  		.header{
  			display: flex;
  			display: -webkit-flex;
  			flex-direction: column;
  			justify-content: center;
  			-webkit-justify-content: center;
  			height: 1.5rem;
  			background: #fff;
  			-webkit-box-shadow:0px 2px 4px #E2E1E7; 
  			box-shadow:0px 2px 4px #E2E1E7;
  			padding: 0 0.33rem 0 0.48rem;
  			p:first-child{
  				font-size: @font30;
  				color: #313131;
  				margin-bottom: 0.15rem;
  			}
  			p:last-child{
  				font-size: @font24;
  				color: #979797;
  				i{float: right;color: #3785f2;}
  			}
  		}
  		.list{
  			li{
  				font-size: @font30;
  				color: #323232;
  				padding: 0.2rem 0.33rem 0.2rem 0.48rem;
  				margin-top: 0.2rem;
  				background: #fff;
  				-webkit-box-shadow:0px 2px 4px #dfdee4; 
  				box-shadow:0px 2px 4px #dfdee4;
  				p{
  					margin-bottom: 0.2rem;
  					span:first-child{
  						display: inline-block;
  						width: 1.2rem;
  						text-align: right;
  						color: #969696;
  						margin-right: 0.2rem;
  					}
  				}
  			}
  		}
  		.img_box{
  			position: relative;
  			min-height: 1.85rem;
  			height: auto;
  			font-size: 0.3rem;
  			color: #313131;
  			background: #fff;
  			margin-top: 0.2rem;
  			padding: 0.25rem 0 0.25rem 1.08rem;
  			-webkit-box-shadow:0px 2px 4px #dfdee4; 
  			box-shadow:0px 2px 4px #dfdee4;
  			.pic{margin-bottom: 0.15rem;}
  			.pic i{color: #fd7172;}
			.img_demo{margin: 0 0.3rem 0.2rem 0;}
  		}
  		.plan{
  			background: #fff;
  			margin-top: 0.2rem;
  			padding: 0.2rem 0 0.2rem 0.28rem;
  			font-size: @font28;
  			color:#636363;
  			-webkit-box-shadow:0px 2px 4px #dfdee4; 
  			box-shadow:0px 2px 4px #dfdee4;
  			ul li{position: relative;margin: 0.2rem 0;}
  			ul li:last-child .line{display: none!important;}
  			.plan_t{
  				display: flex;
  				display: -webkit-flex;
  				align-items: center;
  				-webkit-align-items: center;
  				span{display: inline-block;}
  				span:first-child{
  					position: relative;
  					z-index: 9;
  					width: 0.7rem;
  					height: 0.7rem;
  					img{width: 100%;}
  					i{
  						position: absolute;
  						bottom: -0.6rem;
  						left: 50%;
  						margin-left: -0.01rem;
  						display: inline-block;
  						width: 0.02rem;
  						height: 0.6rem;
  						border-left: 1px dashed #3d3331;
  					}
  				}
  				span:nth-child(2){margin: 0 0.25rem 0 0.3rem;}
  				span:last-child{color: #0dae60;}
  			}
  			.plan_b{
  				margin-left: 1rem;
  				color: #313131;
  			}
  			.date{
  				position: absolute;
  				right: 0.33rem;
  				top: 50%;
  				height: 0.3rem;
  				margin-top: -0.15rem;
  				color: #969696;
  			}
  		}
  		/*抄送人*/
  		.copyto{
  			/*height: 2.6rem;*/
  			margin-top: 0.2rem;
  			background: #fff;
  			-webkit-box-shadow:0px 2px 4px #dfdee4; 
  			box-shadow:0px 2px 4px #dfdee4;
  			font-size: @font30;
  			color: #646464;
  			padding: 0.3rem 0.3rem 0.3rem 0.4rem;
  			.tip span:first-child{color: #323232;margin-right: 0.40rem;}
  			.copy_add{
  				width: 0.7rem;
  				height: 0.7rem;
  				border-radius: 50%;
  				font-size: @font54;
  				text-align: center;
  				background: #f0eff5 url(../../resources/images/plus1.png) no-repeat center;
  				background-size: 50% auto;
  			}
  			.copy_list{
  				display: flex;
  				display: -webkit-box;
  				overflow: auto;
  				li{
  					position: relative;
  					height: 1.5rem;
  					margin-right: 0.45rem;
  					p{margin-top: 0.15rem;text-align: center;}
  					span{
  						position: absolute;
  						top: 0.15rem;
  						right: -0.15rem;
  						display: inline-block;
  						width: 0.3rem;
  						height: 0.3rem;
  						border-radius: 50%;
  						background: #010101 url(../../resources/images/close1.png) no-repeat center;
  						background-size: 50%;
  					}
  				}
  				.picimg{
  					width: 0.7rem;
  					height: 0.7rem;
  					img{width: 100%;}
  				}
  			}
  		}
  	}
  	/*合同摘要弹框*/
  	.pop_box{
  		position: fixed;
  		z-index: 9;
  		left: 0;
  		right: 0;
  		bottom: 0;
  		top: 0;
  		background: rgba(0,0,0,0.3);
  		.pop{
			width: 6.75rem;
			margin: 2.1rem auto 0;
			border-radius: 0.08rem;
			-webkit-box-shadow:0px 0px 10px #C5C4C9;
			box-shadow:0px 0px 10px #C5C4C9;
			background: #f0eff5;
			overflow: hidden;
			h3{
				border-top-left-radius: 0.08rem;
				border-top-right-radius: 0.08rem;
				height: 0.95rem;
				line-height: 0.95rem;
				font-weight: bold;
				background: #eeeeee;
				font-size: @font34;
				text-align: center;
				-webkit-box-shadow:0px 0px 8px #d9d9d9;
				box-shadow:0px 0px 8px #d9d9d9;
			}
			.brief{
				li{
					font-size: @font26;
					color: #464646;
					padding: 0.3rem 0.25rem;
					background: #fff;
					margin-bottom: 0.15rem;
					p{margin-bottom: 0.2rem;}
					p span:first-child{
						font-weight: bold;
						color: #323232;
					}
					p span:last-child{float: right;}
				}
				li:last-child,p:last-child{margin-bottom: 0;}
			}
		}
  	}
  	.btn_box{
  		position: absolute;
  		bottom: 0;
  		width: 100%;
  		background: #fff;
  		-webkit-box-shadow:0px -2px 6px #E2E1E7; 
  		box-shadow:0px -2px 6px #E2E1E7;
  		ul{
  			display:flex;
  			display: -webkit-flex;
  			li{
  				position: relative;
  				height: 1rem;
  				width: 50%;
  				line-height: 1rem;
  				font-size: @font30;
  				color: #3586f2;
  				text-align: center;			
  				span{
  					position: absolute;
	  				top: 50%;
	  				right: 0;
	  				margin-top: -0.25rem;
	  				display: inline-block;
	  				width: 1px;
	  				height: 0.5rem;
	  				background: #dcdcdc;
  				}
  			}
  		}
  	}
	.upload_btn{
    	position: relative;
    	background-color: #f0eff5;
	    input{
	      width: 100%;
	      height: 100%;
	      z-index: 99999;
	      opacity: 0;
	    }
  	}
</style>

<template>
	<div class="box">
		<div class="content">
			<div class="header">
				<p>
					<span>建外SOHO</span>
					<span>A-2907</span>
				</p>
				<p>
					<span>合同编号：</span>
					<span>URS-SG-KJ-16090055<i @click="pops(true)">合同摘要</i></span>
				</p>
			</div>
			<ul class="list">
				<li>
					<p>
						<span>渠道账号</span>
						<span>15101622569</span>
					</p>
					<p>
						<span>渠道门店</span>
						<span>远行地产（建外SHHO店）</span>
					</p>
					<p>
						<span>渠道人员</span>
						<span>张三</span>
					</p>
				</li>
				<li>
					<p>
						<span>申领金额</span>
						<span>￥10,000.00</span>
					</p>
					<p>
						<span>佣金信息</span>
						<span>正常</span>
					</p>
					<p>
						<span>计算公式</span>
						<span>月租金x12/0.4</span>
					</p>
				</li>
				<li>
					<p>
						<span>收款方</span>
						<span>远行地产（建外SHHO店）</span>
					</p>
					<p>
						<span>开户行</span>
						<span>招商银行建外大街支行</span>
					</p>
					<p>
						<span>银行账号</span>
						<span>6210 2212 2512 3300</span>
					</p>
				</li>
				<li>
					<p style="margin-bottom: 0;">
						<span>渠道备注</span>
						<span>请尽快审批</span>
					</p>
				</li>
			</ul>
			<!--上传图片-->
			<div class="img_box">
				<p class="pic"><i>*</i>图片</p>
				<!--图片上传-->
				<div class="pic_load clearfix" >
					<div class="img_demo fl pr" v-for='(item,index) in imgList' v-if="item.isdelete==0">
			          <img class="upload_demo_img" :src="item.id==='xxx'? item.url : $prefix + '/' + item.url" alt="" />
			          <i class="delete_icon" tag="fy" @click='delete_img(index, item.id, $event)'></i>
			        </div>
			        <div v-if="fy < 8" class="upload_btn mr10 fl">
			            <input @change='add_img1' id="file_add" tag="fy" type="file" multiple>
			        </div>
				</div>
		        
			</div>
			<!--申请进度-->
			<div class="plan">
				<ul>
					<li v-for="i in 5">
						<p class="plan_t">
							<span><img src="../../resources/images/commission/head_img.png" title="" alt=""/><i class="line"></i></span>
							<span>张三</span>
							<span>发起申请</span>							
						</p>
						<p class="plan_b">的说服力的思考</p>
						<p class="date">12/11 10:10</p>
					</li>
				</ul>
			</div>
			<!--抄送人-->
			<div class="copyto">
				<p class="tip">
					<span>抄送人</span>
					<span>审批通过后，通知抄送人</span>
				</p>
				<ul class="copy_list">
					<li v-for="(item,index) in copyData">
						<p class="picimg"><img src="../../resources/images/commission/head_img.png" title="" alt=""/></p>
						<p class="copy_name">{{item.name}}</p>
						<span v-if='item.qx != 0' @click='delcopy(index)'></span>
					</li>
					<!--添加抄送人按钮-->
					<li @click="addcopy">
						<p class="copy_add"></p>
						<p></p>
					</li>
				</ul>
			</div>
		</div>
		<!--合同摘要弹框-->
		<div class="pop_box" v-if='popshow'  @click="pops(false)">
			<div class="pop">
				<h3>合同摘要</h3>
				<ul class="brief">
					<li>
						<p>
							<span>总租期：</span>
							<span>2017/12/19-2019/12/18</span>
							<span></span>
						</p>
					</li>
					<li>
						<p>
							<span>租期1：</span>
							<span>2017/12/19-2018/12/18</span>
							<span>￥10,000.00</span>
						</p>
						<p>
							<span>租期2：</span>
							<span>2018/12/19-2019/12/18</span>
							<span>￥10,000.00</span>
						</p>
					</li>
					<li>
						<p>
							<span>付款方式：</span>
							<span>2017/12/19-2018/12/18（押二付六）</span>
							<span></span>
						</p>
						<p>
							<span>付款方式：</span>
							<span>2018/12/19-2019/12/18（押二付六）</span>
							<span></span>
						</p>
					</li>
				</ul>
			</div>
		</div>
		<!--按钮-->
		<div class="btn_box">
			<ul>
				<li @click="consent">同意<span></span></li>
				<li @click="turnto">驳回</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				copyData:[],//抄送人
				popshow:false,//合同摘要弹框
				imgList:[],
		        hxList:[],
		        gjList:[],
		        fmList:[],
		        fy: 0,
		        hx: 0,
		        fm: 0,
		        upload: 0,
		        uploaded: 0,
			}
		},
		created(){
			this.copy();
		},
		methods:{
			delcopy(index){
				console.log(index);
				this.copyData.splice(index,1);
				localStorage.setItem('addCopy',JSON.stringify(this.copyData));
			},
			copy(){
				this.copyData = JSON.parse(localStorage.getItem('addCopy'));
				console.log(this.copyData)
			},
			pops(state){//合同摘要
				this.popshow = state;
			},
			delete_img(index, id, event){//删除
		        const tag = $(event.target).attr("tag"), which = {"fy":"imgList", "hx":"hxList", "fm":"fmList"}[tag];
		        if(id !== 'xxx'){
		            this[which][index].isdelete = "1";
		        }
		        else{
		            this[which].splice(index,1);
		            this.upload -= 1;
		        }
		        this[tag] -= 1;
	      },
	      /*图片上传压缩*/
	      add_img1(event){
	        const images = event.target.files;
	        let len = images.length;
	        len = Math.min(len, 8 - this.fy);
	        for(let i = 0; i < len; ++i){
	            this.append_img(images[i]);
	        }
	      },
	      append_img(image){//显示
	        var reader = new FileReader(), type = image.type;
	        const tag = $(event.target).attr("tag"), which = {"fy":"imgList", "hx":"hxList", "fm":"fmList"}[tag];
	        if (!/\/(?:jpeg|jpg|png)/i.test(type)){
	          return;
	        }
	        var that=this;
	        reader.onloadend = () => {
	          let ret;
	          const imgx = new Image();
	          imgx.src = reader.result;
	          imgx.onload = function(){
	              var canvas = document.createElement('canvas');
	              canvas.width = imgx.naturalWidth;
	              canvas.height = imgx.naturalHeight;
	              canvas.getContext("2d").drawImage(imgx, 0, 0);
	              ret = canvas.toDataURL(type, .2);
	
	              const obj = {
	                  id: "xxx",
	                  lpid: that.lpid,
	                  isdelete: 0,
	                  type: 2,
	                  suffix:type,
	                  url: ret 
	              };
	              that[which].push(obj)
	           }
	        }
	        reader.readAsDataURL(image);
	        this[tag] += 1;
	        this.upload += 1;
	      },
	      addcopy(){
	      	this.$router.push({
				path:'/copy_p',//跳转页面
				query:{}
			})
	      },
	      consent(){
	      	this.$router.push({
				path:'/approval_opinion',//跳转页面
				query:{}
			})
	      },
	      turnto(){
	      	this.$router.push({
				path:'/turn_opinion',//跳转页面
				query:{}
			})
	      }
		}
	}
</script>
