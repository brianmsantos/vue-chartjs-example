<template>
  <div class="box">
    <h2 class="title is-5">NPS Bar Chart</h2>
    <nps-bar-chart></nps-bar-chart>
    <h2 class="title is-5">Monthly Sales Chart</h2>
    <monthly-sales-chart></monthly-sales-chart>
  </div>
</template>

<script>
import MonthlySalesChart from './components/MonthlySalesChart';
import NPSBarChart from './components/NPSBarChart'

export default {
  name: 'app',
  components: {
    NPSBarChart,
    MonthlySalesChart
  }
}
</script>