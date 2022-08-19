const express = require('express')
const { route } = require('.')
const controller = require('../controllers/alunos')
const router = express.Router()
const conttroller = require('../controllers/alunos')

router.get('/',controller.retrieve)

module.exports = route