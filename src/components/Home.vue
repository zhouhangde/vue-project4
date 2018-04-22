<!--1模板：html结构-->
<template>
  <div id="home">
    <h1>{{title}}</h1>
    <!--titleChanged名称必须保持一致与Header中一致,$event为系统固定的-->
    <!--v-bind为绑定-->
    <app-header v-on:titleChanged="updataTitle($event)" v-bind:title="title"></app-header>
    <!--绑定属性值-->
    <users v-bind:users="users"></users>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<!--2行为：处理逻辑-->
<script>
//局部注册组件
import Users from './Users'
import Header from './Header'
import Footer from './Footer'
export default {
  name: 'Home',
  data(){
    return {
        title:"这是一个标题",
        users:[
            // {name:"Herry",position:"web开发",show:false},
            // {name:"Herry",position:"web开发",show:false},
            // {name:"Herry",position:"web开发",show:false},
            // {name:"Herry",position:"web开发",show:false},
            // {name:"Herry",position:"web开发",show:false},
            // {name:"Herry",position:"web开发",show:false},
            // {name:"Herry",position:"web开发",show:false},
            // {name:"Herry",position:"web开发",show:false},
            // {name:"Herry",position:"web开发",show:false}
        ]
    }
  },
  methods:{
    // title为形参
    updataTitle(title){
      // this.title为当前vue对象中的title，将其变成子传过来的值
       this.title = title
    }
  },
  // 局部注册组件，对应引入的组件
  components:{
    // Users（下面可省略users名称,注意名称不要和标签名称重复）
    "users":Users,
    "app-header":Header,
    "app-footer":Footer
  },
  created(){
    // 使用http请求获取网络数据
    this.$http.get("http://jsonplaceholder.typicode.com/users")
    //请求成功获取data数据
    .then((data)=>{
        // console.log(data);
        this.users = data.body;
    })
  }
}
</script>

<!--3样式：解决样式-->
<!--scoped域，可以在标签中增加data-v-id的标识即而增加唯一性，防止样式冲突继承，表示只在当前文件有效-->
<style scoped>
   h1{
     color: purple;
   }
</style>
