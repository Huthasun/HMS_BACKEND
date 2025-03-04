

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//   user_name: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     required: true
   
//   }
  
  
// });

// // module.exports = mongoose.model('room_information', room_infoSchema);
// const user_info = mongoose.model("user", userSchema);

// module.exports = user_info;


// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//   user_name: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   role: {
//     type: String,
//     enum: ['user', 'admin'],  // Role can be 'user' or 'admin'
//     default: 'user'           // Default role is 'user'
//   }
// });



// // Pre-save hook to hash the password
// userSchema.pre('save', async function(next) {
//   try {
//     if (this.isModified('password')) {
//       const salt = await bcrypt.genSalt(10);
//       this.password = await bcrypt.hash(this.password, salt);
//       console.log(this.password);
//     }
//     next();
//   } catch (err) {
//     next(err);
//   }
// });

// const user_info = mongoose.model("User", userSchema);
// module.exports = user_info;

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const AutoIncrement = require('mongoose-sequence')(mongoose); // Import auto-increment plugin
const Schema = mongoose.Schema;

const userSchema = new Schema({
  staffId: {
    type: Number,
    unique: true // Auto-incrementing staff ID
  },
  user_name: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['receptionist', 'admin'], // Role can be 'receptionist' or 'admin'
    default: 'receptionist'          // Default role is 'receptionist'
  },
  hotelId: {
    type: Number,
    required: true,
    ref : "Hotel"
  }
});

// Pre-save hook to hash the password
userSchema.pre('save', async function(next) {
  try {
    if (this.isModified('password')) {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    }
    next();
  } catch (err) {
    next(err);
  }
});

// Add auto-increment plugin for staffId
userSchema.plugin(AutoIncrement, { inc_field: 'staffId' });

const User = mongoose.model("User", userSchema);
module.exports = User;
