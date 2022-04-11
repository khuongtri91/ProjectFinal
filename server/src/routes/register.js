const express = require('express');
const router = express.Router();
const RegisterController = require('../controller/registerController');

router.post('/addNewUser', RegisterController.addNewUser);

module.exports = router;