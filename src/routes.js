import Home from './components/Home.vue';
import Header from './components/Header.vue';
import LineCharts from './components/LineCharts/LineChart.vue'
import BarCharts from './components/BarCharts/BarChart.vue'

export const routes = [
    
  // Default page set by ''
  { path: '', component: Home},

  { path: '', component: Header},
  
  { path: '/LineCharts', component: LineCharts},

  { path: '/BarCharts', component: BarCharts},
      
];