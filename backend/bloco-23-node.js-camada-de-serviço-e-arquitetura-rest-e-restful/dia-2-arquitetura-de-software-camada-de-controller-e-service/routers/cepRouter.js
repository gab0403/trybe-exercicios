const express = require('express');

const router = express.Router();

const cepController = require('../controllers/cepController')

router.get('/ping', cepController.getAll);
router.get('/cep/:cep', cepController.findAddressByCep)
router.post('/cep', cepController.create);

module.exports = router;
