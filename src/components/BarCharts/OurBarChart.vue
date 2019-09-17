<template>
  <div class="container">
    <div class="card bg-light">
      <h5 class="card-header">Basic Bar Chart</h5>
      <div class="card-body p-5">
        <canvas id="myChart" height="300px" width="800px"></canvas>
      </div>
    </div> 
  </div>
</template>

<script>
// Imports the different types of charts from the package";
import Chart from "chart.js";

export default {

  methods: {
      initializeChart() {
      const ctx = document.getElementById('myChart').getContext('2d');
      this.chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'bar',
          // The data for our dataset
          data: {
              // Labels for the X axis
              labels: [
                  '0', '1', '2', '3', 
                  '4', '5', '6', '7', 
                  '8', '9', '10'
              ],
              datasets: [{
                  label: 'nps scores',
                  backgroundColor: [
                      'rgb(131, 244, 66, 0.6)',
                      'rgb(255, 102, 153, 0.6)',
                      'rgb(255, 153, 0, 0.6)',
                      'rgb(255, 0, 0, 0.6)',
                      'rgb(64, 64, 64, 0.6)',
                  ],
                  data: [4, 3, 3, 5, 3, 1, 0, 7, 10, 99, 59]
              }]
          },
          // Configure your chart options here
          options: {
              maintainAspectRatio: false,
              responsive: true,
              // Configures settings fo the legend
              legend: {
                  display: false
              },
              // Configures title above chart
              title: {
                  display: true,
                  text: 'NPS Report'
              },
              // Configures the X and Y axes
              scales:{
                  // Allows you to customize the X axis
                  xAxes: [{

                      gridLines: {
                          tickMarkLength: 0,
                      },
                      ticks: {
                          padding: 15,
                      }

                  }],
                  // Allows you to customize the Y axis
                  yAxes: [{

                      gridLines: {
                          tickMarkLength: 0,
                      },
                      ticks: {
                          padding: 15,
                          max: 100,
                          min: 0,
                          stepSize: 10
                      },
                  }]
              }
          }
      })
    }
  },
  mounted() {
      this.initializeChart();
  },
  
};

</script>

<style scoped>

</style>