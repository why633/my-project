const mongoose = require('mongoose')
const Schema = mongoose.Schema
const articleSchema = new Schema({
  'articleId': { type: String },
  'title': String,
  'avatar': String,
  'description': String,
  'content': String,
  'articleImage': String
})
module.exports = mongoose.model('Article', articleSchema)