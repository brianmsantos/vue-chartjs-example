<template>
  <div class="box">
    <h2 class="title is-5">Monthly Sales Chart</h2>
    <monthly-sales-chart></monthly-sales-chart>
    <!-- <h2 class="title is-5">NPS Bar Chart</h2>
    <our-bar-chart></our-bar-chart> -->
  </div>
</template>

<script>
import MonthlySalesChart from './components/MonthlySalesChart';
// import OurBarChart from './components/OurBarChart'

export default {
  name: 'app',
  components: {
    // OuBarChart,
    MonthlySalesChart
  }
}
</script>