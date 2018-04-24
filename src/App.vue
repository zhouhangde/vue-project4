<!--1模板：html结构-->
<template>
  <div id="app">
    <ul>
      <!--对应相应的路由地址，a默认会不断请求加载，会影响使用效果-->
      <!--<li><a href="/">Home</a></li>
      <li><a href="/helloworld">Hollo</a></li>-->

      <!--使用路由跳转做导航-->
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/helloworld">Hollo</router-link></li>
      <li><router-link to="/login">login</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<!--2行为：处理逻辑-->
<script>
export default {
  name: 'App',
  data(){
    return {
    }
  },
  methods:{
  }
}
</script>

<style scoped>
</style>
