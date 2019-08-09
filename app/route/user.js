// const koaRouter = require('koa-router');
import koaRouter from 'koa-router';
// Layer中的setPrefix方法用于设置路由路径的前缀
const router =new koaRouter({
    prefix: '/user'
})
router.get('/', async ( ctx, next ) => {
    let userId;
    console.log('ctx', ctx)
    if(ctx.state.user) {
        userId = ctx.state.user.userId
    }
    ctx.set('Access-Control-Allow-Origin','*')
    let html = `
    <ul>
        <li> <a href="/page/404">哈哈哈哈哈</a></li>
    </ul>
    `
    ctx.body = html
})
router.post('/logout', async () => {
    ctx.set('Access-Control-Allow-Origin','*')
    let html = `
    <ul>
        <li> <a href="/page/404">hello</a></li>
    </ul>
    `
    ctx.body = html   
})
// exports.router = router
export default router

