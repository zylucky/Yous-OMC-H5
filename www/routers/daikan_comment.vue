<template>
    <div>
        <mt-field label="渠道公司:" placeholder="" disabled v-model="response.gongsi"></mt-field>
        <mt-field label="渠道人员:" placeholder="" disabled v-model="response.renyuan"></mt-field>
        <mt-field label="联系电话:" placeholder="" disabled  v-model="response.dianhua"></mt-field>
        <div style="background-color:lightgrey;height: 15px;width: 100%;"></div>
        <div v-for="(cell,index1) in response.fangZis"
             :key="index1"
        >
            <mt-cell :title="response.fangZis[index1].loupan+'-'+response.fangZis[index1].loudong+'-'+response.fangZis[index1].fangjian"></mt-cell>
            <mt-cell>
                <mt-button   type="default" class="comment_btn"  :style="ustyle1" plain>{{cell.manyido1}}</mt-button>
            </mt-cell>
            <mt-cell>
                <mt-button v-if="index<4" v-for="(item,index) in cell.manyido2" :key="index"  :style="cell.manyido2.indexOf(item)>-1?sstyle2:ustyle2" plain class="comment_btn">
                    {{item}}
                </mt-button>
            </mt-cell>
            <mt-cell v-if="index>=4">
                <mt-button v-if="index>=4" v-for="(item,index) in cell.manyido2" :key="index"  :style="cell.manyido2.indexOf(item)>-1?sstyle2:ustyle2" plain class="comment_btn">
                    {{item}}
                </mt-button>
            </mt-cell>
            <mt-field type="textarea" rows="4" disabled v-model="cell.kehuyijian" placeholder="请填写客户的反馈意见"></mt-field>
        </div>
    </div>
</template>
<style scoped lang="less">
    @import "../resources/css/reset.css";
    .comment_btn{
        border-radius:16px;width: 70px;height: 26px;
    }
</style>
<script>
    export default{
        data(){
            return {
                response:{},
                enum1:[],
                enum2:[],
                sstyle1:'margin-left:3rem;margin-right: 3rem;background-color:lightskyblue;color:dodgerblue;border-color:lightskyblue;',
                ustyle1:'margin-left:3rem;margin-right: 3rem;',
                sstyle2:'margin-left:0.5rem;margin-right: 0.5rem;background-color:lightskyblue;color:dodgerblue;border-color:lightskyblue;',
                ustyle2:'margin-left:0.5rem;margin-right: 0.5rem;',
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
            setEnum2(item,index){
                this.property[index].manyido1 = item.enumValue;
            },
            setEnum(item,index){
                if(this.property[index].manyido2.indexOf(item.enumValue)==-1){
                    this.property[index].manyido2.push(item.enumValue);
                }else{
                    this.property[index].manyido2 = this.property[index].manyido2.filter(t => t != item.enumValue)
                }
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