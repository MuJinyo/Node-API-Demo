// const Koa = require('koa');
import Koa from 'koa';
// const koaRoute = require('koa-router');
import koaRoute from 'koa-router';
const logger = require('koa-logger');
const mongoose = require('mongoose')
const config = require('config');

// const userRoute = require('./route/user.js')
import userRoute from './route/user';
// console.log('userRoute--》', userRoute)
// 这个就是config插件用来获取url的 
mongoose.connect(config.get('mongodb.url'), function (err) {
    if (err) {
      console.error('connect to %s error: ', mongodbUrl, err.message);
      process.exit(1);
    }
  });
mongoose.Promise = global.Promise;


// 连上koa
const app = new Koa();

// const router = koaRoute()
const router = new koaRoute()
/*
  在进行构建应用的时候，我们首要的目标就是建立多个CGI接口以适配不同的业务需求。那么接下来就是需要注册对应的路由

    为了让koa实例使用我们处理后的路由模块。我们需要使用routes方法将路由加入到应用全局的中间件函数中

  */
let home = new koaRoute()

router.use(userRoute.routes(), userRoute.allowedMethods())

app
.use(logger())
.use(router.routes()) // 添加路由中间件
.use(router.allowedMethods()) // 对请求进行一些限制处理
app.listen(3002)

// export default app
