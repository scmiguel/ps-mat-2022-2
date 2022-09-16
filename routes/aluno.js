const express = require('express')
const router = express.Router()
const controller = require('../controllers/aluno')
const veriftoken = require('../lib/verif_token')

router.post('/', veriftoken,controller.create)
router.get('/', veriftoken,controller.retrieve)
router.get('/:id', veriftoken,controller.retrieveOne)
router.patch('/:id', veriftoken,controller.update)
router.delete('/:id', veriftoken,controller.delete)

module.exports = router