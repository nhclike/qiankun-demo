<template>
  <div class="app">
    我是子应用的内容
    {{ content }}
    <router-view />
  </div>
</template>


<script>

export default {
  name: 'App',
  props:{
      content: {
          type: String,
          default: 'child没有接收到main的数据'
      }
  },
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
