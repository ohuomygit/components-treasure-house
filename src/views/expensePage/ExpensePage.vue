<template>
  <div class="expense">
    <div class="title"><span>花费分析页面</span></div>

    <PartCard title="花费预算">
      <ExpenseBudget />
    </PartCard>

    <PartCard title="账单流水">
      <BillLine />
    </PartCard>

    <PartCard title="用度分析">
      <ExpenseAnalyse />
    </PartCard>

  </div>
</template>

<script>
import PartCard from '@/components/PartCard.vue'
import ExpenseBudget from './part/ExpenseBudget.vue'
import BillLine from './part/BillLine.vue'
import ExpenseAnalyse from './part/ExpenseAnalyse.vue'

export default {
    name: 'ExpensePage', 
    components: {
      PartCard,
      ExpenseBudget,
      BillLine,
      ExpenseAnalyse,
    },
    computed: {
      /*
      xxx() {
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
      */
    }
}
</script>

<style lang="scss" scoped>
.expense{
  .title{
    font-size: 32px;
    line-height: 32px;
    margin:0px auto 16px;
    text-align: center;
  }
}
</style>