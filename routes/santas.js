const express = require('express');
const router = express.Router();

let santasController = require('../controllers/santasController');

router.post('/notify', santasController.emailSantas);

module.exports = router;