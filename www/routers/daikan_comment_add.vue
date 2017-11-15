<style>
    @import "../resources/css/reset.css";
    .comment_btn{
        border-radius:5px;width: 70px;height: 26px;
    }
    .container{
        font-family: "Microsoft YaHei";
    }
    .line_a{
        line-height: 3;border-top:0.5px solid;border-color: #d9d9d9;
    }
    .btnimg{
        background-image: url(../resources/images/submit.png);
    }
</style>
<template>
    <div class="container">
        <mt-field label="渠道公司:" placeholder="" disabled v-model="response.gongsi"></mt-field>
        <mt-field label="渠道人员:" placeholder="" disabled v-model="response.renyuan"></mt-field>
        <mt-field label="联系电话:" placeholder="" disabled  v-model="response.dianhua"></mt-field>
        <div style="background-color:rgb(235,235,235);height: 15px;width: 100%;"></div>
        <div v-for="(cell,index1) in property"
        :key="index1"
        >
            <mt-cell :title="response.fangZis[index1].loupan+'-'+response.fangZis[index1].loudong+'-'+response.fangZis[index1].fangjian"></mt-cell>
            <div class="line_a">
                <span style="margin-left: 0.2rem">房间是否满意</span>
                <mt-button v-for="(item,index) in enum1" :key="index" type="default" class="comment_btn" @click="setEnum2(item,index1)" :style="property[index1].manyido1==item.enumValue?sstyle1:ustyle1" plain>{{item.enumValue}}</mt-button>
            </div>
            <div class="line_a" v-if="cell.manyido1">
                <span style="margin-left: 0.2rem">选择您{{cell.manyido1}}的地方</span>
                <br>
                <mt-button v-if="index<4" v-for="(item,index) in enum2" :key="index" @click="setEnum(item,index1)" :style="property[index1].manyido2.indexOf(item.enumValue)>-1?sstyle2:ustyle2" plain class="comment_btn">
                    {{item.enumValue}}
                </mt-button>
            </div>
            <div class="line_a" v-if="cell.manyido1">
                <mt-button v-if="index>=4" v-for="(item,index) in enum2" :key="index" @click="setEnum(item,index1)" :style="property[index1].manyido2.indexOf(item.enumValue)>-1?sstyle2:ustyle2" plain class="comment_btn">
                    {{item.enumValue}}
                </mt-button>
            </div>
            <mt-field type="textarea" rows="4" v-model="property[index1].kehuyijian" placeholder="请填写客户的反馈意见"></mt-field>
        </div>
        <div style="width: 100%;text-align: center;margin-top: 1rem;margin-bottom: 2rem;">
            <mt-button
                    class="btnimg"
                    style="
            width: 80%;height: 0.7rem;
            color: white;font-size: 0.3rem;
            " @click="submit()" >提交</mt-button>
        </div>
        <div style="height: 2rem;"></div>

    </div>
</template>
<script>
    import {Toast} from 'mint-ui'; //toast
    import { MessageBox } from 'mint-ui';
    export default{
        data(){
            return {
                response:{},
                enum1:[],
                enum2:[],
                sstyle1:'width:1.5rem;font-size:0.23rem;margin-right:0.6rem;margin-left:0.4rem;background-color:rgb(215,235,255);color:rgb(28,119,212);border-color:lightskyblue;',
                ustyle1:'width:1.5rem;font-size:0.23rem;margin-right:0.6rem;margin-left:0.4rem;background-color:white;',
                sstyle2:'width:1.5rem;font-size:0.23rem;margin-left:0.2rem;margin-right: 0.1rem;background-color:rgb(215,235,255);color:rgb(28,119,212);border-color:lightskyblue;',
                ustyle2:'width:1.5rem;font-size:0.23rem;margin-left:0.2rem;margin-right: 0.1rem;',
                property:[],
                validate:true,
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
            submit(){
                this.property.forEach((item,index)=>{
                    if(!item.manyido1){
                        this.validate = false;
                        MessageBox('提示', '满意度必填');
                        return;
                    }else{
                        this.validate = true;
                    }
                    if(item.manyido2.length==0){
                        this.validate = false;
                        MessageBox('提示', '满意度必填');
                        return;
                    }else{
                        this.validate = true;
                    }
                })
                if(this.validate == false){
                    return;
                }
                this.$http.post(this.$api+'/yhcms/web/qddaka/savePingJia.do', this.property).then((res)=>{
                    var response = JSON.parse(res.data);
                    if(response.success==true){
                        Toast({
                            message: '提交成功',
                            iconClass: 'icon icon-success'
                        });
                        this.$router.push('/daikan_logs');
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