// const mongoose = require('mongoose');
// const AutoIncrement = require('mongoose-sequence')(mongoose);

// const guestSchema = new mongoose.Schema({
//     primaryGuest_Id: {
//         type: Number,
//         unique: true,
//     },
//     name: {
//         type: String,
//         required: true,
//     },
//     gender: {
//         type: String,
//         enum: ['male', 'female'],
//         required: true,
//     },
//     phoneNumber: {
//         type: String,
//         required: true,
//     },
//     guestIdType: {
//         type: String,
//         required: true,
//     },
//     guestIdNumber: {
//         type: String,
//         required: true,
//     },
//     address: {
//         type: String,
//         required: true,
//     },
// });

// // Apply the auto-increment plugin to the primaryGuest_Id field
// guestSchema.plugin(AutoIncrement, { inc_field: 'primaryGuest_Id' });

// const Guest = mongoose.model('Guest', guestSchema);

// module.exports = Guest;
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

// Define the primary guest schema
const guestSchema = new mongoose.Schema({
    primaryGuest_Id: {
        type: Number,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    guestIdType: {
        type: String,
        required: true,
    },
    guestIdNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
});

// Apply the auto-increment plugin to the primaryGuest_Id field
guestSchema.plugin(AutoIncrement, { inc_field: 'primaryGuest_Id' });

const Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;
