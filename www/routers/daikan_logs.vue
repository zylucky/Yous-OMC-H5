<template>
    <div>
        <div v-for="(item,index) in list">
            <mt-cell style="clear: both;height: 80px;"
                     :to="'daikan_detail/'+item.id"
                     :title="item.gongsi" :label="formDate(item.dakatime)" >
                <span style="float: right;margin-right: 80px;">
                    {{item.renyuan}}
                </span>
            </mt-cell>
            <mt-button plain type="default" v-if="item.ispingjia" style="float: right;margin-right: 20px;height:22px;"  @click="check(item.id)" size="small">查看评价</mt-button>
            <mt-button plain type="default" v-if="!item.ispingjia" style="float: right;margin-right: 20px;height:22px;"  @click="pingjia(item.id)" size="small">客户评价</mt-button>
        </div>
    </div>


</template>
<style>
    @import "../resources/css/reset.css";
</style>
<script>
export default{
    data(){
        return{
            list:[],
        }
    },
    methods:{
        pingjia(id){
            this.$router.push('/daikan_comment_add/'+id);
        },
        check(id){
            this.$router.push('/daikan_comment/'+id);
        },
        formDate(index){
            var newDate = new Date(index);
            return newDate.toLocaleString();
        }
    },
    mounted(){
        let para ={
            cookie:JSON.parse(localStorage.getItem('cookxs')),
        }
        console.log(this.$tpi)
        this.$http.post(this.$tpi+'/yhcms/web/qddaka/getQdDakaForPerson.do',para).then((res)=>{
            var response = JSON.parse(res.data);
            if(response.success==true){
                this.list = response.data;
            }

        });


    }
}
</script>