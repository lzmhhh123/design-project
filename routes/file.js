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

router.post('/uploadHandler1', upload.single('file'), function (req, res, next) {
  console.log(req.file);
  res.send({});
})

router.post('/uploadHandler2', upload.single('file'), function (req, res, next) {
  console.log(req.file);
  res.send({});
})

router.post('/uploadHandler3', upload.single('file'), function (req, res, next) {
  console.log(req.file);
  res.send({});
})

router.post('/uploadHandler4', upload.single('file'), function (req, res, next) {
  console.log(req.file);
  res.send({});
})

router.post('/uploadHandler5', upload.single('file'), function (req, res, next) {
  console.log(req.file);
  res.send({});
})

router.post('/uploadHandler6', upload.single('file'), function (req, res, next) {
  console.log(req.file);
  res.send({});
})

router.post('/uploadHandler7', upload.single('file'), function (req, res, next) {
  console.log(req.file);
  res.send({});
})

router.post('/uploadHandler8', upload.single('file'), function (req, res, next) {
  console.log(req.file);
  res.send({});
})

router.post('/uploadHandler9', upload.single('file'), function (req, res, next) {
  console.log(req.file);
  res.send({});
})

module.exports = router
