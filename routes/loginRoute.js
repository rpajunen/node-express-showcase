const express = require('express');
const { loginController } = require('../controllers/login-controller/loginController');

const router = express.Router();

router.get('/login', loginController);

module.exports = router;
