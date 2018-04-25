const Koa = require('koa');
const app = new Koa();
koa = require('koa-router')();
json = require('koa-json');
logger = require('koa-logger');
auth = require('./server/routes/auth.js'); // 引入auth
api = require('./server/routes/api.js');
jwt = require('koa-jwt');
jsonwebtoken = require('jsonwebtoken'); // 引入koa-jwt

// 两个新依赖，其中path是nodejs原生自带。
const path =require('path');
const serve = require('koa-static');

const historyApiFallback = require('koa-history-api-fallback'); // 引入依赖

app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());



app.use(function* (next){
  let start = new Date;
  yield next;
  let ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(function *(next){  //  如果JWT验证失败，返回验证失败信息
  try {
    yield next;
  } catch (err) {
    if (401 == err.status) {
      this.status = 401;
      this.body = {
        success: false, 
        token: null,
        info: 'Protected resource, use Authorization header to get access'
      };
    } else {
      throw err;
    }
  }
});

app.on('error', function(err, ctx){
  console.log('server error', err);
});



koa.use('/auth', auth.routes()); // 挂载到koa-router上，同时会让所有的auth的请求路径前面加上'/auth'的请求路径。

const secret = 'vue-koa-demo'; // 指定密钥，所有走/api/打头的请求都需要经过jwt中间件的验证(?暂不知如何测试)
const token = jsonwebtoken.sign("",secret);

koa.use("/api",api.routes()); 

// koa.use("/api",jwt({secret: 'vue-koa-demo'}),api.routes()); 
// 上面为所有走/api/打头的请求都需要经过jwt中间件的验证。secret密钥必须跟我们当初签发的secret一致?上面暂时有问题


app.use(koa.routes()); // 将路由规则挂载到Koa上。

app.use(historyApiFallback()); // 在这个地方加入。一定要加在静态文件的serve之前，否则会失效。

// 静态文件serve在koa-router的其他规则之上 
app.use(serve(path.resolve('dist'))); // 将webpack打包好的项目目录作为Koa静态文件服务的目录

app.listen(8889,() => {
  console.log('Koa is listening in 8889');
});

module.exports = app;