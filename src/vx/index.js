import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
	state : {
		scollposion:'',//滚动条位置
		tabzt:'',//tab切换状态
		datas:'',//数据存储1
		datas1:'',//数据存储2
		datas2:'',//数据存储3
		page1:'',//当前页
		page:'',//当前页
		page2:'',//当前页
		smcode:'',//实名认证弹框
		total1:0,
		total2:0,
		total3:0,
		copyData:[],//抄送人
		form_obj: '',//表单数据暂存
		arrImg: [],//图片列表
	},
	mutations:{
		save_img(state,obj){
			state.arrImg = obj;
		},
		form_set(state,obj){
			state.form_obj = obj;
			// localStorage.setItem("form_obj",JSON.stringify(state.form_obj));
		},
		add_copy(state,obj){
			state.copyData.push(obj);//存储抄送人
		},
		del_copy(state,obj){//删除抄送人
			for(var i=0; i<state.copyData.length; i++){
				if(state.copyData[i].id == obj){
					state.copyData.splice(i,1);
				}
			}
		},
		openRed(state,obj){//滚动条位置
			state.scollposion = obj;
		},
		sendObj(state,obj){//tab状态
			state.tabzt = obj;
		},
		saveData(state,obj){//数据1
			state.datas = obj;
		},
		saveData1(state,obj){//数据2	
			state.datas1 = obj;		
		},
		saveData2(state,obj){//数据3	
			state.datas2 = obj;
		},
		savePage(state,obj){//当前页
			state.page1 = obj;
		},
		savePage1(state,obj){//当前页
			state.page = obj;
		},
		savePage2(state,obj){//当前页
			state.page2 = obj;
		},
		setSmcode(state,obj){
			state.smcode = obj;
		},
		settotal1(state,obj){
			state.total1 = obj;
		},
		settotal2(state,obj){
			state.total2 = obj;
		},
		settotal3(state,obj){
			state.total3 = obj;
		},
	}
})