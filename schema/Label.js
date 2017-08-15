const mongoose = require('mongoose')

const Label = new mongoose.Schema({
  string: {
    type: String
  },
  id: {
    type: String,
    unique: true,
  }
})

module.exports = Label
