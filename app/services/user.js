
import User from '../models/user'
const addUser = (data = {}) => {
    return User.create({
        username: data.username || '',
        nickname: data.nickname || '',
        avatar: data.avatar || '',
        gender: data.gender || -1,
        address: data.address || ''
    })
}
export default {
    addUser
}