<style>
    @import "../resources/css/reset.css";
</style>
<template>
    <div>
        <div style="background-color:lightgrey;height: 25px;width: 100%;">渠道信息</div>
        <mt-field label="渠道公司" disabled  placeholder="" v-model="response.gongsi"></mt-field>
        <mt-field label="渠道人员" disabled  placeholder="" v-model="response.renyuan"></mt-field>
        <mt-field label="联系电话" disabled placeholder=""  v-model="response.dianhua"></mt-field>
        <div style="background-color:lightgrey;height: 25px;width: 100%;">房间信息</div>
        <div v-for="(item,index) in response.fangZis" :key="index">
            <mt-field label="带看房源" disabled placeholder="" v-model="item.loupan+'-'+item.loudong+'-'+item.fangjian" ></mt-field>
            <mt-field label="房源地址" disabled placeholder="" v-model="item.fangyuandizhi" ></mt-field>
        </div>

        <mt-field label="打卡地址" disabled placeholder=""  v-model="response.dakadizhi"></mt-field>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                response:{},
            }
        },
        methods:{
            getDetail(){
                this.$http.post(this.$api+'/yhcms/web/qddaka/getQdDaka.do',{id:this.$route.params.id}).then((res)=>{
                    var response = JSON.parse(res.data);
                    if(response.success==true){
                        this.response = response.data;
                    }

                });
            }
        },
        mounted(){
            this.getDetail();
        }
    }
</script>