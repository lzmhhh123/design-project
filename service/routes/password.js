const express = require('express')
const router = express.Router()
const Password = require('../db')

Router.post('/login', (req, res) => {
  const { password } = req.body
  Password.findOne({string: password}, (err, res) => {
    if(err) {
      return res.status(401).send({message: 'Incorrect password!'})
    }
    return res.send({message: ''})
  })
})

Router.post('/changepassword', (req, res) => {
  const {password, oldpassword} = req.body
  Pass.findOne({string: password}, (err, res) => {
    Password.findOne({string: oldpassword}, (err, res) => {
      if(err) {
        return res.status(401).send({message: 'old password is incorrect!'})
      }
      res.string = password
      res.save(err => {
        if(err) return res.status(500).send({message: 'server error!'})
        return res.send({message: 'change successfully!'})
      })
    })
  })
})

module.exports = Router
