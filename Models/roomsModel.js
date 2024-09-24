const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

// Define the Room schema
const roomSchema = new mongoose.Schema({
  roomNo: {
    type: Number,
    required: true
  },
  roomType: {
    type: String, // using String for roomType, similar to varchar
    required: true,
    default: null
  },
  price: {
    type: Number, // price as an integer
    required: true

  },
  hotelId: {
    type: Number,
    required: true,
    ref: 'Hotel' // Reference to Hotel schema
  }
});

// Apply the auto-increment plugin to create an auto-incrementing roomId
roomSchema.plugin(AutoIncrement, { inc_field: 'roomId' });

// Create and export the Room model
const Room = mongoose.model('Room', roomSchema);
module.exports = Room;
