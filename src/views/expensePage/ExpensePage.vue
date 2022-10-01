<template>
  <div class="expense">
    <div class="title">花费分析页面</div>
    <CarouselPage>
      <ExpenseCard :data="monthData" />
      <ExpenseCard :data="seasonData" />
      <ExpenseCard :data="yearData" />
    </CarouselPage>
    <el-table
      :data="monthlyCostData"
      style="width: 100%">
      <el-table-column
        v-for="(item, index) in tabelHeader"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :fixed="(item.prop === 'date') ? 'left' : false" 
      >
      </el-table-column>
    </el-table>
    <div>
      {{`${expenseTotal.total}(每年的总花费) = ${expenseTotal.monthTotal}(每月的必要支出)*12+${expenseTotal.seasonTotal}(每季的必要支出)*4+${expenseTotal.seasonTotal}(每年的必要支出)*1`}}<br />
      {{`每月的平均花费为：${(expenseTotal.total /12).toFixed(2)}`}}
    </div>
  </div>
</template>

<script>
import {getMonthData, getSeasonData, getYearData, getMonthlyCostData} from './config'
import CarouselPage from '@/components/CarouselPage.vue'
import ExpenseCard from './components/ExpenseCard.vue'
export default {
    name: 'ExpensePage', 
    components: {
      CarouselPage,
      ExpenseCard,
    },
    data() {
      return {
        monthData: getMonthData(),
        seasonData: getSeasonData(),
        yearData: getYearData(),
      }
    },
    computed: {
      expenseTotal() {
        let monthTotal = this.monthData.list.reduce((prev, item) => {return prev + item.value} ,0)
        let seasonTotal = this.seasonData.list.reduce((prev, item) => {return prev + item.value} ,0)
        let yearTotal = this.yearData.list.reduce((prev, item) => {return prev + item.value} ,0)
        let total = monthTotal * 12 + seasonTotal * 4 + yearTotal
        return {
          monthTotal,
          seasonTotal,
          yearTotal,
          total
        }
      },
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
          // {
          //   label: "其他",
          //   prop: 'other',
          //   value: 0,
          //   tip: ''
          // }
        ]
      },
      monthlyCostData() {
        const list = getMonthlyCostData()
        let springData = {}
        let summerData = {}
        let autumnData = {}
        let winterData = {}
        list.forEach((item, index) => {
          if(index >= 0 && index <= 2) { 
            if(!Object.keys(springData).length) {
              springData = {...item}
            } else {
              Object.keys(springData).forEach(each => {
                springData[each] = springData[each] + item[each]
              })
            }
          } else if (index >= 3 && index <= 5) {
            if(!Object.keys(summerData).length) {
              summerData = {...item}
            } else {
              Object.keys(summerData).forEach(each => {
                summerData[each] = summerData[each] + item[each]
              })
            }
          } else if (index >= 6 && index <= 8) {
            if(!Object.keys(autumnData).length) {
              autumnData = {...item}
            } else {
              Object.keys(autumnData).forEach(each => {
                autumnData[each] = autumnData[each] + item[each]
              })
            }
          } else {
            if(!Object.keys(winterData).length) {
              winterData = {...item}
            } else {
              Object.keys(winterData).forEach(each => {
                winterData[each] = winterData[each] + item[each]
              })
            }
          }
          item.date = index + 2 + '月'
        })
        if(list.length >= 3) {
          springData.date = '春'
          list.splice(3, 0, {...springData})
        }
        if(list.length >= 7) {
          summerData.date = '夏'
          list.splice(7, 0, {...summerData})
        }
        if(list.length >= 11) {
          autumnData.date = '秋'
          list.splice(11, 0, {...autumnData})
        }
        if(list.length >= 15) {
          winterData.date = '冬'
          list.splice(15, 0, {...winterData})
        }
        console.log(springData, summerData, autumnData, winterData)
        list.forEach(item => {
          Object.keys(item).forEach(each => {
            // console.log(item[each])
            item[each] = (typeof item[each] === 'number') ? item[each].toFixed(2) : item[each]
          })
        })
        return list
      }
    }
}
</script>

<style lang="scss" scoped>
.expense{
  .title{
    font-size: 32px;
    line-height: 32px;
    margin-bottom: 16px;
  }
}
</style>>