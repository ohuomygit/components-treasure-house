<template>
    <div class="expenseAnalyse">
      <div class="filter">
        <el-button
          v-for="(item, index) in month"
          :key="index"
          size="mini"
          :disabled="!item.isLive"
          :style="`${item.isClick ? 'background: green; color: white' : ''}`"
          @click="() => {
            clickMonth(index)
          }"
        >
          {{item.label}}
        </el-button>
      </div>
      <div class="content">
        <ECharts :eleID="'pie-echarts'" :option="pieOption"/>
        <ECharts :eleID="'bar-echarts'" :option="barOption"/>
        <ECharts :eleID="'line-echarts'" :option="lineTypeOption"/>
      </div>
    </div>
</template>

<script>
import {getMonthData, getSeasonData, getYearData, getMonthlyCostData, getMonth} from '../config'
import ECharts from '@/components/ECharts.vue'
import {handlerPieOption, handerBarOption, handerTypeLineOption} from '@/utils/index'

export default {
    name: 'expenseAnalyse',
    components: {
      ECharts,
    },
    data() {
        return {
          month: getMonth(),
          pieOption: {},
          barOption: {},
          lineTypeOption: {}
        }
    },
    watch: {
      month: {
        handler() {
          this.handOption()
        },
        deep: true,
        immediate: true
      }
    },
    methods: {
      clickMonth(monthI) {
        this.month = this.month.map((item, index) => {
          if(index === monthI) {
            item.isClick = !item.isClick
          }
          return item
        })
      },
      handOption() {
        //处理标题
        let titleText = ''
        let monthXAxis = []
        this.month.forEach((item, index) => {
          if(item.isClick){
            titleText = titleText + (index + 2) + '、'
          }
          if(item.isLive){
            monthXAxis.push(item.label)
          }
        })
        titleText && (titleText = titleText.slice(0, titleText.length-1) + '月')
        //处理数据
        const clickMonthN = titleText.length / 2
        let list = [...getMonthData().list, ...getSeasonData().list, ...getYearData().list]
        list.forEach((item, itemIndex) => {
          //useTotal
          if(itemIndex < 5) {
            item.BudgetTotal = item.value * clickMonthN
          } else if( itemIndex < 7) {
            item.BudgetTotal = item.value * (clickMonthN ? Math.ceil(clickMonthN / 3) : 0)
          } else {
            item.BudgetTotal = item.value * (clickMonthN ? 1 : 0)
          }
          item.BudgetTotal = item.BudgetTotal.toFixed(2)
          
          //useTotal
          item.useTotal = getMonthlyCostData().reduce((prev, each, index) => {
            // console.log('getMonthlyCostData', prev, each, index)
            return prev + (this.month[index].isClick ? each[item.prop] : 0)
          }, 0)
          item.useTotal = item.useTotal.toFixed(2)
          
          //serie
          item.serie = {}
          item.serie.type = 'line'
          item.serie.name = item.label
          item.serie.data = getMonthlyCostData().map(each => each[item.prop])
        })
        console.log('调用handOption', titleText, list)
        //选取参数
        let seriesData = []
        let xAxisData = []
        let seriesUseData =[]
        let seriesBudgetData =[]
        let typeLineSeries = []
        list.forEach(item => {
          seriesData.push({
            name: item.label,
            value: item.useTotal
          })
          xAxisData.push(item.label)
          seriesUseData.push(item.useTotal)
          seriesBudgetData.push(item.BudgetTotal)
          typeLineSeries.push(item.serie)
        })
        this.pieOption = handlerPieOption(titleText, seriesData)
        this.barOption = handerBarOption(titleText, xAxisData, seriesUseData, seriesBudgetData)
        this.lineTypeOption = handerTypeLineOption(monthXAxis, typeLineSeries)
      }
    }
}
</script>

<style scoped lang="scss">
    .expenseAnalyse{
      .filter{
        display: flex;
        flex-wrap: wrap;
        background: #fff;
        border-radius: 20px;
        margin-bottom: 16px;
        padding: 10px;
        & > * {
          margin: 10px;
        }
      }
      .content{
        display: grid;
        grid-template-columns: 300px 1fr;
        grid-template-rows: repeat(2, 300px);
        grid-template-areas: "a b" "c c" ;
        grid-gap: 16px;
        #pie-echarts {
          grid-area: a;
        }
        #bar-echarts {
          grid-area: b;
        }
        #line-echarts {
          grid-area: c;
        }
        & > * {
          background: #fff;
          border-radius: 20px;
        }
      }
    }
</style>