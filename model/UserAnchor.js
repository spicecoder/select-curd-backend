const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserAnchorSchema = new Schema({
  user_anchor: {
    type: String,
  },
});
module.exports = mongoose.model('UserAnchor', UserAnchorSchema);
