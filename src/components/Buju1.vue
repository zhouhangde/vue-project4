<template>
  <div class="buju1 all">
      <div class="header">
          <h3># Welcome to My Blog</h3>
      </div>
      <div class="left">
      </div>
      <div class="right">
      </div>
  </div>
</template>

<script>
export default {
  name: 'buju1',
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
        text-align: center;
    }
   .all{
       width: 1200px;
       height: 650px;
       margin: 0 auto;
       min-height:650px;
   }
   .left{
       width: 450px;
       height: 500px;
       float:left;
   }
   .right{
       width: 500px;
       height: 600px;
       float:right;
   }
</style>
