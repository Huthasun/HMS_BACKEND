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

    // Check if the phone number already exists in the database
    const existingGuest = await Guest.findOne({ phoneNumber: primaryGuestDetails.phoneNumber });

    if (existingGuest) {
      // Guest already exists, retrieve the primaryGuest_Id
      primaryGuest_Id = existingGuest.primaryGuest_Id;
      console.log('Guest already exists. Primary Guest ID:', primaryGuest_Id);
    } else {
      // Guest doesn't exist, so create a new guest
      const newGuest = new Guest(primaryGuestDetails);
      const savedPrimaryGuest = await newGuest.save();

      // Retrieve the primaryGuest_Id after saving the new guest
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

    // If room is not found, return an error
    if (!room) {
      return res.status(404).json({ message: 'Room not found. Please ensure the room is registered.' });
    }

    // Extract roomId from the found room
    const roomId = room.roomId;
    const hotelId = room.hotelId;

    // Validate and format guest details
    const guestDetailsArray = Array.isArray(req.body.guestDetails)
      ? req.body.guestDetails.map(guest => ({
          name: guest.guestName,
          gender: guest.gender,
          guestIdType: guest.guestIdProof,
          guestIdNumber: guest.guestIdNumber
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
      totalAmount: Number(req.body.tarrif),
      bookingStatus: "Open",
      roomId: roomId,
      hotelId: hotelId,
      duration: null,
      modeOfPayment: req.body.modeOfPayment,
      guestDetails: guestDetailsArray
    };

    console.log('Booking Data:', bookingData);

    // Save the booking
    const booking = new BookingDetails(bookingData);
    const savedBooking = await booking.save();

    // Update room status after booking is successfully saved
    await RoomStatus.findOneAndUpdate(
      { roomId: roomId },
      {
        $set: {
          roomStatus: 'occupied',
          bookingId: savedBooking.bookingId, // Update with saved booking ID
          primaryGuestName: req.body.primaryGuestDetails.name, // Update with primary guest ID
          totalAmount: req.body.tarrif, // Update total amount
          paidAmount: req.body.paidamount, // Update paid amount
          balanceAmount: req.body.balanceamount || null, // Update balance amount, set to null if not provided
          checkoutDuration: null, // Set to null as per requirements
          CheckOutDateTime: req.body.checkOutDateTime
        },
      },
      { new: true } // Option to return the updated document
    );

    // Send success response
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