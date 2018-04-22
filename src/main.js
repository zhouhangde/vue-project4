import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
// import Users from './components/Users'

Vue.config.productionTip = false

//全局注册组件,前面为组件名称，后面为对应的组件
// Vue.component("users",Users)

//使用路由，优化<a>中href的请求，不需要跳转
Vue.use(VueRouter)
//使用http,可全局使用
Vue.use(VueResource)

//配置路由
const router =new VueRouter({
   routes:[
    //  抓取路径调到指定的组件,设置home为默认入口
     {path:"/",component:Home},
     {path:"/helloWorld",component:HelloWorld}
   ],
  //  去掉默认路径的#号
   mode:"history"
})


new Vue({
  // 使用router组件
  router,
  el: '#app',
  // template中可以为标签(`可用于pre的作用)，或引入，如果都没有将没有reader，直接结束生命周期
  // template:`
  //   <div id="app">
  //     <h1></h1>
  //   </div>
  //   `,
  template: '<App/>',
  components: { App }
})

// 同上(没有el生命周期将结束)
// new Vue({
//   components: { App },
//   template: '<App/>'
// }).$mount("#app")