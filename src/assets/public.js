export default {
	install(Vue,options){
		Vue.prototype.close_page=function(){
			pushHistory();
			window.addEventListener("popstate", function(e) {
				//首页点击返回,直接关闭网页
				WeixinJSBridge.call('closeWindow');
			}, false);
			function pushHistory() {
				var state = {
					title: "title",
					url: "#"
				};
				window.history.pushState(state, state.title, state.url);
			}
		};
		Vue.prototype.to_page=function(){//跳转地址重定向到控制台
			var _this = this;
			pushHistory();
			window.addEventListener("popstate", function(e) {
				_this.$router.push({
					path:'/ctrl',
				});
			}, false);
			function pushHistory() {
				var state = {
					title: "title",
					url: "#"
				};
				window.history.pushState(state, state.title, state.url);
			}
		}
	}
}