<template>
  <div class="main-layout">
    <div class="content">
      <div class="left">
        <router-link to="/main/one" tag="li"><span class="iconfont">&#xe671;</span>侧边主要</router-link>
        <router-link to="/list" tag="li"><span class="iconfont">&#xe66c;</span>侧边列表</router-link>
        <router-link to="/mine" tag="li"><span class="iconfont">&#xe66b;</span>侧边我的</router-link>
      </div>   
      <div class="right">
        <router-view></router-view>
      </div>   
    </div>
  </div>  
</template>

<script>

  export default {
    name:'MainLayout',
    components: {

    }
  }
</script>

<style scoped>
.main-layout {
  height: 800px;
  width: 100%;
  background-color: #eee;
}
.content {
  height: 800px;
  width: 100%;
  background-color: #eee;
}
.left {
  font-size: 20px;
  float: left;
  width: 10%;
  height: 100%;
  background-color: pink;
  cursor: pointer;
}
.left li {
  list-style: none;
  height: 30px;
  line-height: 30px;
  margin: 20px 0 20px 20px;
}
.iconfont {
  font-size: 20px;
  margin-right: 20px;
  color: rgb(228, 110, 101);
}
.right {
  font-size: 20px;
  float: left;  
  width: 88% ;
  height: 100%;
  background-color: skyblue;
  margin-left: 30px;
}
</style>
