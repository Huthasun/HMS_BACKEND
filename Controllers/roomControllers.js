const Room = require('../Models/roomsModel');

exports.createRoom = async (req, res) => {
  try {
    const { roomNo, roomType, price, hotelId } = req.body;
    if (!roomNo || !roomType || !price || !hotelId) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const newRoom = new Room({ roomNo, roomType, price, hotelId });
    const savedRoom = await newRoom.save();
    res.status(201).json(savedRoom);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getRoomPriceById = async (req, res) => {
  try {
      const { roomId } = req.params; // roomId is the room number now
      const room = await Room.findOne({ roomNo: roomId }); // Query by roomNo
      if (!room) {
          return res.status(404).json({ error: 'Room not found' });
      }
      res.status(200).json({ price: room.price });
  } catch (error) {
      console.error("Error fetching room price:", error); // Log the error for debugging
      res.status(500).json({ error: 'Internal server error' });
  }
};
exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find(); // Fetches all room records from the database
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
