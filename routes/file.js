const express = require('express')
const multer = require('multer')
const Router = express.Router()

const storage = multer.diskStorage({
  destination: './build/image/',
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({storage: storage});

Router.post('/uploadHandler', upload.single('file'), function (req, res, next) {
  console.log(req.file);
  res.send({});
})

const storage1 = multer.diskStorage({
  destination: './build/image/',
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload1 = multer({storage: storage1});

Router.post('/uploadHandlerimage', upload.single('file'), function (req, res, next) {
  console.log(req.file);
  res.send({});
})

module.exports = Router
