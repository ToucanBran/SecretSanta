const express = require('express');
const router = express.Router();
const config = require('../config/email');
const nodemailer = require('nodemailer');


router.get('/santas', (req, res, next) => {
    res.send('samtas');
});

module.exports = router;