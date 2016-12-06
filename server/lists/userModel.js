var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  email: String,
  picture: String,
  nickname: String,
  name: String
});

module.exports = mongoose.model('User', UserSchema);
