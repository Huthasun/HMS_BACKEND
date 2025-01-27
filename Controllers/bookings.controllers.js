// const mongoose = require('mongoose');
// const BookingDetails = require('../Models/bookingDetailsModel');
// const Guest = require('../Models/primaryGuestModel');

// exports.createBooking = async (req, res) => {
//     try {
//         const {
//             bookingType,
//             noOfGuests,
//             noOfAdults,
//             noOfKids = 0,
//             primaryGuest_Id,
//             guestDetails,
//             checkInDateTime,
//             checkOutDateTime,
//             roomId,
//             hotelId,
//             duration,
//             modeOfPayment,
//             paidAmount,
//             bookingStatus,
//             balance,
//             totalAmount
//         } = req.body;

//         if (!mongoose.Types.ObjectId.isValid(primaryGuest_Id)) {
//             return res.status(400).json({ error: "Invalid primaryGuest_Id format" });
//         }

//         const primaryGuestObjectId = new mongoose.Types.ObjectId(primaryGuest_Id);
//         const primaryGuest = await Guest.findById(primaryGuestObjectId);
//         if (!primaryGuest) {
//             return res.status(404).json({ error: "Primary guest not found" });
//         }

//         const newBooking = new BookingDetails({
//             bookingType,
//             noOfGuests,
//             noOfAdults,
//             noOfKids,
//             primaryGuestDetails: primaryGuest,
//             guestDetails,
//             checkInDateTime,
//             checkOutDateTime,
//             roomId,
//             hotelId,
//             duration,
//             modeOfPayment,
//             paidAmount,
//             bookingStatus,
//             balance,
//             totalAmount
//         });

//         const savedBooking = await newBooking.save();

//         res.status(201).json({ message: "Booking created successfully", data: savedBooking });
//     } catch (error) {
//         console.error("Error creating booking:", error);
//         res.status(500).json({ error: error.message });
//     }
// };

// const mongoose = require('mongoose');

// const BookingDetails = require('../Models/bookingDetailsModel');
// const Guest = require('../Models/primaryGuestModel');

// exports.createBooking = async (req, res) => {
//     try {
//         console.log('Request body:', req.body); 
//         const {
//             bookingType,
//             noOfGuests,
//             noOfAdults,
//             noOfKids = 0,
//             primaryGuest_Id, // This is the auto-incremented number
//             guestDetails,
//             checkInDateTime,
//             checkOutDateTime,
//             roomId,
//             hotelId,
//             duration,
//             modeOfPayment,
//             paidAmount,
//             bookingStatus,
//             balance,
//             totalAmount
//         } = req.body;

//         // Ensure `primaryGuest_Id` is a number
//         if (typeof primaryGuest_Id !== 'number') {
//             return res.status(400).json({ error: "Invalid primaryGuest_Id format" });
//         }

//         // Ensure primary guest exists
//         const primaryGuest = await Guest.findOne({ primaryGuest_Id });
//         if (!primaryGuest) {
//             return res.status(404).json({ error: "Primary guest not found" });
//         }

//         const newBooking = new BookingDetails({
//             bookingType,
//             noOfGuests,
//             noOfAdults,
//             noOfKids,
//             primaryGuest_Id, // Store only the primaryGuest_Id
//             guestDetails,
//             checkInDateTime,
//             checkOutDateTime,
//             roomId,
//             hotelId,
//             duration,
//             modeOfPayment,
//             paidAmount,
//             bookingStatus,
//             balance,
//             totalAmount
//         });

//         const savedBooking = await newBooking.save();

//         res.status(201).json({ message: "Booking created successfully", data: savedBooking });
//     } catch (error) {
//         console.error("Error creating booking:", error);
//         res.status(500).json({ error: error.message });
//     }
// };

// const BookingDetails = require('../Models/bookingDetailsModel');
// const Guest = require('../Models/primaryGuestModel');

// // Create booking details
// exports.createBooking = async (req, res) => {
//     try {
//         console.log('Request body:', req.body);
//         const {
//             bookingType,
//             noOfGuests,
//             noOfAdults,
//             noOfKids = 0,
//             primaryGuest_Id, // This is the auto-incremented number from the primary guest
//             guestDetails,
//             checkInDateTime,
//             checkOutDateTime,
//             roomId,
//             hotelId,
//             duration,
//             modeOfPayment,
//             paidAmount,
//             bookingStatus,
//             balance,
//             totalAmount,
//         } = req.body;

//         // Convert `primaryGuest_Id` to a number to ensure it's valid
//         const primaryGuestId = Number(primaryGuest_Id);

//         // Validate that `primaryGuest_Id` is a number
//         if (isNaN(primaryGuestId)) {
//             return res.status(400).json({ error: "Invalid primaryGuest_Id format" });
//         }

//         // Check if the primary guest exists
//         const primaryGuest = await Guest.findOne({ primaryGuest_Id: primaryGuestId });
//         if (!primaryGuest) {
//             return res.status(404).json({ error: "Primary guest not found" });
//         }

//         // Create new booking with primary guest id
//         const newBooking = new BookingDetails({
//             bookingType,
//             noOfGuests,
//             noOfAdults,
//             noOfKids,
//             primaryGuest_Id: primaryGuestId, // Save only the primaryGuest_Id
//             guestDetails,
//             checkInDateTime,
//             checkOutDateTime,
//             roomId,
//             hotelId,
//             duration,
//             modeOfPayment,
//             paidAmount,
//             bookingStatus,
//             balance,
//             totalAmount,
//         });

//         // Save the new booking
//         const savedBooking = await newBooking.save();

//         // Send success response with saved booking data
//         res.status(201).json({
//             message: "Booking created successfully",
//             data: savedBooking,
//         });
//     } catch (error) {
//         console.error("Error creating booking:", error);
//         res.status(500).json({ error: error.message });
//     }
// };
// const BookingDetails = require('../Models/bookingDetailsModel'); // Ensure correct path
// const PrimaryGuest = require('../Models/primaryGuestModel'); // Ensure correct path
// const Room = require('../Models/roomsModel'); // Ensure correct path
// const Hotel = require('../Models/hotelsModel'); // Ensure correct path



// exports.createBooking = async (req, res) => {
//     try {
//       // Extract data from request body and structure it as required
//       const bookingData = {
//         guestName: req.body.guestName,
//         gender: req.body.gender,
//         phoneNumber: req.body.phoneNumber,
//         guestIdProof: req.body.guestIdProof,
//         guestIdNumber: req.body.guestIdNumber,
//         address: req.body.address,
//         numGuests: req.body.numGuests,
//         bookingType: req.body.bookingType,
//         numAdults: req.body.numAdults,
//         numKids: req.body.numKids,
//         primaryGuest_Id: req.body.primaryGuest_Id,
//         checkOutDate: req.body.checkOutDate,
//         checkOutTime: req.body.checkOutTime,
//         checkInDate: req.body.checkInDate,
//         checkInTime: req.body.checkInTime,
//         paidAmount: req.body.paidAmount,
//         balanceAmount: req.body.balanceAmount,
//         tarrif: req.body.tarrif,
//         bookingStatus: req.body.bookingStatus,
//         roomNo: req.body.roomNo,
//         duration: req.body.duration,
//         modeOfPayment: req.body.modeOfPayment,
//         // Add the generalDetails key with specific guest information
//         generalDetails: {
//           guestName: req.body.guestName1,
//           gender: req.body.gender1,
//           guestIdProof: req.body.guestIdProof1,
//           guestIdNumber: req.body.guestIdNumber1,
//         },
//       };
  
//       // Create a new booking using the Booking model
//       const booking = new BookingDetails(bookingData);
  
//       // Save the booking to MongoDB
//       const savedBooking = await booking.save();
  
//       // Send success response
//       res.status(201).json({
//         message: 'Booking created successfully',
//         data: savedBooking,
//       });
//     } catch (error) {
//       console.error('Error saving booking:', error);
//       res.status(500).json({
//         message: 'Error saving booking',
//         error,
//       });
//     }
//   };
  
const BookingDetails = require('../Models/bookingDetailsModel');
const Room = require('../Models/roomsModel');
const RoomStatus = require('../Models/roomStatusModel');
const Guest = require('../Models/primaryGuestModel');
const User = require('../Models/model.login')

exports.createBooking = async (req, res) => {
  console.log("body data.....", req.body);

  let primaryGuest_Id;

  try {
    console.log("name", req.body.primaryGuestDetails.name);

    const primaryGuestDetails = {
      name: req.body.primaryGuestDetails.name,
      gender: req.body.primaryGuestDetails.gender,
      phoneNumber: req.body.primaryGuestDetails.phoneNumber,
      guestIdType: req.body.primaryGuestDetails.guestIdType,
      guestIdNumber: req.body.primaryGuestDetails.guestIdNumber,
      address: req.body.primaryGuestDetails.address
    };

    const existingGuest = await Guest.findOne({ phoneNumber: primaryGuestDetails.phoneNumber });

    if (existingGuest) {
      primaryGuest_Id = existingGuest.primaryGuest_Id;
      console.log('Guest already exists. Primary Guest ID:', primaryGuest_Id);
    } else {
      const newGuest = new Guest(primaryGuestDetails);
      const savedPrimaryGuest = await newGuest.save();

      primaryGuest_Id = savedPrimaryGuest.primaryGuest_Id;
      console.log('Guest saved successfully. New Primary Guest ID:', primaryGuest_Id);
    }
  } catch (error) {
    console.error('Error processing guest details:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }

  try {
    const roomNo = Number(req.body.roomNo);
    console.log("roomNo type:", typeof(roomNo));

    const room = await Room.findOne({ roomNo });
    console.log("Room found:", room);

    if (!room) {
      return res.status(404).json({ message: 'Room not found. Please ensure the room is registered.' });
    }

    const roomId = room.roomId;
    const hotelId = room.hotelId;

    const guestDetailsArray = Array.isArray(req.body.guestDetails)
      ? req.body.guestDetails.map(guest => ({
          name: guest.guestName,
          gender: guest.gender,
          guestIdType: guest.guestIdProof,
          guestIdNumber: guest.guestIdNumber,
          phoneNumber: guest.phoneNumber // Field appears to be missing in the request
        }))
      : [];

    const bookingData = {
      noOfGuests: req.body.numGuests,
      bookingType: req.body.bookingType,
      noOfAdults: req.body.numAdults,
      noOfKids: req.body.numKids,
      primaryGuest_Id: primaryGuest_Id,
      checkOutDateTime: req.body.checkOutDateTime,
      checkInDateTime: req.body.checkInDateTime,
      paidAmount: Number(req.body.paidamount),
      balance: Number(req.body.balanceamount),
      tarrif: Number(req.body.tarrif),
      bookingStatus: "Open",
      roomId: roomId,
      hotelId: hotelId,
      staffId: Number(req.body.staffId),
      duration: null,
      modeOfPayment: req.body.modeOfPayment,
      numOfDays: req.body.duration,
      guestDetails: guestDetailsArray,
      pmytotalAmount: Number(req.body.totalamount),
      paymentDetails: [
        {
          amount: Number(req.body.paidamount),
          modeOfPayment: req.body.modeOfPayment,
          // date: new Date(),
        },
      ],
    };

    console.log('Booking Data:', bookingData);

    const booking = new BookingDetails(bookingData);
    const savedBooking = await booking.save();

    await RoomStatus.findOneAndUpdate(
      { roomId: roomId },
      {
        $set: {
          roomStatus: 'occupied',
          bookingId: savedBooking.bookingId, // Update with saved booking ID
          primaryGuestName: req.body.primaryGuestDetails.name, // Update with primary guest name
          tarrif: req.body.tarrif, // Update total amount
          paidAmount: req.body.paidamount, // Update paid amount
          balanceAmount: req.body.balanceamount || null, // Update balance amount, set to null if not provided
          checkoutDuration: null, // Set to null as per requirements
          CheckOutDateTime: req.body.checkOutDateTime,
          pmytotalAmount: req.body.totalamount
        },
      },
      { new: true } // Option to return the updated document
    );

    res.status(201).json({
      message: 'Booking created successfully',
      bookingId: savedBooking._id,
    });

  } catch (error) {
    console.error('Error saving booking:', error);

    // Check if it's a validation error
    if (error.name === 'ValidationError') {
      res.status(400).json({
        message: 'Validation Error',
        details: error.errors,
      });
    } else {
      res.status(500).json({
        message: 'Error saving booking',
        error: error.message,
      });
    }
  }
};
exports.getAllBookingGuests = async (req, res) => {
  // const { page = 1, limit = 10 } = req.query;  // Get pagination params from query (default to page 1 and 10 items per page)

  try {
    const bookings = await BookingDetails.find()
      // .sort({ createdAt: -1 })  // Sorting by the creation date in descending order
      // .skip((page - 1) * limit)  // Skip the records for the previous pages
      // .limit(Number(limit));  // Limit the number of records per page

    if (bookings.length === 0) {
      return res.status(404).json({ message: 'No booking guests found' });
    }

    const formattedGuests = await Promise.all(
      bookings.map(async (booking) => {
        const primaryGuest = await Guest.findOne({ primaryGuest_Id: booking.primaryGuest_Id });
        const room = await Room.findOne({ roomId: booking.roomId });
        const user = await User.findOne({ staffId: booking.staffId });

        return {
          ...booking._doc,
          primaryGuestName: primaryGuest ? primaryGuest.name : null,
          primaryGuestIdNumber: primaryGuest ? primaryGuest.guestIdNumber : null,
          primaryGuestPhoneNumber: primaryGuest ? primaryGuest.phoneNumber : null,
          roomNo: room ? room.roomNo : null,
          username: user ? user.user_name : null,
        };
      })
    );

    // Get the total count of bookings for pagination
    const totalCount = await BookingDetails.countDocuments();
    // console.log(totalCount);
    

    res.status(200).json({
      data: formattedGuests,
      // totalPages: Math.ceil(totalCount / limit),
      // currentPage: page,
      // totalCount
    });
  } catch (error) {
    console.error('Error fetching booking guests:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// exports.getAllBookingGuests = async (req, res) => {
//   const { startDate, endDate, page = 1, limit = 10 } = req.query;  // Get date range and pagination params

//   try {
//     // Build the query based on the provided date range
//     let query = {};

//     if (startDate && endDate) {
//       query.checkInDateTime = { $gte: new Date(startDate), $lte: new Date(endDate) };
//     }

//     // Query to find the bookings
//     const bookings = await BookingDetails.find(query)
//       .sort({ createdAt: -1 })  // Sorting by the creation date in descending order
//       .skip((page - 1) * limit)  // Skip the records for the previous pages
//       .limit(Number(limit));  // Limit the number of records per page

//     // Check if no bookings are found
//     if (!bookings || bookings.length === 0) {
//       return res.status(404).json({ message: 'No booking guests found' });
//     }

//     const formattedGuests = await Promise.all(
//       bookings.map(async (booking) => {
//         const primaryGuest = await Guest.findOne({ primaryGuest_Id: booking.primaryGuest_Id });
//         const room = await Room.findOne({ roomId: booking.roomId });

//         return {
//           ...booking._doc,
//           primaryGuestName: primaryGuest ? primaryGuest.name : null,
//           primaryGuestIdNumber: primaryGuest ? primaryGuest.guestIdNumber : null,
//           primaryGuestPhoneNumber: primaryGuest ? primaryGuest.phoneNumber : null,
//           roomNo: room ? room.roomNo : null
//         };
//       })
//     );

//     // Get the total count of bookings for pagination
//     const totalCount = await BookingDetails.countDocuments(query);
//     console.log(totalCount);

//     res.status(200).json({
//       data: formattedGuests,
//       totalPages: Math.ceil(totalCount / limit),
//       currentPage: page,
//       totalCount
//     });
//   } catch (error) {
//     console.error('Error fetching booking guests:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };


exports.searchLatestBookingDetails = async (req, res) => {
  try {
    const { phoneNumber, guestIdNumber, name } = req.query;

    let guest;

    if (phoneNumber) {
      guest = await Guest.findOne({ phoneNumber });
    } else if (guestIdNumber) {
      guest = await Guest.findOne({ guestIdNumber });
    } else if (name) {
      guest = await Guest.findOne({ name: new RegExp(name, 'i') });
    }

    if (!guest) {
      return res.status(404).json({ message: 'No bookings found with the given criteria.' });
    }

    const latestBooking = await BookingDetails.findOne({ primaryGuest_Id: guest.primaryGuest_Id })
      .sort({ createdAt: -1 })
      .populate('primaryGuest_Id', 'name phoneNumber guestIdNumber');

    if (!latestBooking) {
      return res.status(404).json({ message: 'No bookings found for the given guest.' });
    }

    const primaryGuestDetails = {
      name: guest.name,
      phoneNumber: guest.phoneNumber,
      guestIdNumber: guest.guestIdNumber,
      gender: guest.gender,
      address: guest.address
    };

    const bookingDetails = {
      noOfDays: latestBooking.numOfDays,
      tarrif: latestBooking.tarrif,
    };

    res.status(200).json({ primaryGuestDetails, bookingDetails });
  } catch (error) {
    console.error('Error fetching latest booking details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
 
exports.deleteBookingGuest = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const deletedGuest = await BookingDetails.findOneAndDelete({ bookingId });
    
    if (!deletedGuest) {
      return res.status(404).json({ message: 'Guest not found' });
    }
    
    res.status(200).json({ message: 'Guest deleted successfully' });
  } catch (error) {
    console.error('Error deleting guest:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// exports.updateBookingDetails = async (req, res) => {
//   try {
//     const { bookingId } = req.params;
//     const updateData = req.body;

//     const booking = await BookingDetails.findOne({ bookingId });
//     if (!booking) {
//       return res.status(404).json({ message: 'Booking not found' });
//     }

//     if (updateData.roomId && updateData.roomStatus) {
//       const roomStatusUpdate = await RoomStatus.findOneAndUpdate(
//         { roomId: updateData.roomId },
//         { $set: { roomStatus: updateData.roomStatus } },
//         { new: true } 
//       );

//       if (!roomStatusUpdate) {
//         return res.status(404).json({ message: 'Room status update failed. Room not found.' });
//       }
//     }

//     const updatedBooking = await BookingDetails.findOneAndUpdate(
//       { bookingId },
//       { $set: updateData },
//       { new: true, runValidators: true }
//     );

//     if (updateData.primaryGuestDetails) {
//       await Guest.findOneAndUpdate(
//         { primaryGuest_Id: booking.primaryGuest_Id },
//         { $set: updateData.primaryGuestDetails },
//         { new: true }
//       );
//     }

//     res.status(200).json({ message: 'Booking details updated successfully', updatedBooking });
//   } catch (error) {
//     console.error('Error updating booking details:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

exports.updateBookingDetails = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const { pay, modeOfPayment, ...updateData } = req.body; // Extract pay and payment-specific data

    // Find the existing booking
    const booking = await BookingDetails.findOne({ bookingId });
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Calculate the new paidAmount (current paidAmount + pay value)
    const updatedPaidAmount = (booking.paidAmount || 0) + parseFloat(pay || 0); // Add the new payment to existing paidAmount

      // Calculate the new balanceAmount as (pmytotalAmount - updatedPaidAmount)
      const updatedBalanceAmount = (booking.pmytotalAmount || 0) - updatedPaidAmount; // balanceAmount = pmytotalAmount - updatedPaidAmount

 
    // Add a new payment entry to the paymentDetails array
    const paymentEntry = {
      amount: parseFloat(pay || 0),
      modeOfPayment,
      date: new Date(),
    };

    // Push the new payment entry into the paymentDetails array
    if (!Array.isArray(booking.paymentDetails)) {
      booking.paymentDetails = []; // Initialize the array if it doesn't exist
    }
    booking.paymentDetails.push(paymentEntry);

    // Update the booking details in the database
    const updatedBooking = await BookingDetails.findOneAndUpdate(
      { bookingId },
      {
        $set: {
          ...updateData,
          paidAmount: updatedPaidAmount,
          balance: updatedBalanceAmount, // Update balanceAmount
          modeOfPayment,
          paymentDetails: booking.paymentDetails, // Include the updated paymentDetails array
        },
      },
      { new: true, runValidators: true }
    );

    res.status(200).json({ message: 'Booking details updated successfully', updatedBooking });
  } catch (error) {
    console.error('Error updating booking details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// exports.updateBookingDetails = async (req, res) => {
//   try {
//     const { bookingId } = req.params;
//     const updateData = req.body;

//     const booking = await BookingDetails.findOne({ bookingId });
//     if (!booking) {
//       return res.status(404).json({ message: 'Booking not found' });
//     }

//     // Check if there is a new payment mode and paid amount
//     if (updateData.modeOfPayment && updateData.paidAmount) {
//       // Create a new payment entry to add to the paymentDetails array
//       const newPayment = {
//         modeOfPayment: updateData.modeOfPayment,
//         paidAmount: updateData.paidAmount
//       };

//       // Update the payment details
//       booking.paymentDetails.push(newPayment);

//       // Update the paidAmount in the bookingDetails schema
//       const totalPaidAmount = booking.paymentDetails.reduce((total, payment) => total + payment.paidAmount, 0);
//       const balance = booking.tarrif - totalPaidAmount; // Assuming `tarrif` is the total amount

//       // Update booking with new total paid amount and balance
//       booking.paidAmount = totalPaidAmount;
//       booking.balance = balance;

//       // Optionally, if the modeOfPayment and paidAmount are included in the updateData, ensure they are updated in the main collection too
//       updateData.paidAmount = totalPaidAmount;
//       updateData.balance = balance;

//       // Apply changes to bookingDetails document
//       await booking.save(); // Save the updated booking

//       // If there are other fields to be updated (like roomId, etc.), update them
//       if (updateData.roomId && updateData.roomStatus) {
//         const roomStatusUpdate = await RoomStatus.findOneAndUpdate(
//           { roomId: updateData.roomId },
//           { $set: { roomStatus: updateData.roomStatus } },
//           { new: true }
//         );

//         if (!roomStatusUpdate) {
//           return res.status(404).json({ message: 'Room status update failed. Room not found.' });
//         }
//       }

//       if (updateData.primaryGuestDetails) {
//         await Guest.findOneAndUpdate(
//           { primaryGuest_Id: booking.primaryGuest_Id },
//           { $set: updateData.primaryGuestDetails },
//           { new: true }
//         );
//       }

//       return res.status(200).json({
//         message: 'Booking details and payment updated successfully',
//         updatedBooking: booking
//       });
//     }

//     // If no new payment info is provided, just update other fields in the booking details
//     const updatedBooking = await BookingDetails.findOneAndUpdate(
//       { bookingId },
//       { $set: updateData },
//       { new: true, runValidators: true }
//     );

//     res.status(200).json({
//       message: 'Booking details updated successfully',
//       updatedBooking
//     });
//   } catch (error) {
//     console.error('Error updating booking details:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

//   try {
//     // Extract data from request body
//     r = Number(req.body.roomNo)
//     console.log("type",typeof(r));
//     console.log("type ffff",typeof(Number(r)));
    

//     const room = await Room.findOne({roomNo: r });
//     console.log("rommmmmmmmm",room);
    
    
//         // If room is not found, return an error
//         if (!room) {
//           return res
//             .status(404)
//             .json({ message: 'Room not found. Please ensure the room is registered.' });
//         }
    
//         // Extract roomId from the found room (auto-incremented ID)
//         const roomId = room.roomId;
//         const hotelId = room.hotelId;
    
//         // Find the hotel based on the hotel name or other attributes
//         // const hotel = await Hotel.findOne({ name: hotelName })
//  // Define registrationCardsData with a default empty object
//     // const registrationCardsData = req.body.registrationCardsData || {};



//     const bookingData = {
//       name: req.body.name,
//       gender: req.body.gender,
//       phoneNumber: req.body.phoneNumber,
//       guestIdProof: req.body.guestIdProof,
//       guestIdNumber: req.body.guestIdNumber,
//       address: req.body.address,
//       noOfGuests: req.body.numGuests,
//       bookingType: req.body.bookingType,
//       noOfAdults: req.body.numAdults,
//       noOfKids: req.body.numKids,
//       primaryGuest_Id: req.body.primaryGuest_Id,
//       checkOutDateTime: req.body.checkOutDate,
//       checkOutTime: req.body.checkOutTime,
//       checkInDateTime: req.body.checkInDate,
//       checkInTime: req.body.checkInTime,
//       paidAmount: Number(req.body.paidamount),
//       balance: req.body.balanceamount,
//       totalAmount: Number(req.body.tarrif),
//       bookingStatus: "Open",
//       // roomNo: Number(req.body.roomNo),
//       duration: null,
//       modeOfPayment: req.body.modeOfPayment,
//       guestDetails: {
//         name: req.body.registrationCardsData.guestName || '',
//         gender: req.body.registrationCardsData.gender || '',
//         guestIdType: req.body.registrationCardsData.guestIdProof || '',
//         guestIdNumber: req.body.registrationCardsData.guestIdNumber || '',
//       },
      
      
//       roomId, // Add roomId to bookingData
//       hotelId,
      

//     };

    

//     console.log("cccccccccccccccccccc", req.body);
    
//     // Create a new booking document
//     const booking = new BookingDetails(bookingData);
//     console.log("mmmmm",booking);
    



//     // const { guestIdNumber } = guestDetails[0] || {};

//     //     // Check if guestIdNumber is defined
//     //     if (!guestIdNumber) {
//     //       return res
//     //         .status(400)
//     //         .json({ message: 'Guest ID number is missing in guest details.' });
//     //     }
    
//     //     // Find the primary guest based on guest ID number
//     //     const primaryGuest = await PrimaryGuest.findOne({ guestIdNumber });
    
//     //     // If primary guest is not found, return an error
//     //     if (!primaryGuest) {
//     //       return res
//     //         .status(404)
//     //         .json({ message: 'Primary guest not found. Please register the guest first.' });
//     //     }
    
//     //     // Extract primaryGuest_Id from the found primary guest
//     //     const primaryGuest_Id = primaryGuest.primaryGuest_Id;
    
//     //     // Find the room based on roomNo to get the auto-incremented roomId
        
//         // If hotel is not found, return an error
//         // if (!hotel) {
//         //   return res
//         //     .status(404)
//         //     .json({ message: 'Hotel not found. Please ensure the hotel is registered.' });
//         // }
    
//         // // Extract hotelId from the found hotel (auto-incremented ID)
//         // const hotelId = hotel.hotelId;
    
//         // Calculate balanceAmount if not explicitly provided
//         // const balance = tarrif - paidAmount; // Calculate based on tarrif and paidAmount
    







//     // Save the booking to MongoDB
//     const savedBooking = await booking.save();

//      // Update room status after booking is successfully saved
//      await RoomStatus.findOneAndUpdate(
//       { roomId: roomId },
//       {
//         $set: {
//           roomStatus: 'occupied',
//           bookingId: savedBooking.bookingId, // Update with saved booking ID
//           primaryGuestId: req.body.primaryGuest_Id, // Update with primary guest ID
//           totalAmount: req.body.tarrif, // Update total amount
//           paidAmount: req.body.paidamount, // Update paid amount
//           balanceAmount: req.body.balanceamount || null, // Update balance amount, set to null if not provided
//           checkoutDuration: null, // Set to null as per requirements
//         },
//       },
//       { new: true } // Option to return the updated document
//     );

//     // Send success response
//     res.status(201).json({
//       message: 'Booking created successfully',
//       data: savedBooking,
//     });
//   } catch (error) {
//     console.error('Error saving booking:', error);

//     // Check if it's a validation error
//     if (error.name === 'ValidationError') {
//       res.status(400).json({
//         message: 'Validation Error',
//         details: error.errors,
//       });
//     } else {
//       res.status(500).json({
//         message: 'Error saving booking',
//         error: error.message,
//       });
//     }
//   }









// const BookingDetails = require('../models/bookingDetailsModel');
// const Room = require('../Models/roomsModel');
// const RoomStatus = require('../Models/roomStatusModel');

// exports.createBooking = async (req, res) => {
//   console.log("reqbody....",req.body);
  
//   try {
//     // Log incoming request body
//     console.log('Received data from frontend:', req.body);

//     // Extract data from request body
//     const room = await Room.findOne({ roomNo: Number(req.body.roomNo) });

//     if (!room) {
//       return res.status(404).json({ message: 'Room not found. Please ensure the room is registered.' });
//     }

//     const roomId = room.roomId;
//     const hotelId = room.hotelId;

//     // Ensure guestDetails is defined and is an array
//     const guestDetailsArray = Array.isArray(req.body.guestDetails) ? req.body.guestDetails.map(guest => ({
//       guestName: guest.guestName,
//       gender: guest.gender,
//       guestIdType: guest.guestIdProof,
//       guestIdNumber: guest.guestIdNumber,
//     })) : [];

//     // Create booking data including guest details array
//     const bookingData = {
//       name: req.body.name,
//       gender: req.body.gender,
//       phoneNumber: req.body.phoneNumber,
//       guestIdProof: req.body.guestIdProof,
//       guestIdNumber: req.body.guestIdNumber,
//       address: req.body.address,
//       noOfGuests: req.body.numGuests,
//       bookingType: req.body.bookingType,
//       noOfAdults: req.body.numAdults,
//       noOfKids: req.body.numKids,
//       primaryGuest_Id: req.body.primaryGuest_Id,
//       checkOutDateTime: req.body.checkOutDate, // Use raw date from request
//       checkInDateTime: req.body.checkInDate,   // Use raw date from request
//       paidAmount: Number(req.body.paidamount),
//       balance: req.body.balanceamount,
//       totalAmount: Number(req.body.tarrif),
//       bookingStatus: 'Open',
//       modeOfPayment: req.body.modeOfPayment,
//       roomId, // Add roomId to booking data
//       hotelId,
//       guestDetails: guestDetailsArray, // Save guest details array
//     };

//     console.log('Processed booking data:', bookingData); // Log processed booking data

//     // Create a new booking document
//     const booking = new BookingDetails(bookingData);
//     const savedBooking = await booking.save();

//     // Update room status after booking is saved
//     await RoomStatus.findOneAndUpdate(
//       { roomId: roomId },
//       {
//         $set: {
//           roomStatus: 'occupied',
//           bookingId: savedBooking.bookingId,
//           primaryGuestId: req.body.primaryGuest_Id,
//           totalAmount: req.body.tarrif,
//           paidAmount: req.body.paidamount,
//           balanceAmount: req.body.balanceamount || null,
//           checkoutDuration: null,
//         },
//       },
//       { new: true }
//     );

//     // Send success response
//     res.status(201).json({
//       message: 'Booking created successfully',
//       data: savedBooking,
//     });
//   } catch (error) {
//     console.error('Error saving booking:', error);
//     if (error.name === 'ValidationError') {
//       res.status(400).json({ message: 'Validation Error', details: error.errors });
//     } else {
//       res.status(500).json({ message: 'Error saving booking', error: error.message });
//     }
//   }
// };













// const BookingDetails = require('../Models/bookingDetailsModel');
// // const PrimaryGuest = require('../Models/primaryGuestModel');
// const Room = require('../Models/roomsModel');
// const Hotel = require('../Models/hotelsModel');
// const RoomStatus = require('../Models/roomStatusModel');
// const Guest = require('../Models/primaryGuestModel')


// exports.createBooking = async (req, res) => {
//   console.log("body data.....",req.body);

//   let primaryGuest_Id;
  
// try {
// console.log("name",req.body.primaryGuestDetails.name);


//   const primaryGuestDetails = {
//     name: req.body.primaryGuestDetails.name,
//     gender: req.body.primaryGuestDetails.gender,
//     phoneNumber: req.body.primaryGuestDetails.phoneNumber,
//     guestIdType: req.body.primaryGuestDetails.guestIdType,
//     guestIdNumber: req.body.primaryGuestDetails.guestIdNumber,
//     address: req.body.primaryGuestDetails.address
//   }
  
//     // Check if the phone number already exists in the database
//     const existingGuest = await Guest.findOne({ phoneNumber: primaryGuestDetails.phoneNumber });

    

//     if (existingGuest) {
//       // Guest already exists, retrieve the primaryGuest_Id
//       primaryGuest_Id = existingGuest.primaryGuest_Id;
//       console.log('Guest already exists. Primary Guest ID:', primaryGuest_Id); // Log the primaryGuest_Id

//       // Send response indicating that the guest already exists
//       // return res.status(200).json({
//       //   message: 'Guest already exists. Proceeding with booking using existing guest ID.',
//       //   primaryGuest_Id: primaryGuest_Id
//       // });

//     } else {
//       // Guest doesn't exist, so create a new guest
//       const newGuest = new Guest(primaryGuestDetails);
//       const savedprimaryGuestDetails = await newGuest.save();

//       // Retrieve the primaryGuest_Id after saving the new guest
//       primaryGuest_Id = savedprimaryGuestDetails.primaryGuest_Id;
//       console.log('Guest saved successfully. New Primary Guest ID:', primaryGuest_Id); // Log the new primaryGuest_Id

//       // Send response after successfully saving the new guest
//       return res.status(201).json({
//         message: 'New guest saved successfully.',
//         primaryGuest_Id: primaryGuest_Id
//       });
//     }





//   } catch (error) {
//     console.error('Error processing booking:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }


//   try {

//     r = Number(req.body.roomNo)
//     console.log("type",typeof(r));
//     console.log("type ffff",typeof(Number(r)));
    

//     const room = await Room.findOne({roomNo: r });
//     console.log("rommmmmmmmm",room);
    
    
//         // If room is not found, return an error
//         if (!room) {
//           return res
//             .status(404)
//             .json({ message: 'Room not found. Please ensure the room is registered.' });
//         }
    
//         // Extract roomId from the found room (auto-incremented ID)
//         const roomId = room.roomId;
//         const hotelId = room.hotelId;

//         // Validate and format guest details
//         const guestDetailsArray = Array.isArray(guestDetails)
//         ? guestDetails.map(guest => ({
//             name: guest.name,
//             gender: guest.gender,
//             guestIdType: guest.guestIdType,
//             guestIdNumber: guest.guestIdNumber,
//           }))
//         : [];


//     const bookingData = {
//             noOfGuests: req.body.noOfGuests,
//             bookingType: req.body.bookingType,
//             noOfAdults: req.body.noOfAdults,
//             noOfKids: req.body.noOfKids,
//             primaryGuest_Id: primaryGuest_Id,
//             checkOutDateTime: "2024-08-29T12:00:00.000+00:00",
//             // checkOutTime: req.body.checkOutTime,
//             checkInDateTime: "2024-08-29T12:00:00.000+00:00",
//             // checkInTime: req.body.checkInTime,
//             paidAmount: Number(req.body.paidAmount),
//             balance: req.body.balance,
//             totalAmount: Number(req.body.totalAmount),
//             bookingStatus: "Open",
//             roomId: roomId,
//             hotelId: hotelId,
//             // roomNo: Number(req.body.roomNo),
//             duration: null,
//             modeOfPayment: req.body.modeOfPayment,
//             guestDetails: guestDetailsArray
//     }
//     console.log('Booking Data:', bookingData);
//     const booking = new BookingDetails(bookingData);
//     const savedBooking = await booking.save();


//     res.status(201).json({ message: 'Booking created successfully', bookingId: savedBooking._id });

//   } catch (error) {
//     console.log("booking data error",error);
    
//   }
// };