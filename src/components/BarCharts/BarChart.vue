<template>
  <div class="container">
    <h2 class="py-5">Bar Charts</h2>
    <br>
    <app-our-bar-chart></app-our-bar-chart>
    <br>
    <app-horizontal-bar-chart></app-horizontal-bar-chart>
    <br>
    <app-grouped-bar-chart></app-grouped-bar-chart>
  </div>
</template>

<script>
import OurBarChart from './OurBarChart'
import HorizontalBarChart from './HorizontalBarChart'
import GroupedBarChart from './GroupedBarChart'

export default {
  components: {
    appOurBarChart: OurBarChart,
    appHorizontalBarChart: HorizontalBarChart,
    appGroupedBarChart: GroupedBarChart
  },
}

</script>