<template>
    <div class="expenseBudget">
        <CarouselPage>
            <ExpenseCard :data="monthData" />
            <ExpenseCard :data="seasonData" />
            <ExpenseCard :data="yearData" />
        </CarouselPage>
        <div class="budget-tip">
          <span>{{`每月的平均花费为：${(expenseTotal.total /12).toFixed(2)}`}}</span>
          <br />
          <span>
            {{`${expenseTotal.total}(每年的总花费) = ${expenseTotal.monthTotal}(每月的必要支出)*12+${expenseTotal.seasonTotal}(每季的必要支出)*4+${expenseTotal.yearTotal}(每年的必要支出)*1`}}
          </span>
        </div>
    </div>
</template>

<script>
import {getMonthData, getSeasonData, getYearData} from '../config'
import CarouselPage from '@/components/CarouselPage.vue'
import ExpenseCard from '../components/ExpenseCard.vue'

export default {
    name: 'expenseBudget',
    components: {
        CarouselPage,
        ExpenseCard
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
    }
}
</script>

<style scoped lang="scss">
    .expenseBudget{
      .budget-tip{
        margin-top: 10px;
        font-size: 10px;
        color: grey;
      }
    }
</style>