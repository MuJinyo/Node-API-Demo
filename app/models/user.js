import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  username: { type: String },
  nickname: { type: String },
  avatar: { type: String },
  gender: { type: Number },
  address: { type: String },
	// mobile: { type: String }
})

export default mongoose.model('user', UserSchema);