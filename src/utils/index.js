export const randomColor = () => {
    let r = Math.floor(Math.random() * 256)
    let b = Math.abs(r -100)
    let g = Math.abs(b -100)
    // return `ragb(${r},${b},${g},1)`
    return `rgba(${r},${b},${g}, 0.5)`
}

export const handlerPieOption = (titleText, seriesData) => {
    let option = {
        title: {
          text: '无月份',
          left: 'center',
          top: '5%',
        },
        legend: {
          type: 'scroll',
          left: 'center',
          bottom: '5%',
        },
        tooltip: {
            trigger: 'item'
        },
        series: [
          {
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '16',
                fontWeight: 'bold'
              }
            },
            data: [
              { value: 0, name: '没有数据' },
            ]
          }
        ]
    }
    titleText && (option.title.text = titleText)
    seriesData && (option.series[0].data = seriesData)
    return option
}

export const handerBarOption = (titleText, xAxisData, seriesUseData, seriesBudgetData) => {
    let option = {
        title: {
            text: '无月份',
            left: 'center',
            top: '5%',
        },
        tooltip: {
            trigger: 'axis',
            show: true,
            formatter: function (params) {
                // console.log(params, params[1].value * 1, !!(params[1].value * 1))
                let obj = {}
                //实际使用的大于了预算了
                if( !!(params[1].value * 1) && (params[0].value *1 > params[1].value * 1)) {
                    obj.color = 'red'
                    obj.text =`超出了${(params[0].value - params[1].value).toFixed(2)}，比率为${(((params[0].value - params[1].value).toFixed(2)/params[1].value)*100).toFixed(2)}%。`
                } else if(!!(params[1].value * 1) && (params[1].value *1 > params[0].value * 1)) {
                    obj.color = 'green'
                    obj.text =`还剩余${(params[1].value - params[0].value).toFixed(2)}，比率为${(((params[1].value - params[0].value).toFixed(2)/params[1].value)*100).toFixed(2)}%。`
                } else {
                    obj.color = ''
                    obj.text =``
                }
                return `<div>
                    <div style="margin-bottom: 5px"><span style="font-weight: 900;">${params[0].axisValueLabel}</span></div>
                    <div>${params[0].marker}<span>${params[0].seriesName}</span><span>${params[0].value}</span></div>
                    <div>${params[1].marker}<span>${params[1].seriesName}</span><span>${params[1].value}</span></div>
                    <div>
                        <span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:${obj.color};"></span>
                        <span>${obj.text}</span>
                    </div>
                </div>`
            }
        },
        xAxis: {
            type: 'category',
            data: xAxisData,
            axisLabel: { interval: 0, rotate: 30 }
        },
          yAxis: {
            type: 'value'
        },
        series: [
            {
                type: 'bar',
                name: '实用',
                data: seriesUseData,
                barWidth: 16,
            },
            {
                type: 'bar',
                name: '预算',
                data: seriesBudgetData,
                barWidth: 20,
                itemStyle: {
                    color: '#B0C4DE',
                },
                z: '-1',
                barGap: '-110%'
            }
        ]
    }
    titleText && (option.title.text = titleText)
    return option
}

export const handerTypeLineOption = (xAxisData, series) => {
    let option ={
        title: {
            text: '趋势图',
            left: 'center',
            top: '5%',
        },
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            type: 'scroll',
            left: 'center',
            bottom: '5%',
        },
        xAxis: {
            type: 'category',
            data: xAxisData,
            axisLabel: { interval: 0, rotate: 30 }
        },
        yAxis: {
            type: 'value'
        },
        series
        //   series: [
        //     {
        //       data: [150, 230, 224, 218, 135, 147, 260],
        //       type: 'line'
        //     }
        //   ]
    }
    return option
}