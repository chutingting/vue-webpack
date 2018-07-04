<template>
    <div class="nav flex-column nav-pills col-2">
        <!-- <a class="nav-link" v-for="(item,index) in $router.options.routes" :key="index" @click="chooseNav(item)">{{item.name}}</a> -->

        <div class="nav-item dropdown" v-for="(item,index) in $router.options.routes" :key="index">
            <a class="nav-link" :class="[item.children ? 'dropdown-toggle' : '']" @click="chooseNav(item)">{{item.name}}</a>
            <div v-if="item.children">
                <a class="dropdown-item" v-for="(childItem,index) in item.children" :key="index" @click="chooseNav(childItem)">{{childItem.name}}</a>
            </div>
        </div>
    </div>
   
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    chooseNav(item) {
      console.log(item);
      this.$router.push({ path: item.path });
    }
  },
  created(){
      console.log(this.$router.options.routes)
  }
};
</script>
<style>
.nav-link {
  cursor: pointer;
}
</style>
