var mongoose = require('mongoose');

var ListSchema = new mongoose.Schema({
  title: String,
  description: String,
  items: [{title: String, description: String, url: String}],
  id: String
});

module.exports = mongoose.model('List', ListSchema);
