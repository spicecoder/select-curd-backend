const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserAnchorSchema = new Schema({
  user_anchor: String,
  }, { collection:'suprisedanchor'}
);
module.exports = mongoose.model('UserAnchor2', UserAnchorSchema);



/*


This should do it

var UserInfo = new Schema({
  username : String,
  password : String 
}, { collection: 'userinfo' });




*/