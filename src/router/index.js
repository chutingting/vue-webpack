import Vue from 'vue';
import Router from 'vue-router';
import VueResouse from 'vue-resource'
import Table from "../components/table.vue"
import Demo from "../components/demo.vue"
import Echarts from "../components/echarts.vue"

Vue.use(Router);
Vue.use(VueResouse)

export default new Router({
  routes: [
    {path: '/', redirect: 'table'},  
    {
      path: '/table',
      name: '表格',
      component: Table
    },
    {
      path: '/echarts',
      name: '图表',
      component: Echarts
    },
    {
      path: '/demo',
      name: '第二题&&第三题',
      component: Demo
    }
  ]
})
