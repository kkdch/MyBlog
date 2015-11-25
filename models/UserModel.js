var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Userschema = new Schema({
  name: String,
  password: String,
  email: String
});

mongoose.model('User', Userschema);
