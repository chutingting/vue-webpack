// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import Router from 'vue-router';
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import VueResouse from 'vue-resource'
import './static/css/app.css'
import './static/bootstrap.min.css'
import App from './App.vue';
import routes from './router/index.js';



Vue.use(Router);
Vue.use(VueResouse);
Vue.use(ElementUI);

Vue.config.productionTip = false;

const router = new Router({
  routes
})

new Vue({
  //el: '#app',
  //template: '<App/>',
  router,
  //components: { App }
  render: h => h(App)
}).$mount('#app')




/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
