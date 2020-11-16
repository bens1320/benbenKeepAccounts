<template>
  <div class="wrapper" ref="wrapper">

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import echarts, {EChartOption} from 'echarts';

@Component
export default class Charts extends Vue {
  @Prop() options?: EChartOption;

  mounted() {
    if (this.options === undefined) {
      return console.error('options 为空');
    }
    console.log(this.options);
    const chart = echarts.init(this.$refs.wrapper as HTMLDivElement);
    chart.setOption(this.options);
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  height: 400px;
}
</style>