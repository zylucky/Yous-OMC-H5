<style>
    @import "../resources/css/reset.css";
    .title{
        height:0.6rem;width: 100%;
        background-color:rgb(235,235,235);
        padding-left: 0.2rem;
        padding-top: 0.1rem;
        color: #333;
        font-weight: 500;
        font-size: 16px;
    }
    .container{
        font-family: "Microsoft YaHei";
    }
</style>
<template>
    <div class="container">
        <div class="title">渠道信息</div>
        <mt-field label="渠道公司" disabled  placeholder="" v-model="response.gongsi"></mt-field>
        <mt-field label="渠道人员" disabled  placeholder="" v-model="response.renyuan"></mt-field>
        <mt-field label="联系电话" disabled placeholder=""  v-model="response.dianhua"></mt-field>
        <div class="title">房间信息</div>
        <div v-for="(item,index) in response.fangZis" :key="index">
            <mt-field label="带看房源" disabled placeholder="" v-model="item.loupan+'-'+item.loudong+'-'+item.fangjian" ></mt-field>
            <!--<mt-field label="房源地址" disabled placeholder="" v-model="item.fangyuandizhi" ></mt-field>-->
        </div>

        <!--<mt-field label="打卡地址" disabled placeholder=""  v-model="response.dakadizhi"></mt-field>-->
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