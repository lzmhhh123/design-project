const express = require('express')
const Router = express.Router()
const { Password } = require('../db')

Router.post('/login', (req, res) => {
  const { password } = req.body
  Password.find((err, all) => {
    console.log(all);
  })
  Password.findOne({string: password}, (err, one) => {
    if(err || one === null) {
      return res.send({message: 'Incorrect password!'})
    }
    return res.send({message: ''})
  })
})

Router.post('/changepassword', (req, res) => {
  const {password, oldPassword} = req.body
  console.log(password, oldPassword);
  Password.findOne({string: oldPassword}, (err, one) => {
    console.log(one);
    if(err || one === null) {
      return res.send({message: 'old password is incorrect!'})
    }
    one.string = password
    console.log(password);
    one.save(err => {
      if(err) res.status(500).send({message: 'server error!'})
      return res.send({message: 'change successful!'})
    })
  })
})

module.exports = Router
