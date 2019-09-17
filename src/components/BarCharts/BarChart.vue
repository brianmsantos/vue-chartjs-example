<template>
    <canvas ref="ourChart " :width="width" :height="height"></canvas>
</template>

<script>
import Chart from 'chart.js';

export default {
    name: 'our-bar-chart',
    props: {
    // The canvas's width.
    width: {
      type: Number,
      validator: value => value > 0
    },

    // The canvas's height.
    height: {
      type: Number,
      validator: value => value > 0
    },

    // The chart's data.labels
    labels: Array,

    // The chart's data.datasets
    datasets: {
      type: Array,
      required: true
    },

    // The chart's options.
    options: Object
  },
  data(){
    return {
      // Data that will hold the Chart.js instance.
      chart: null
    };
  },
  mounted() {
    // Store the created instance.
    this.chart = new Chart(this.$refs.ourChart, {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: this.datasets
      },
      options: this.options
    });
  },
  beforeDestroy () {
    // Don't forget to destroy the Chart.js instance.
    if (this.chart) {
      this.chart.destroy()
    }
  }
}
</script>