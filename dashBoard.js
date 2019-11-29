'use strict'

let path = require('path')
let express = require('express')
let dashBoard = express.Router()

dashBoard.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views','dashBoard.html'))
})

module.exports = dashBoard
