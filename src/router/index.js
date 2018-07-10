import Table from "../pages/table.vue";
import Demo from "../pages/demo.vue";
import Echarts from "../pages/nav1/echarts.vue";
import Promise from '@/pages/nav1/promise.vue'
import Home from "../pages/Home.vue";

let routes = [
  /* {
    path: '/',
    redirect: 'Echarts'
  },
  {
    path: '/echarts',
    name: 'Echarts',
    component: Echarts
  }, */
  {
    path: '/',
    name: '导航一',
    iconCls: 'el-icon-menu',
    component: Home,
    children: [
      {
        iconCls: 'el-icon-time',
        path: '/echarts',
        name: 'Echarts',
        component: Echarts
      },
      {
        iconCls: 'el-icon-share',
        path: '/promise',
        name: 'Promise',
        component: Promise
      }
    ]
  },
  {
    path: '/',
    name: '表格',
    leaf: true,// 没有子节点
    component: Home,
    children: [
      {
        iconCls:'el-icon-setting',
        path: '/table',
        name: '表格',
        component: Table
      }
    ]
  },
  {
    path: '/',
    name: 'upload',
    leaf: true,// 没有子节点
    component: Home,
    children: [
      {
        iconCls:'el-icon-upload',
        path: '/demo',
        name: 'upload',
        component: Demo
      }
    ]
  }
]

export default routes;
// export default new Router({
//   mode:'history', //开启历史模式，不显实#

// })