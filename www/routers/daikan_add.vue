<template>
    <div>
        <mt-field label="渠道公司"  placeholder="" v-model="company"></mt-field>
        <mt-cell
                v-show="companyShow"
                v-for="item in companyList"
                :title="item.gsname"
                @click.native="fuzhi0(item)">
        </mt-cell>
        <mt-field label="渠道人员"  placeholder="" v-model="person"></mt-field>
        <mt-cell
                v-for="item in personList"
                :title="item.title"
                :value="item.value"
                @click.native="fuzhi1(item)">
        </mt-cell>
        <mt-field label="渠道联系电话" placeholder=""  v-model="tel"></mt-field>
        <mt-field label="带看房源"  placeholder="楼盘"  v-model="loupan"></mt-field>
        <mt-cell
                v-for="item in loupanList"
                :title="item.title"
                :value="item.value"
                @click.native="fuzhi2(item)">
        </mt-cell>
        <mt-field label=""  placeholder="楼栋"  v-model="loudong"></mt-field>
        <mt-cell
                v-for="item in loudongList"
                :title="item.title"
                :value="item.value"
                @click.native="fuzhi3(item)">
        </mt-cell>
        <mt-field label=""  placeholder="房号"  v-model="fanghao"></mt-field>
        <mt-cell
                v-for="item in fanghaoList"
                :title="item.title"
                :value="item.value"
                @click.native="fuzhi4(item)">
        </mt-cell>
        <mt-field label="房源地址" placeholder=""  v-model="fy_address"></mt-field>
        <mt-field label="打卡地址" placeholder=""  v-model="dk_address"></mt-field>
        <mt-field label="说明" placeholder="" rows="4" type="textarea" v-model="info"></mt-field>
    </div>
</template>
<style>

</style>
<script>
import wx from 'weixin-js-sdk'
export default{
    created(){
        this.$http.get('http://omc.urskongjian.com/yhcms/web/weixin/share.do?url='+document.URL, {url: document.URL}).then((response) => {
            let res = response.data
            if (res.code === '04') {
                return
            }
            let wxjssdk = JSON.parse(res);
            wx.config({
                debug: false,
                appId: wxjssdk.appId,
                timestamp: wxjssdk.timestamp,
                nonceStr: wxjssdk.nonceStr,
                signature: wxjssdk.signature,
                jsApiList: ['getLocation','openLocation']
            })
            wx.ready(function () {
                // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
                wx.getLocation({
                    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                    success: function (res) {
                        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                        var speed = res.speed; // 速度，以米/每秒计
                        var accuracy = res.accuracy; // 位置精度
                        this.dk_address = latitude;
                    }
                });
                wx.checkJsApi({
                    jsApiList: ['getLocation'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
                    success: function(res) {
                        // 以键值对的形式返回，可用的api值true，不可用为false
                        // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
                        //console.log(res)
                    }
                });
            })
            wx.error(p => {
                console.log(p)
            })
        }, (response) => {})
    },
    data(){
        return{
            company:'',
            companyId:'',
            companyList:[],
            companyShow:false,

            person:'',
            personId:'',
            personList:[],
            personShow:false,

            tel:'',

            loupan:'',
            loupanId:'',
            loupanList:[],
            loupanShow:false,

            loudong:'',
            loudongId:'',
            loudongShow:false,
            loudongList:[],

            fanghao:'',
            fanghaoId:'',
            fanghaoList:[],
            fanghaoShow:false,
            fy_address:'',
            dk_address:'',
            info:'',
            search:'',
            result:[],
        }
    },
    watch:{
        company(){
            if(this.company!=""&&!this.companyId){
                this.$http.post('http://116.62.68.26:8080/yhcms/web/qduser/getQdCompany.do',{
                    companyName:this.company
                }).then((res)=>{
                    this.companyList = JSON.parse(res.data).data;
                    this.companyShow = true;
                });
            }
        },
    },
    methods:{
        fuzhi0(item){
            this.companyShow = false;
            this.companyId = item.id;
            this.company=item.gsname;
        },
        fuzhi1(item){

        },
        fuzhi2(item){

        },
        fuzhi3(item){

        },
        fuzhi4(item){

        },
    },
    mounted(){

    }
}
</script>