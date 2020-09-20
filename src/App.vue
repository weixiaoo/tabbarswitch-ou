<template>
  <div id="app">
     <main-layout></main-layout>
  </div>
</template>

<script>
import MainLayout from './layouts/MainLayout'

export default {
  name: 'App',
  components:{
    MainLayout
  }
}
</script>

<style scoped>
@import './assets/css/base.css';
</style>
