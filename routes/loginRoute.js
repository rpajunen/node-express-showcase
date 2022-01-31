const express = require('express');
const { loginController } = require('../controllers/login-controller/loginController');

const router = express.Router();

router.post('/login', loginController);

exports.loginRouter = router;
