const express = require('express');
const { downloadController } = require('../controllers/download-controller/downloadController');

const router = express.Router();

router.get('/download/:fileId', downloadController);

exports.downloadRoute = router;
