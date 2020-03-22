const router = require('express').Router()

const {
  getAllLessons,
  createLesson,
  getOneLesson,
  updateLesson,
  deleteLesson
} = require('../controllers/lessons.controller')

router.get('/', getAllLessons)
router.post('/', createLesson)
router.get('/:lessonId', getOneLesson)
router.put('/:lessonId', updateLesson)
router.delete('/:lessonId', deleteLesson)

module.exports = router
