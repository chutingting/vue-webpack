import Table from "../pages/table.vue"
import Demo from "../pages/demo.vue"
import Echarts from "../pages/echarts.vue"
import Tablechild from "../pages/tableChild.vue"
import Home from "../pages/Home.vue"

let routes = [
  {
    path: '/',
    redirect: 'demo'
  },
  {
    path: '/table',
    name: '表格',
    component: Table,
    children: [{
      path: '/table/tablechild',
      name: '子页面',
      component: Tablechild
    }]
  },
  {
    path: '/echarts',
    name: '图表',
    component: Echarts
  },
  {
    path: '/demo',
    name: 'demo',
    component: Demo
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

export default routes;
// export default new Router({
//   mode:'history', //开启历史模式，不现实#

// })