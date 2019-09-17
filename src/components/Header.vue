<template>
  <div>
    <router-link to="/" tag="li" active-class="active" exact><button type="button" class="btn btn-outline-dark">Home</button></router-link>

    <router-link to="/LineCharts" tag="li"><button type="button" class="btn btn-outline-success">Line Charts</button></router-link>

    <router-link to="/barCharts" tag="li"><button type="button" class="btn btn-outline-warning">Bar Charts</button></router-link>
  </div>
    
</template>