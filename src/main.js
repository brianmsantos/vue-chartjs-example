import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';

import { routes } from './routes.js';

Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter ({
  
  // Prevents hashtag from appearing in topbar directory
  mode: 'history',
  routes: routes
});

new Vue({
  
  el: '#app',
  router,
  render: h => h(App)
  
})

