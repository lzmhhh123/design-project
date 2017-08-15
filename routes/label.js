const express = require('express')
const Router = express.Router()
const {Label} = require('../db')

Router.post('/asklabel', (req, res) => {
  console.log('haha');
  Label.find((err, labels) => {
    console.log(labels);
    if(err) {
      return res.status(500).send({error: 1, message: 'server error.'})
    }
    return res.send({error: 0, labels})
  })
})

Router.post('/changeLabel', (req, res) => {
  let id = req.body.number
  Label.findOne({id}, (err, label) => {
    if(err) {
      return res.status(500).send({message: 'server error.'})
    }
    label.string = req.body.label
    label.save((err) => {
      if(err) {
        return res.status(500).send({message: 'server error.'})
      }
      return res.send({message: ''})
    })
  })
})

module.exports = Router
