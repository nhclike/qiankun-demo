<template>
  <div id="app">
    <span><router-link to="/">点击跳转到父页面</router-link></span>
    <span><router-link to="/vue">点击跳转到子页面</router-link></span>
    <router-view />
    <div id="vue"></div>	<!-- 重点2：子应用容器 id -->

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
