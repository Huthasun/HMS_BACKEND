const Hotel = require('../Models/hotelsModel');

// Create a new hotel
exports.createHotel = async (req, res) => {
  try {
    const { name, address } = req.body;

    if (!name || !address) {
      return res.status(400).json({ error: 'Name and address are required' });
    }

    const newHotel = new Hotel({ name, address });
    const savedHotel = await newHotel.save();
    res.status(201).json(savedHotel);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Retrieve all hotels
exports.getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Retrieve a hotel by its hotelId
exports.getHotelById = async (req, res) => {
  try {
    const { hotelId } = req.params;
    const hotel = await Hotel.findOne({ hotelId });

    if (!hotel) {
      return res.status(404).json({ error: 'Hotel not found' });
    }

    res.json(hotel);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
