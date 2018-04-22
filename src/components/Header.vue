<template>
  <header v-on:click="changeTitle">
      <h1>{{title}}</h1>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  props:{
     title:{
         type:String
     }
  },
  data () {
    return {
        // title:"Vue.js"
    }
  },
  methods:{
      changeTitle:function(){
        //   注册事件（类似node中的使用），前为事件名，后为具体的参数内容
          this.$emit("titleChanged","子向父组件传值");
      }
  }
//   钩子函数也为方法，和methods为并集，在其后
//   钩子函数用于调错和解决需求，组件创建开始到结束
//   boforeCreate:function(){
//       alert("组件实例化之前执行的函数");
//   },
//   created:function(){
//       alert("组件实例化完毕，但页面还未显示");
//   },
//   boforeMount:function(){
//       alert("组件挂载前，页面仍未显示，但虚拟Dom已经配置");
//   },
//   mounted:function(){
//       alert("组件挂载后，此方法执行后，页面显示");
//   },
//   boforeUpdate:function(){
//       alert("组件更新前，页面仍未更新，但虚拟Dom已经配置");
//   },
//   updated:function(){
//       alert("组件更新，此方法执行后，页面显示");
//   },
//   boforeDestory:function(){
//       alert("组件销毁前");
//   },
//   destoryed:function(){
//       alert("组件销毁");
//   }
}
</script>

<style scoped>
   header{
       background: lightgreen;
       padding: 10px;
   }
   h1{
       color: #222;
       text-align: center;
   }
</style>
