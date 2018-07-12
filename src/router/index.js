import Table from "../pages/table.vue";
import uploadOne from "../pages/upload/upload-one.vue";
import uploadMore from "../pages/upload/upload-more.vue";
import Echarts from "../pages/nav1/echarts.vue";
import PromisePage from '@/pages/nav1/promise.vue'
import Home from "../pages/Home.vue";
import Directive from '../pages/nav1/directive.vue';

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
        component: PromisePage
      },
      {
        iconCls: 'el-icon-share',
        path: '/directive',
        name: 'directive',
        component: Directive
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
    iconCls:'el-icon-upload',
    component: Home,
    children: [
      {
        iconCls:'el-icon-upload',
        path: '/demo',
        name: 'upload-one',
        component: uploadOne
      },
      {
        iconCls:'el-icon-upload',
        path: '/upload-more',
        name: 'upload-more',
        component: uploadMore
      }
    ]
  }
]

export default routes;