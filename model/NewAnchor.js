const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserAnchorSchema = new Schema({
  novel_anchor: {
    type: String,
  },
});
module.exports = mongoose.model('newunovelanchor', UserAnchorSchema);
