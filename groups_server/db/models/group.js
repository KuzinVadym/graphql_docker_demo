let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

const groupSchema = new mongoose.Schema({
  name: String,
  members: Number,
  description: String
});

module.exports = mongoose.model('Group', groupSchema);
