// const koaRouter = require('koa-router');
import koaRouter from 'koa-router';
import UserCtl from '../controllres/user';
// Layer中的setPrefix方法用于设置路由路径的前缀
const router =new koaRouter({
    prefix: '/user'
})
router.post('/', UserCtl.getCurUser)
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

