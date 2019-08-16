import mongoose from 'mongoose';

const UserAuthSchema = mongoose.Schema({
	type: { type: String, required: true },  // 类型
	state: { type: Boolean, default: false },  // 是否绑定了主账号
	user_id: { type: mongoose.Schema.Types.ObjectId },
	identifier: { type: String },  // 唯一识别用户标识
	credential: { type: String },  // 密码凭证
})

export default mongoose.model('user_auth', UserAuthSchema);