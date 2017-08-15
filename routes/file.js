const express = require('express')
const multer = require('multer')
const router = express.Router()

const storage = multer.diskStorage({
  destination: './build/pdf/',
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({storage: storage});

router.post('/uploadHandler', upload.single('file'), function (req, res, next) {
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

router.post('/uploadHandler1', upload.single('file'), function (req, res, next) {
  console.log(req.file);
  res.send({});
})

module.exports = router
