const express = require('express');
const router = express.Router();
const hmsController = require('../Controllers/controllers.login.js');

router.post('/login', hmsController.login);
router.get('/logout', hmsController.logout);
router.post('/register', hmsController.register);

module.exports = router;