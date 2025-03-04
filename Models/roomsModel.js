const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

// Define the Room schema
const roomSchema = new mongoose.Schema({
  roomId: { // Auto-incrementing ID
    type: Number,
    unique: true,
    // required: true
  },
  roomNo: {
    type: Number,
    required: true,
  //   unique: true // Ensure room numbers are unique
  },
  roomType: {
    type: String, // Using String for roomType
    required: true,
    default: null
  },
  price: {
    type: Number, // Price as a number
    required: true
  },
  hotelId: {
    type: Number, // This should match the type used in your Hotel schema
    required: true,
    ref: 'Hotel' // Reference to Hotel schema
  }
});

// Add compound index to make (hotelId, roomNo) unique
roomSchema.index({ hotelId: 1, roomNo: 1 }, { unique: true });

// Apply the auto-increment plugin to create an auto-incrementing roomId
roomSchema.plugin(AutoIncrement, { inc_field: 'roomId' });

// Create and export the Room model
const Room = mongoose.model('Room', roomSchema);
module.exports = Room;
 