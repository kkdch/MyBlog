var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  user: String,
  content: String,
  time: String
});

mongoose.model('Comment', CommentSchema);
