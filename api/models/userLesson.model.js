const mongoose = require('mongoose')

const userLessonSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  lesson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'lessons'
  },
  status: {
    type: String,
    enum: ['in_progress', 'to_start', 'completed'],
    default: 'to_start'
  }
})

userLessonSchema.index({ 'user': 1, 'lesson': 1 }, { unique: true }) // eslint-disable-line

const userLessonModel = mongoose.model('userLessons', userLessonSchema)
module.exports = userLessonModel
