// models/hotelsModel.js
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
});

hotelSchema.plugin(AutoIncrement, { inc_field: 'hotelId' });

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
