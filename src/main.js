import Vue from 'vue'
import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'
import Axios from 'axios'
import ElementUI from 'element-ui' // 引入element-ui
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import HelloWorld from './components/HelloWorld'
import Login from './components/Login'
import Home from './components/Home'
import TodoList from './components/TodoList'
// import Users from './components/Users'
Vue.prototype.$http = Axios
// Vue.prototype.$http = Axios // 类似于vue-resource的调用方法，之后可以在实例里直接用this.$http.get()等
Vue.config.productionTip = false

//全局注册组件,前面为组件名称，后面为对应的组件
// Vue.component("users",Users)

//使用路由，优化<a>中href的请求，不需要跳转
Vue.use(VueRouter)


//使用http,可全局使用
// Vue.use(VueResource)
Vue.use(ElementUI) // Vue全局使用

//配置路由
const router =new VueRouter({
   routes:[
    //  抓取路径调到指定的组件,设置home为默认入口
     {path:"/",component:Login},
     {path:"/helloWorld",component:HelloWorld},
     {path:"/login",component:Login},
     {path:"/home",component:Home},
     {path:"/todolist",component:TodoList}
   ],
  //  去掉默认路径的#号
   mode:"history"
})

//路由跳转的钩子函数
router.beforeEach((to,from,next) =>{
  const token = sessionStorage.getItem('demo-token');
  if(to.path == '/'){ // 如果是跳转到登录页的
    if(token != 'null' && token != null){
      next('/todolist') // 如果有token就转向home不返回登录页
    }
    next(); // 否则跳转回登录页
  }else{
    if(token != 'null' && token != null){
     Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token; // 全局设定header的token验证，注意Bearer后有个空格
      next() 
    }else{
      next('/') // 否则跳转回登录页
    }
  }
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