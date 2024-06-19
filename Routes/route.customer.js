const express = require('express');
const router = express.Router();
const { registerCustomer } = require('../Controllers/controllers.customer'); // Ensure this path is correct

router.post('/customer', registerCustomer);

module.exports = router;
