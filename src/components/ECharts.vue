<template>
    <div :id="eleID" :style="`width:${eleWidth}px;height:${eleHeight}px`"></div>
  </template>
  
  <script>
  import * as echarts from 'echarts';
  
  export default {
      name: 'eCharts',
      props: {
          eleID: {
            type: String,
            required: true
          },
          eleWidth: {
            type: [String, Number],
            default: 'auto'
          },
          eleHeight: {
            type: [String, Number],
            default: 'auto'
          },
          option: {
            type: Object,
            required: true
          }
      },
      data() {
          return {
              myChart: ''
          }
      },
      mounted(){
          this.init()
      },
      watch: {
        option: {
          handler () {
            this.myChart.setOption(this.option)
          },
          deep: true,
          immediate: false,
        }
      },
      methods: {
        init() {
          // 基于准备好的dom，初始化echarts实例
          this.myChart = echarts.init(document.getElementById(this.eleID));
          this.myChart.setOption(this.option);
        }
      }
  }
  </script>