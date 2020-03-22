const Lesson = require('../models/lessons.model')
const { handleError } = require('../utils')

module.exports = {
  getAllLessons,
  createLesson,
  getOneLesson,
  updateLesson,
  deleteLesson
}

function getAllLessons (req, res) {
  Lesson
    .find()
    .then(lessons => res.json(lessons))
    .catch((err) => handleError(err, res))
}

function createLesson (req, res) {
  Lesson
    .create(req.body)
    .then(lesson => res.json(lesson))
    .catch((err) => handleError(err, res))
}

function getOneLesson (req, res) {
  Lesson
    .findById(req.params.lessonId)
    .then(lesson => res.json(lesson))
    .catch((err) => handleError(err, res))
}

function updateLesson (req, res) {
  Lesson
    .findByIdAndUpdate(req.params.lessonId, req.body, { new: true })
    .then(lesson => res.json(lesson))
    .catch((err) => handleError(err, res))
}

function deleteLesson (req, res) {
  Lesson
    .deleteOne({ _id: req.params.lessonId })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}
