<template>
  <div>
    Promoters
    <br>
    Passives
    <br>
    Detractors
  </div>

<!-- This is where the bar chart goes. -->
</template>

<script>
import BarChart from './BarChart'
// Datasets
const datasets = {
  // label: ,
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
  name: 'nps-bar-chart', 
  datasets, 
}

</script>