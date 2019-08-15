<!-- EchartsComponent.vue -->
<template>
  <div class="test">
    <div class="chart_box">
      <div :id="echarts" class="newhome"></div>
    </div>
  </div>
</template>

<script>
// 引入echarts
import echarts from 'echarts'
// import store from 'store'
export default {
  name: 'EchartsComponents',
  props: {
    // 接收父组件传递过来的信息
    chartData: {
      type: Object,
      default: () => []
    }
  },
  data() {
    return {}
  },
  watch:{
    chartData(val){
      this.drawChart()
    }
  },
  methods: {
    drawChart() {
      const vm = this
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById(this.echarts));
      // 绘制图表
      let options ={
        //标题设置
        title: {
          text: this.chartData.text,
          x: 'center',
          y: 'bottom',
          textStyle: {
            fontSize: 16,
            fontWeight: 'bolder',
            color: '#999'
          }
        },
        // 鼠标移动到图上的文字显示
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: [
          {
            name: '销量',
            type: 'pie',
            radius: ['50%', '65%'], //变成空心圆,分别类似于x，y
            // data: [5, 20, 36, 10, 10, 20]

            label: {
              normal: {
                show: false, //隐藏指示文字
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '15',
                  fontWeight: 'bold'
                }
              }
            },
            //饼图的指示线
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.chartData.data
          }
        ]
      }
      myChart.clear();
      myChart.setOption(options);
      // 设置自适应屏幕大小
      //window.onresize = myChart.resize;
      window.addEventListener("resize",function(){
      	myChart.resize();
      });
      this.autoActive(myChart, options);
    },
	  autoActive(chart, option) {
	    this.intervalFun(chart, option)
	  },
	  intervalFun(chart, option) {
	    let dataIndex = -1
	    let dataLen = option.series[0].data.length
	    this.interval = setInterval(() => {
	      chart.dispatchAction({
	        type: 'downplay',
	        seriesIndex: 0,
	        dataIndex
	      })
	      dataIndex = (dataIndex + 1) % dataLen
	      chart.dispatchAction({
	        type: 'highlight',
	        seriesIndex: 0,
	        dataIndex
	      })
	    }, 1000)
	  },
  },
  computed: {
    echarts() {
      return 'echarts' + Math.random() * 100000;
    }
  },
  mounted: function() {
    const vm = this;
    vm.$nextTick(() => {
      vm.drawChart();
    });
  },
  created: () => {}
};
</script>

<style scoped>
.test {
  border: 1px aqua solid;
  width: auto;
  float: left;
  height: auto;
}
.chart_box{
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.newhome{
  width: 240px;
  height: 240px;
}
</style>
