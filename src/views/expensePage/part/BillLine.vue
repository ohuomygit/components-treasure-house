<template>
    <div class="billLine">
        <el-table
            :data="monthlyCostData"
            style="width: 100%"
        >
            <el-table-column
              v-for="(item, index) in tabelHeader"
              :key="index"
              :prop="item.prop"
              :label="item.label"
              :fixed="(item.prop === 'date') ? 'left' : false" 
            >
            </el-table-column>
      </el-table>
    </div>
</template>

<script>
import {getMonthData, getSeasonData, getYearData, getMonthlyCostData} from '../config'

export default {
    name: 'billLine',
    data() {
        return {
            monthData: getMonthData(),
            seasonData: getSeasonData(),
            yearData: getYearData(),
        }
    },
    computed: {
        tabelHeader() {
            return [
              {
                label: "时间",
                prop: 'date',
                value: 0,
                tip: ''
              },
              ...this.monthData.list,
              ...this.seasonData.list,
              ...this.yearData.list,
            ]
        },
        monthlyCostData() {
            const list = getMonthlyCostData()
            list.forEach((item, index) => {
              item.date = index + 2 + '月'
            })
            return list
        },
    }
}
</script>
