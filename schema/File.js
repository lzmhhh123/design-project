const mongoose = require('mongoose')

const File = new mongoose().Schema({
  file: {
    type: buffer
  }
  fileName: {
    type: string
  }
})
