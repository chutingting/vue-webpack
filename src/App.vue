<template>
  <div class="row app">

     <nav-menu></nav-menu>

      <div class="tab-content col-10" >
        <router-view />
      </div>
</div>
</template>

<script>
import NavMenu from './components/nav.vue'
export default {
  name: 'App',
  components: {
    NavMenu
  }
}
</script>

<style>
@import url('./static/bootstrap.min.css');
*{font-size: 12px;}
.app{margin: 20px;}
</style>
