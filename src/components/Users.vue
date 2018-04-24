<template>
  <div class="users">
      <h1>hello</h1>
      <ul>
          <!--<li v-for="user in users" v-on:click="user.show=!user.show">-->
        <li v-for="user in users" v-on:click="user.show=!user.show">
              <h2>{{user.name}}</h2>
              <!--<h3 v-show="user.show">{{user.position}}</h3>-->
              <h3 v-show="user.show">{{user.email}}</h3>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'users',
//   属性取值(父传子)，获取app.vue的值
  props:["users"],

// 官方推荐
//   props:{
//      users:{
//         //  当前users传的类型
//          type:Array,
//         //  查看是否为标准的Array
//          required:true
//      }
//   },
  data () {
    return {
        // users:["a","b","c"]
    }
  }
}
</script>

<style scoped>
/*响应式的组件嵌套*/
    .users{
        width: 100%;
        max-width: 1200px;
        margin: 40px auto;
        padding: 0 20px;
        box-sizing: border-box;
    }
    ul{
        /*让所有的li在一行*/
        display: flex;
        /*让所有的li在一个容器*/
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
    }
    li{
        /*如果li只有一个，就一个撑满一整行*/
        flex-grow: 1;
        /*让每一个li宽200*/
        flex-basis: 200px;
        text-align: center;
        padding: 30px;
        border: 1px solid #222;
        margin: 10px;
    }
</style>
