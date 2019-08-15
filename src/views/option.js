// option.js
export const option = {
  // title: { text: '简单柱状图' },
  tooltip: {},
  xAxis: {
    data: [],
    name: '产品'
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'bar',
    data: [],
    itemStyle: {
      normal: {
        color: 'rgb(145,199,174)'
      }
    }
  }]
}
