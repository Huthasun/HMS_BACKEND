const express = require('express');
const router = express.Router();
const bookingController = require('../Controllers/bookings.controllers');

// Route for creating a booking
router.post('', bookingController.createBooking);
router.get('/get_all_bookings',bookingController.getAllBookingGuests)
router.get('/latest-booking-details', bookingController.searchLatestBookingDetails)
router.delete('/deleteGuest/:bookingId', bookingController.deleteBookingGuest);
router.put('/updateBooking/:bookingId', bookingController.updateBookingDetails);
// router.put('/bookings/:id', bookingController.updateBooking);
module.exports = router;
