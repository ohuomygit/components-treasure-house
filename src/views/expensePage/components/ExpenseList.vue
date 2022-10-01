<template>
  <div class="ExpenseList">
    <div class="ExpenseList-headerWrap">
        <span class="ExpenseList-headerWrap-title">{{data.tiltle}}</span>
        <el-tooltip class="item" effect="dark" :content="data.describe" placement="top">
            <i class="el-icon-info"></i>
        </el-tooltip>
    </div>
    <el-table
       v-bind:data="tableData"
    >
        <el-table-column
            v-for="(item, index) in data.list"
            :key="index"
            align="center"
        >
            <template #header>
                <el-tooltip class="item" effect="dark" :content="item.tip" placement="top" :disabled="item.tip ? false : true">
                   <span>{{item.label}}</span> 
                </el-tooltip>
            </template>
            <template #default>
                {{item.value}}
            </template>
        </el-table-column>
        <el-table-column
            label="合计"
            align="center"
        >
            {{data.list.reduce((prev, item) => {return prev + item.value}, 0)}}
        </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
    name: 'ExpenseList',
    props: {
        data: Object,
    },
    data(){
        return {
            tableData: [{}],
        }
    },
    
}
</script>

<style scoped lang="scss">
.ExpenseList{
    box-sizing: border-box;
    width: 100%;
    padding: 20px;
    .ExpenseList-title{
        width: fit-content;
        margin: 0px auto 36px;
        font-size: 30px;
        font-weight: 900;
    }
    .ExpenseList-headerWrap{
        width: fit-content;
        margin: 0px auto 36px;
        .ExpenseList-headerWrap-title{
            font-size: 36px;
            line-height: 100%;
            margin-right: 16px;
            font-weight: 900;
        }
    }
}
</style>