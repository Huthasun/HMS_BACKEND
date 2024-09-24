const express = require('express');
const router = express.Router();
const bookingController = require('../Controllers/bookings.controllers');

// Route for creating a booking
router.post('', bookingController.createBooking);

module.exports = router;
