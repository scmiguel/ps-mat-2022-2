const express = require('express');
const verifToken = require('../lib/verif_token')

const router = express.Router()
const controller = require('../controllers/professor')

router.post('/',verifToken,controller.create);

router.get('/',verifToken,controller.retrieve);

router.get('/:id',verifToken,controller.retriveOne);

router.patch('/:id',verifToken,controller.update)

router.delete('/:id',verifToken,controller.delete)

module.exports = router