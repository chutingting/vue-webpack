<template>
  <div class="app">

     <!-- <nav-menu></nav-menu> -->
        <router-view></router-view>
</div>
</template>

<script>
import NavMenu from './pages/nav.vue'
export default {
  name: 'App',
  components: {
    NavMenu
  }
}
</script>

<style>
*{font-size: 12px;}
html,body,.app{height: 100%;}
</style>
