// Routes/hotelRoutes.js
const express = require('express');
const router = express.Router();
const hotelController = require('../Controllers/hotel.controllers'); // Make sure this path is correct

// Define routes and link them to controller functions
router.post('/create', hotelController.createHotel);
router.get('/getall', hotelController.getAllHotels);
router.get('/:hotelId', hotelController.getHotelById);

module.exports = router;
