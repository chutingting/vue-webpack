<template>
      <div class="nav flex-column nav-pills col-2"  >
            <a class="nav-link" v-for="(item,index) in $router.options.routes" :key="index" @click="chooseNav(item)">{{item.name}}</a>
      </div>
</template>
<script>
    export default {
       data(){
           return {
           
           }
       },
        methods:{
            chooseNav(item){
                this.$router.push({path:item.path});
            }
        }
    }
</script>
<style>
.nav-link{cursor: pointer}
</style>
