var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Postschema = new Schema({
  name: String,
  title: String,
  content: String,
  markedContent: String,
  createTime: String,
  updateTime: String,
  comments: Array
});

mongoose.model('Post', Postschema);
