<template>
    <div class="DevelopList">
        <el-row v-for="(item, index) in DevelopListData" :key="index" type="flex" :gutter="20">
            <el-col :span="4" class="DevelopList-titleWrap" :style="`background: ${colorList[index]};`"><span>{{item.title}}</span></el-col>
            <el-col>
                 <!-- {{item.children}} -->
                <div v-for="(each, eachIndex) in item.children" :key="eachIndex" class="DevelopList-contentWrap">
                    <!-- {{each}} -->
                    <div v-for="(value, valueIndex) in each.value" :key="valueIndex" :style="`flex: ${value.length}; background: ${colorList[index]};`" class="DevelopList-contentWrap-value"><span>{{value}}</span></div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import {randomColor} from '@/utils/index'
export default {
    name: 'DevelopList',
    props: {
        DevelopListData: {
            type : Array
        }
    },
    data() {
        return {
            colorList: []
        }
    },
    created(){
        this.setColorList(this.DevelopListData.length)
    },
    methods: {
        setColorList(n) {
            for(let i = 0; i < n; i++) {
                this.colorList.push(randomColor())
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.DevelopList{
    span {
        line-height: 1em;
    }
    .DevelopList-titleWrap {
        // box-sizing: content-box;
        display: flex;
        justify-content: center;
        align-items: center;
        // background: yellowgreen;
    }
    .DevelopList-contentWrap{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0px;
        .DevelopList-contentWrap-value{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 10px;
        }
    }
}
</style>