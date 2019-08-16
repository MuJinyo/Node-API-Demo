import koaRouter from 'koa-router';
import auth from '../controllres/auth'
const router = new koaRouter({
    prefix: '/auth'
})

router.post('/signup', auth.signup);
router.post('/signin', auth.signin);
export default router;