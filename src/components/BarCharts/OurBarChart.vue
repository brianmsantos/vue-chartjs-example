<template>
  <div>
    Promoters
    <br>
    Passives
    <br>
    Detractors
<!-- This is where the bar chart goes. -->

  <bar-chart
    :width="500"
    :height="300"
    :labels="['0', '1', '2', '3', '4']"
    :options="$options.options"
  ></bar-chart>
  </div>
</template>

<script>
import BarChart from './BarChart'
// Datasets
const datasets = {
  label: 'NPS Chart',
  // borderColor: ,
  // backgroundColor: ,
  data: [4, 3, 3, 5, 3, 1, 0, 7, 10, 99, 59]
};

const options = {
  scales: {
    xAxes: [{
      ticks: {
        beginAtZero: true,
      }
    }]
  }
}

export default {
  name: 'our-bar-chart', 
  datasets, 
  options,
  components: {
    BarChart
  },
  data() {

  }
}

</script>