const express = require('express')
const router = express.Router()
const controller = require('../controllers/usuario')
const veriftoken = require('../lib/verif_token')

router.post('/', veriftoken,controller.create)
router.get('/', veriftoken,controller.retrieve)
router.get('/:id', veriftoken,controller.retrieveOne)
router.patch('/:id', veriftoken,controller.update)
router.delete('/:id', veriftoken,controller.delete)
router.post('/login', controller.login)

module.exports = router