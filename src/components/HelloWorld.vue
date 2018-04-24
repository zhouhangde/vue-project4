<template>
  <div class="hello">
      <p>{{id}}:{{name}}</p>
  </div>
</template>

<script>
import jsonwebtoken from 'jsonwebtoken' // 我们安装koa-jwt的时候会自动下载这个依赖（解析token）
export default {
  name: 'HelloWorld',
  created(){ // 组件创建时调用
    const userInfo = this.getUserInfo(); // 新增一个获取用户信息的方法
    if(userInfo != null){
      this.id = userInfo.id;
      this.name = userInfo.name;
    }else{
      this.id = '';
      this.name = ''
    }
  },
  data () {
    return {
      name: '', // 用户名改为空
      todos: '',
      activeName: 'first',
      list:[],
      count: 0,
      id: '' // 新增用户id属性，用于区别用户
    };
  },
  methods: {
    getUserInfo(){ // 获取用户信息
      const token = sessionStorage.getItem('demo-token');
      if(token != null && token != 'null'){
        let decode = jsonwebtoken.decode(token); // 解析token
        return decode // decode解析出来实际上就是{name: XXX,id: XXX}
      }else {
        return null
      }
    }
  }
}
</script>

<style scoped>
</style>
