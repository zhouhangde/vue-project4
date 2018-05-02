<template>
  <div class="blog">
      <div class="header">
      </div>
      <div class="left">
        <div class="title-head">
           <h3>
             这些主要的样式就实现了我们一个比较美观的两栏博客页面。主要要注意的地方就是margin、padding、float等这几个属性的用法，要明确什么是外边距，什么是内边距，什么是浮动，然后怎么样排版才会比较好看。当然我们做的毕竟只是前端，并没有数据存储的部分，那是后端要考虑的问题。所以这个页面也只是一个“好看”但“没用”的页面。不过从这个最基本的页面，我们能从中学到的东西，毕竟还是不少的。
           </h3>
        </div>
      </div>
      <div class="right">
        <input type="text" class="article"/>
        <input type="text" class="textin"/>
        <input type="button" class="up" value="提交"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'blog',
  data () {
    return {
    };
  },
  methods: {
  }
}
</script>

<style scoped>
   .header{
      margin:0px auto 10px;
      color: #fff;    
      background:rgba(55,130,231,0.8); 
      border: 1px solid #3782E7; 
      text-align: center; 
  }
  .left{
    width: 450px;
    height: 500px;
    margin: 0 0 0 40px;
    float: left;
}
 .title-head h3{
    padding-left: 15px; 
    margin-left: 10px;
    display: block; 
    border-left: 3px solid #3782E7;
  }
  .right{
    height:500px; 
    width: 600px;
    margin: 0 40px; 
    float: right; 
  }
  .article{
    width:500px;
    margin:20px 50px 10px 50px; 
  }
  .textin{
    width:500px;
    height: 350px;
    margin:10px 50px;
  }
  .up{
    float:right;
    margin-right: 50px;
  }
</style>
