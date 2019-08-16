import User from '../services/user';
import jwt from 'jsonwebtoken';
import config from 'config';
import bcrypt from 'bcryptjs';

import UserAuth from '../services/user_auth'

const EXPIRES_IN = 3600 * 24 * 365;  // token失效时间
/**
 * 生成AccessToken 令牌
 * 
 */
const generateAccessToken = (userId, expiresIn = EXPIRES_IN) => {
    console.log('jwt', userId)
    return jwt.sign({
        userId
    }, config.get('app.jwtSecret'), {expiresIn})
}
/**
 * 注册 - 邮箱 手机号
 * 
 */
const signup = async (ctx, next) => {
    let authType, nickname;
    let {identifier, password, username} = ctx.request.body
    // console.log('postData-----', ctx.request.body);
    
    // 验证账号是不是存在 从哪里验证？在数据库中查找
    try {
        // 创建新用户
        let newUser = await User.addUser({
            username,
            nickname
        });
        // 创建用户认证
        let newUserAuth = await UserAuth.addUserAuth({
            type: '123',
            identifier,
            credential: bcrypt.hashSync(password, 8)
        });
        ctx.body = {
            status:200,
            msg:'这是post测试的返回数据',
            accessToken: generateAccessToken(newUser._id)
        }
        await next()

    } catch(ex) {
        ctx.throw(400, { code: 10102, message: '创建帐号失败' });
    }
}
// 中间件为undefiled-> https://www.twblogs.net/a/5d40a305bd9eee5174232541/zh-cn
const signin = async (ctx, next) => {
    let { identifier, password } = ctx.request.body;
    console.log('UserAuth', UserAuth)
    const user = await UserAuth.findUserAuth('identifier', identifier);
    console.log('user---', user)
    ctx.body = {
        userId: user._id,
        accessToken: generateAccessToken(user._id)
    }
   
}

export default {
    signup,
    signin
}