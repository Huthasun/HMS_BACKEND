// // models/roomStatusModel.js
// const mongoose = require('mongoose');
// const AutoIncrement = require('mongoose-sequence')(mongoose);

// const roomStatusSchema = new mongoose.Schema({
//   hotelId: {
//     type: Number,
//     required: true,
//     ref: 'Hotel' // Reference to the Hotel schema
//   },
//   roomId: {
//     type: Number,
//     required: true,
//     ref: 'Room' // Reference to the Room schema
//   },
//   roomNo: {
//     type: Number,
//     required: true,
//     unique: true
//   },
//   roomStatus: {
//     type: String,
//     required: true,
//     default: 'vacant' // Default status is 'vacant'
//   },
//   bookingId: {
//     type: Number,
//     default: null
//   },
//   primaryGuestName: {
//     type: String,
//     default: null
//   },
//   totalAmount: {
//     type: String,
//     default: null
//   },
//   paidAmount: {
//     type: String,
//     default: null
//   },
//   balanceAmount: {
//     type: String,
//     default: null
//   },
//   checkoutDuration: {
//     type: String,
//     default: null
//   }
// });

// roomStatusSchema.plugin(AutoIncrement, { inc_field: 'roomStatusId' });

// const RoomStatus = mongoose.model('RoomStatus', roomStatusSchema);

// module.exports = RoomStatus;
// models/roomStatusModel.js
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const roomStatusSchema = new mongoose.Schema({
  hotelId: {
    type: Number,
    required: true,
    ref: 'Hotel' // Reference to the Hotel schema
  },
  roomId: {
    type: Number,
    required: true,
    ref: 'Room' // Reference to the Room schema
  },
  roomNo: {
    type: Number,
    required: true,
    unique: true
  },
  roomStatus: {
    type: String,
    required: true,
    default: 'vacant' // Default status is 'vacant'
  },
  bookingId: {
    type: Number,
    default: null
  },
  primaryGuestName: {
    type: String,
    default: null
  },
  totalAmount: {
    type: String,
    default: null
  },
  paidAmount: {
    type: String,
    default: null
  },
  balanceAmount: {
    type: String,
    default: null
  },
  checkoutDuration: {
    type: String,
    default: null
  },
  CheckOutDateTime:{
    type:Date,
    default:null,
  }
});

roomStatusSchema.plugin(AutoIncrement, { inc_field: 'roomStatusId' });

const RoomStatus = mongoose.model('RoomStatus', roomStatusSchema);

module.exports = RoomStatus;
