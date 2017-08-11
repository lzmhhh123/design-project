const mongoose = require('mongoose')
const md5 = require('spark-md5')

const Password = new mongoose.Schema({
  string: {
    type: String
  },
  id: {
    type: String,
    unique: true,
  }
})

module.exports = Password
