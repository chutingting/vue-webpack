<template>
    <el-container style="height:100%; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: #545c64">
            <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff">
                <template v-for="(item,index) in $router.options.routes">
                    <el-submenu  :key="index" :index="index + ''"  v-if="item.children && !item.leaf">
                        <template slot="title">
                            <i :class="item.iconCls"></i>
                            <span>{{item.name}}</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item v-for="(itemChild,indexChild) in item.children" :key="indexChild" :index="itemChild.path" @click="goRouterPage(itemChild)"><i :class="itemChild.iconCls"></i> {{itemChild.name}}</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item v-if="item.leaf" :key="index" :index="item.children[0].path" @click="goRouterPage(item.children[0])">
                        <i :class="item.children[0].iconCls"></i>
                        <span slot="title">{{item.children[0].name}}</span>
                    </el-menu-item>
                </template>
            </el-menu>
        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>查看</el-dropdown-item>
                        <el-dropdown-item>新增</el-dropdown-item>
                        <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>chutingting</span>
            </el-header>

            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<style>
.el-header {
  background-color: rgb(84, 92, 100);
  color: #fff;
  line-height: 60px;
}
.el-header i{color: #fff;}

.el-aside {
  color: #333;
}
</style>

<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item)
    };
  },
  methods: {
    handleOpen(key, keyPath) {
     // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
    //  console.log(key, keyPath);
    },
    goRouterPage(item){
       this.$router.push({ path: item.path })
    }
  },
  created() {
    console.log(this.$router.options.routes);
  }
};
</script>