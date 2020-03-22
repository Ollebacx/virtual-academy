const router = require('express').Router()

const {
  getUserLessons,
  getUserLesson,
  updateUserLesson,
  addLessonToUser,
  removeLessonFromUser
} = require('../controllers/me.controller')

router.get('/lessons', getUserLessons)
router.get('/lessons/:lessonId', getUserLesson)
router.put('/lessons/:lessonId', updateUserLesson)
router.post('/lessons/:lessonId', addLessonToUser)
router.delete('/lessons/:lessonId', removeLessonFromUser)

module.exports = router
