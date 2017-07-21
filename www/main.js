/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue';
import App from './app.vue';
import $ from 'jquery';
import MintUI from 'mint-ui';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import search from './routers/search.vue';
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(MintUI);
Vue.prototype.$api = "http://116.62.71.76:8001/api/GetServiceApiResult" //api地址
Vue.prototype.$resouceUrl = "http://localhost:8081/"  //资源文件地址
Vue.config.debug = true;// 开启debug模式

var router = new VueRouter({
  mode: "history",
  hashbang: false,
  routes: [
    {
      path: '/list',
      component: require('./routers/list.vue'),
      children: [
        {path: "/list/search", component: search}
      ]
    },
    {
      path: '/detail',
      component: require('./routers/detail.vue')
    },
    {
      path: '/order',
      component: require('./routers/order.vue')
    },
    {
      path: '/login',
      component: require('./routers/login.vue')
    },
    {
      path: '/build_msg', //楼盘基础信息
      component: require('./routers/build_msg.vue')
    },
    {
      path: '/parking_msg', //车位信息
      component: require('./routers/parking_msg.vue')
    },
    {
      path: '/property_msg', //物业信息
      component: require('./routers/property_msg.vue')
    },
    {
      path: '/households_msg', //户数信息
      component: require('./routers/households_msg.vue')
    },
    {
      path: '/area_msg', //面积信息
      component: require('./routers/area_msg.vue')
    },
    {
      path: '/image_msg', //图片信息
      component: require('./routers/image_msg.vue')
    },
    {
      path: '/analyse_msg', //楼盘分析信息
      component: require('./routers/analyse_msg.vue')
    },
    {
      path: '/balcony_msg', //座栋基本信息
      component: require('./routers/balcony_msg.vue')
    },
    {
      path: '/elevator_msg', //电梯信息
      component: require('./routers/elevator_msg.vue')
    },
    {
      path: '/area2_msg', //电梯信息
      component: require('./routers/area2_msg.vue')
    },
    {
      path: '/bal_households_msg', //座栋户数信息
      component: require('./routers/bal_households_msg.vue')
    },
    {
      path: '/price_msg', //价格信息
      component: require('./routers/price_msg.vue')
    },
    {
      path: '/rent_msg', //租赁部信息
      component: require('./routers/rent_msg.vue')
    },
    {
      path: '/price_msg', //价格信息
      component: require('./routers/price_msg.vue')
    },
    {
      path: '/property_more_msg', //物业2信息
      component: require('./routers/property_more_msg.vue')
    },
    {
      path: '/house_msg', //房源基本信息
      component: require('./routers/house_msg.vue')
    },
    {
      path: '/renter_msg', //房源租户信息
      component: require('./routers/renter_msg.vue')
    },
    {
      path: '/construct_msg', //房源构造信息
      component: require('./routers/construct_msg.vue')
    },
    {
      path: '/image_more_msg', //房源图片信息
      component: require('./routers/image_more_msg.vue')
    },
    {
      path: '/house_analy_msg', //房源分析信息
      component: require('./routers/house_analy_msg.vue')
    },
    {
      path: '/add_owner', //添加业主
      component: require('./routers/add_owner.vue')
    },
    {
      path: '/add_agent', //添加代理人
      component: require('./routers/add_agent.vue')
    },
    {
      path: '/agenter_msg', //房源代理人信息
      component: require('./routers/agenter_msg.vue')
    },

    {
      path: '/need_task', //待办任务
      component: require('./routers/need_task.vue')
    },

    {
      path: '/doc_attach', //跟进中列表
      component: require('./routers/doc_attach.vue')
    },
    {
      path: '/my_distri_list', //我派发的列表
      component: require('./routers/my_distri_list.vue')
    },
    {
      path: '/work_detail', //工单详情
      component: require('./routers/work_detail.vue')
    },
    {
      path: '/attach_record', //跟进记录
      component: require('./routers/attach_record.vue')
    },

    {
      path: '*',
      component: require('./routers/login.vue')
    }

  ]
});

new Vue({
  el: '#app',
  router: router,
  render: function (h) {
    return h(App)
  }
});
