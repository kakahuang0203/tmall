<template>
  <div id="app">
  <router-view/>
  <Main-tabbar/>
  </div>
</template>

<script>
import MainTabbar from 'components/content/mainTabbar/MainTabBar'
export default {
  name: 'App',
  components: {
    MainTabbar
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>