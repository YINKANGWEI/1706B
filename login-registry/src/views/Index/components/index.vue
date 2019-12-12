<template>
  <div>
    <h2>成绩图示表</h2>
    <div :style="{width:'100%',height:'300px',border:'1px solid #000'}" ref="linebox"></div>
  </div>
</template>
<script>
import Echarts from "echarts";
var option = {
  title: {
    text: "成绩图表"
  },
  tooltip: {},
  legend: {
    data: ["技能平均成绩","理论平均成绩"]
  },
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
  },
  yAxis: {},
  series: [
    {
      name: "技能平均成绩",
      type: "bar",
      data: [5, 20, 36, 10, 10, 20]
    }, {
      name: "理论平均成绩",
      type: "bar",
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
};
export default {
  data() {
    return { linebox: null };
  },
  mounted() {
    this.linebox =Echarts.init(this.$refs.linebox) 
    this.linebox.setOption(option);
  }
};
</script>

<style lang="scss" scpoed>
</style>