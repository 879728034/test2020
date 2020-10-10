<template>
  <div>
    <router-view/>
    <!-- <diyaxios></diyaxios>33 -->
  </div>
</template>

<script>
import Vue from 'vue'
import diyaxios from '@/components/diyAxios.vue'
export default {
  name: 'App',
  components: {
    diyaxios
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
