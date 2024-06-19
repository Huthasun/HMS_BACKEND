const mongoose = require('mongoose');
const Counter = require('../Counter/model.custmoer.counter');

const CustomerSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  guestName: { type: String, required: true },
  gender: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  guestIdProof: { type: String, required: true },
  guestIdNumber: { type: String, required: true },
  address: { type: String, required: true }
});

CustomerSchema.pre('save', async function(next) {
  if (!this.isNew) {
    next();
    return;
  }

  try {
    const counter = await Counter.findByIdAndUpdate(
      { _id: 'customerId' },
      { $inc: { sequence_value: 1 } },
      { new: true, upsert: true }
    );

    this.id = counter.sequence_value;
    next();
  } catch (err) {
    console.error('Counter error:', err);
    next(err);
  }
});

module.exports = mongoose.model('Customer', CustomerSchema);

