export default {
	install(Vue,options){
		Vue.prototype.copy_res=function(arr){// 抄送人去重
			for(var i=0;i<arr.length;i++){
			  for(var j=i+1;j<arr.length;j++){
				if(arr[i].id===arr[j].id){
				  arr.splice(j,1);
				  i--;
				}
			  }
			}
			return arr;
		};
		Vue.prototype.close_page=function(){//首页点击返回,直接关闭网页
			pushHistory();
			window.addEventListener("popstate", function(e) {
				if(location.hash == '#/ctrl'){
					WeixinJSBridge.call('closeWindow');
				}
			}, false);
			function pushHistory() {
				var state = {
					title: "title",
					url: "#"
				};
				window.history.pushState(state, state.title, state.url);
			}
		};
		Vue.prototype.to_page=function(linkUrl){//跳转地址重定向到指定页面
			var _this = this;
			pushHistory();
			window.addEventListener("popstate", function(e) {
				_this.$router.push({
					path: linkUrl,//形参跳转的路由名称
				});
			}, false);
			function pushHistory() {
				var state = {
					title: "title",
					url: "#"
				};
				window.history.pushState(state, state.title, state.url);
			}
		};
		Vue.prototype.to_page1=function(linkUrl){//跳转地址重定向到指定页面
			var _this = this;
			pushHistory();
			window.addEventListener("popstate", function(e) {
				_this.openTouch();//打开默认
				_this.$router.push({
					// path: linkUrl,//形参跳转的路由名称
					path: "ctrl",//形参跳转的路由名称
				});
			}, false);
			function pushHistory() {
				var state = {
					title: "title",
					url: "#"
				};
				window.history.pushState(state, state.title, state.url);
			}
		};
		Vue.prototype.to_page_zj=function(linkUrl,gdid,taskid,nodeName){//跳转地址重定向到指定页面(转交)
			var _this = this;
			pushHistory();
			window.addEventListener("popstate", function(e) {
				_this.$router.push({
					path: linkUrl,//形参跳转的路由名称
					query:{
						"gdid": gdid,//工单id
						"taskid": taskid,
						"nodeName": nodeName,//工单当前处理状态
					}
				});
			}, false);
			function pushHistory() {
				var state = {
					title: "title",
					url: "#"
				};
				window.history.pushState(state, state.title, state.url);
			}
		};
		Vue.prototype.to_page_cs=function(linkUrl,gdid){//跳转地址重定向到指定页面(抄送)
			var _this = this;
			pushHistory();
			window.addEventListener("popstate", function(e) {
				_this.$router.push({
					path: linkUrl,//形参跳转的路由名称
					query:{
						"gdid": gdid,//工单id
					}
				});
			}, false);
			function pushHistory() {
				var state = {
					title: "title",
					url: "#"
				};
				window.history.pushState(state, state.title, state.url);
			}
		};
		Vue.prototype.to_page_cs1=function(linkUrl,gdid,taskid,id){//跳转地址重定向到指定页面(抄送)
			var _this = this;
			pushHistory();
			window.addEventListener("popstate", function(e) {
				_this.$router.push({
					path: linkUrl,//形参跳转的路由名称
					query:{
						"gdid": gdid,//工单id
						"taskid": taskid,
						"id": id,//费用id
					}
				});
			}, false);
			function pushHistory() {
				var state = {
					title: "title",
					url: "#"
				};
				window.history.pushState(state, state.title, state.url);
			}
		};
		Vue.prototype.to_page_cs2=function(linkUrl,gdid,taskid,busId,documentaryper,fyid,lpid,zdid,responsible){//跳转地址重定向到指定页面(抄送)
			var _this = this;
			pushHistory();
			window.addEventListener("popstate", function(e) {
				_this.$router.push({
					path: linkUrl,//形参跳转的路由名称
					query:{
						"gdid": gdid,//工单id
						"taskid": taskid,
						"busId": busId,//费用id
						"documentaryper": documentaryper,
						"fyid": fyid,
						"lpid": lpid,
						"zdid": zdid,
						"responsible": responsible
					}
				});
			}, false);
			function pushHistory() {
				var state = {
					title: "title",
					url: "#"
				};
				window.history.pushState(state, state.title, state.url);
			}
		};
		
		
	}
}