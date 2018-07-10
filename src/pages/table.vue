<template>
  <div>
    <!-- <router-view></router-view> -->
    <div >
      <table class="table  table-bordered">
        <thead>
          <tr>
            <th>日期</th>
            <th @click="ckThead">平均ctr (点击排序)</th>
            <th>平均cmp</th>
            <th>平均roi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in listData" :key="index">
            <th>{{item.logDate}}</th>
            <td>{{item.ctr}}</td>
            <td>{{item.ecpm}}</td>
            <td>{{item.roi}}</td>
          </tr>
        </tbody>
      </table>
      <p class="text-right">当前第{{curPage}}页
        <button class="btn btn-sm btn-info" @click="prev">上一页</button>
        <button class="btn btn-sm btn-info" @click="next">下一页</button>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listData: [],
      cacheData: [],
      sortedData: [],
      sortOrder: true,
      curPage: 1,
      pageSize: 5,
      tablePar: true
    };
  },
  watch: {
    $route(to, from) {
      console.log(to, from);
      if (from.path == "/table") {
        this.tablePar = false;
      } else {
        this.tablePar = true;
      }
    }
  },
  methods: {
    getData() {
      this.$http.jsonp("https://pm.linkworld.cn/json/test").then(
        data => {
          this.cacheData = data.body;
          this.sortedData = this.cacheData;
          this.reload();
        },
        function(error) {
          console.log(error);
        }
      );
    },
    reload() {
      this.listData = this.sortedData.slice(
        (this.curPage - 1) * this.pageSize,
        this.curPage * this.pageSize
      );
    },
    //排序
    ckThead() {
      this.sortedData = this.cacheData.sort(
        (m, n) => (m.ctr - n.ctr) * (this.sortOrder ? 1 : -1)
      );
      this.sortOrder = !this.sortOrder;
      this.curPage = 1;
      this.reload();
    },
    //上一页
    prev() {
      if (this.curPage <= 1) {
        return;
      }
      this.curPage--;
      this.reload();
    },
    //下一页
    next() {
      if (this.curPage >= this.cacheData.length / this.pageSize) {
        return;
      }
      this.curPage++;
      this.reload();
    }
  },
  created() {
    this.getData();
    if (this.$route.path != "/table") {
      this.tablePar = false;
    }
  }
};
</script>