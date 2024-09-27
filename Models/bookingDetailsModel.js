// const mongoose = require('mongoose');
// const AutoIncrement = require('mongoose-sequence')(mongoose);

// const bookingDetailsSchema = new mongoose.Schema({
//   bookingId: {
//     type: Number,
//     unique: true
//   },
//   bookingType: {
//     type: String,
//     required: true
//   },
//   noOfGuests: {
//     type: Number,
//     required: true
//   },
//   noOfAdults: {
//     type: Number,
//     required: true
//   },
//   noOfKids: {
//     type: Number,
//     required: true
//   },
//   primaryGuestDetails: {
//     type: mongoose.Schema.Types.Mixed, // Or define as embedded schema
//     required: true
//   },
//   guestDetails: [mongoose.Schema.Types.Mixed], // Or define as array of embedded schemas
//   checkInDateTime: {
//     type: Date,
//     required: true
//   },
//   checkOutDateTime: {
//     type: Date,
//     required: true
//   },
//   roomId: {
//     type: Number,
//     required: true
//   },
//   hotelId: {
//     type: Number,
//     required: true
//   },
//   duration: {
//     type: String,
//     required: true
//   },
//   modeOfPayment: {
//     type: String,
//     required: true
//   },
//   paidAmount: {
//     type: String,
//     required: true
//   },
//   bookingStatus: {
//     type: String,
//     required: true
//   },
//   balance: {
//     type: String,
//     required: true
//   },
//   totalAmount: {
//     type: String,
//     required: true
//   }
// });

// // Apply auto-increment plugin
// bookingDetailsSchema.plugin(AutoIncrement, { inc_field: 'bookingId' });

// const BookingDetails = mongoose.model('BookingDetails', bookingDetailsSchema);

// module.exports = BookingDetails;
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

// Define booking details schema
const bookingDetailsSchema = new mongoose.Schema({
  bookingId: {
    type: Number,
    unique: true,
  },
  bookingType: {
    type: String,
    required: true,
  },
  noOfGuests: {
    type: Number,
    required: true,
  },
  noOfAdults: {
    type: Number,
    required: true,
  },
  noOfKids: {
    type: Number,
    required: true,
  },
  primaryGuest_Id: {
    type: Number,
    required: true,
  },
  guestDetails: [
    {
      name: { type: String, required: true },
      gender: { type: String, required: true },
      guestIdType: { type: String, required: true },
      guestIdNumber: { type: String, required: true },
    }
  ],
  checkInDateTime: {
    type: Date,
    required: true,
  },
  checkOutDateTime: {
    type: Date,
    required: true,
  },
  roomId: {
    type: Number,
    required: true,
  },
  hotelId: {
    type: Number,
    required: true,
  },
  numOfDays: {
    type: Number, // Stores the number of days for the booking
    required: true,
  },
  duration: {
    type: String,
    default: null,
  },
  modeOfPayment: {
    type: String,
    required: true,
  },
  paidAmount: {
    type: Number,
    required: true,
  },
  bookingStatus: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
});

// Apply auto-increment plugin to bookingId
bookingDetailsSchema.plugin(AutoIncrement, { inc_field: 'bookingId' });

const BookingDetails = mongoose.model('BookingDetails', bookingDetailsSchema);

module.exports = BookingDetails;
