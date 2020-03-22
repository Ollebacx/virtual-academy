const mongoose = require('mongoose')

const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  logoText: String,
  color: String,
  duration: String,
  difficulty: {
    type: String,
    enum: ['Begginer', 'Intermediate', 'Advanced']
  },
  description: String,
  overview: String,
  content: String,
  lessonURL: String,
  lab: String
})

const lessonModel = mongoose.model('lessons', lessonSchema)
module.exports = lessonModel
