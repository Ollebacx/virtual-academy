const router = require('express').Router()
const { authUser } = require('../utils') // Authenticated Route

const authRouter = require('./auth.router')
const lessonsRouter = require('./lessons.router')
const meRouter = require('./me.router')

router.use('/auth', authRouter)
router.use('/lessons', lessonsRouter)
router.use('/me', authUser, meRouter)

router.get('/whoami', authUser, (req, res) => {
  res.send(`hi there! ${res.locals.user.name}`)
})

module.exports = router
