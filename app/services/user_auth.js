import UserAuth from '../models/user_auth'

/**
 * 创建用户信息
 * @param {*} data
 */

const addUserAuth = (data) => {
    return UserAuth.create(data)
}

const findUserAuth = (type, identifier) => {
    console.log('----', identifier )
    return UserAuth.findOne({
        identifier
    })
}
export default{
    addUserAuth,
    findUserAuth
}