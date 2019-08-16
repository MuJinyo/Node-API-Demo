import UserService from '../services/user';
const getCurUser = async (ctx, next) => {
    async ( ctx, next ) => {
    
        let userId;
        console.log('ctx', ctx)
        if(ctx.state.user) {
            userId = ctx.state.user.userId
        } else {
            // 获取token
            const token = ctx.cookies.get('TOKEN')
            if(token){
                try {
                    // 解码token jwt.verify是验证token的合法性
                    const decodeToken = jwt.verify(token, ctx.host.indexOf('dev.') > -1 ? JWT_SECRET_DEV : JWT_SECRET)
                } catch (err) {
                    console.log('登录验证未通过')
                }
            }
        }
    
        let user = await UserService.getUserById(userId);
    
        if (!user) {
          ctx.throw(400, { code: 110, message: '用户信息查询失败' });
        }
        
        ctx.set('Access-Control-Allow-Origin','*')
        ctx.body = {
            id: user._id
        }
    }
  }

  export default {
    getCurUser
  }