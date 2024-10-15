const express = require('express');
const router = express.Router();
const bookingController = require('../Controllers/bookings.controllers');

// Route for creating a booking
router.post('', bookingController.createBooking);
router.get('/get_all_bookings',bookingController.getAllBookingGuests)

module.exports = router;
