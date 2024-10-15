const express = require('express');
const router = express.Router();
const guestController = require('../Controllers/primaryGuest.controllers');

// Route for creating primary guest
router.post('/', guestController.createPrimaryGuest);
router.get('/all',guestController.getAllGuests)

module.exports = router;
