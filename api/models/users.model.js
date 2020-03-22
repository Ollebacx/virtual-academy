const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Name is required']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator (value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
      }
    },
    // TODO: Make sure unique index works from Mongoose
    unique: [true, 'This is email is registered']
  },
  password: {
    type: String,
    required: true
  },
  birthDate: {
    type: Date,
    required: false
  },
  github: {
    type: String,
    required: false
  },
  mobile: {
    type: Number,
    required: false
  },
  createdAt: {
    type: Number,
    default: Date.now()
  },
  photoURL: String
})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel
