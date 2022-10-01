<template>
  <div class="ExpenseCard">
    <el-card 
        shadow="hover" 
        :style="'height: 100%; display: flex; flex-direction: column;'" 
        :body-style="{paddingBottom: '55px', position: 'relative', flex: 1}"
    >
        <div slot="header" class="card-header">
            <span >{{data.tiltle}}</span>
            <el-tooltip effect="dark" :content="data.describe" placement="top">
                <i class="el-icon-info"></i>
            </el-tooltip>
        </div>
        <div 
            v-for="(item, index) in data.list"
            :key="index"
        >
            <el-tooltip class="item" effect="dark" :content="item.tip" placement="top" :disabled="item.tip ? false : true">
                <span>{{item.label + ':'}}</span>
            </el-tooltip>
            {{item.value}}
        </div>
        <div class="card-footer">
            <span>合计：</span>{{data.list.reduce((prev, item) => {return prev + item.value}, 0)}}
        </div>
    </el-card>
  </div>
</template>

<script>

export default {
    name: 'ExpenseCard',
    props: {
        data: Object,
    },
    data(){
        return {

        }
    },
    
}
</script>

<style scoped lang="scss">
.ExpenseCard{
    width: 250px;
    .card-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .card-footer{
        width: calc(100% - 40px);
        position: absolute;
        left: 20px;
        bottom: 20px;
        border-bottom: 1px solid gray;
    }
}
</style>