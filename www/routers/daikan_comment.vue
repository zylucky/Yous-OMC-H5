<style scoped lang="less">
    @import "../resources/css/reset.css";
    .comment_btn{
        border-radius:5px;width: 70px;height: 26px;border-size:0.5px ;
    }
    .line_a{
        line-height: 3;border-top:1px solid;border-color: #d9d9d9;
    }
    .line_b{
        line-height: 3;border-top:1px solid;border-color: #d9d9d9;
    }
</style>
<template>
    <div>
        <mt-field label="渠道公司:" placeholder="" disabled v-model="response.gongsi"></mt-field>
        <mt-field label="渠道人员:" placeholder="" disabled v-model="response.renyuan"></mt-field>
        <mt-field label="联系电话:" placeholder="" disabled  v-model="response.dianhua"></mt-field>
        <div style="background-color:rgb(235,235,235);height: 15px;width: 100%;"></div>
        <div v-for="(cell,index1) in response.fangZis"
             :key="index1"
        >
            <mt-cell :title="response.fangZis[index1].loupan+'-'+response.fangZis[index1].loudong+'-'+response.fangZis[index1].fangjian"></mt-cell>
            <div class="line_a">
            <mt-button   type="default" class="comment_btn"  :style="ustyle2" plain>{{cell.manyido1}}</mt-button>
            </div>
            <div class="line_b">
                <mt-button v-if="index<4" v-for="(item,index) in cell.manyido2" :key="index"  :style="ustyle2" plain class="comment_btn">
                    {{item}}
                </mt-button>
            </div>
            <div class="line_b" v-if="index>=4">
                <mt-button v-if="index>=4" v-for="(item,index) in cell.manyido2" :key="index"  :style="ustyle2" plain class="comment_btn">
                    {{item}}
                </mt-button>
            </div>
            <mt-field type="textarea" rows="4" disabled v-model="cell.kehuyijian" placeholder="请填写客户的反馈意见"></mt-field>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                response:{},
                enum1:[],
                enum2:[],
                ustyle2:'width:1.5rem;font-size:0.23rem;margin-left:0.1rem;margin-right: 0.1rem;',
                property:[],
            }
        },
        methods:{
            getEnum(){
                this.$http.post(this.$api+'/yhcms/web/qddaka/getEnum.do',{"key":"manyido1"}).then((res)=>{
                    var response = JSON.parse(res.data);
                    if(response.success==true){
                        this.enum1 = response.data;
                    }
                });
                this.$http.post(this.$api+'/yhcms/web/qddaka/getEnum.do',{"key":"manyido2"}).then((res)=>{
                    var response = JSON.parse(res.data);
                    if(response.success==true){
                        this.enum2 = response.data;
                    }
                });
            },
            getDetail(){
                this.$http.post(this.$api+'/yhcms/web/qddaka/getQdDaka.do',{id:this.$route.params.id}).then((res)=>{
                    var response = JSON.parse(res.data);
                    if(response.success==true){
                        this.response = response.data;
                        this.response.fangZis.forEach((property,index)=>{
                            var obj = {
                                id:property.id,
                                manyido1:'',
                                manyido2:[],
                                kehuyijian:'',
                            };
                            this.property.push(obj)
                        })
                    }

                });
            },
        },
        mounted(){
            this.getEnum();
            this.getDetail();

        }
    }
</script>