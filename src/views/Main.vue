<template>
  <div class="main">
      <h3>主要</h3>
     <div class="main-list">
        <router-link to="/main/one" tag="button" replace>one</router-link>
        <router-link to="/main/two" tag="button" replace>two</router-link>
        <router-link to="/main/three" tag="button" replace>three</router-link>
     </div>
      <div class="main-content">
        <router-view></router-view>
    </div>
  </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
    .main-list {
        font-size: 20px;
        background-color: rgb(133, 147, 160);
    }
     .main-list button {
         height: 40px;
         width: 80px;
         font-size: 25px;
         line-height: 40px;
         margin: 0 30px;
         cursor: pointer;
     }
</style>