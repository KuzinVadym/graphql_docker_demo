let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
  vorname: String,
  nachname: String,
  groupId: ObjectId,
  phone: String
});

module.exports = mongoose.model('User', userSchema);
