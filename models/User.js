const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {type:String, unique:true},
  name: String,
  password: String,
}, {timestamps: true});

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;