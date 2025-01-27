// // // controllers/roomStatusController.js
// const RoomStatus = require('../Models/roomStatusModel');
// const Room = require('../Models/roomsModel');
// const Hotel = require('../Models/hotelsModel');
// const BookingDetails = require('../Models/bookingDetailsModel');


// exports.getAllRoomStatus = async (req, res) => {
//   console.log("=============getAllRoomStatus===========");
  
//   try {
//     const rooms = await RoomStatus.find();
//     res.status(200).json({ message: 'Rooms fetched successfully', data: rooms });
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching rooms', error: error.message });
//   }
// };

// // Function to create a new room status record
// exports.createRoomStatus = async (req, res) => {
//   try {
//     const { roomNo } = req.body;

//     // Fetch the room details using the room number
//     const room = await Room.findOne({ roomNo });

//     // If the room is not found, return an error
//     if (!room) {
//       return res.status(404).json({ message: 'Room not found' });
//     }

//     // Fetch the hotel details using the hotel ID from the room
//     const hotel = await Hotel.findOne({ hotelId: room.hotelId });

//     // If the hotel is not found, return an error
//     if (!hotel) {
//       return res.status(404).json({ message: 'Hotel not found' });
//     }

//     // Create a new room status record with fetched hotelId and roomId
//     const newRoomStatus = new RoomStatus({
//       hotelId: room.hotelId,
//       roomId: room.roomId,
//       roomNo: room.roomNo,
//       roomStatus: 'vacant', // Default status
//       bookingId: null,
//       primaryGuestId: null,
//       totalAmount: null,
//       paidAmount: null,
//       balanceAmount: null,
//       checkoutDuration: null,
//     });

//     // Save the record to the database
//     const createdRoom = await newRoomStatus.save();
//     res.status(201).json({ message: 'Room status created successfully', data: createdRoom });
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating room status', error: error.message });
//   }
// };

// // Function to update room status
// exports.updateRoomStatus = async (req, res) => {
//   try {
//     const { roomNo, bookingId, primaryGuestId, totalAmount, paidAmount, balanceAmount, checkoutDuration } = req.body;

//     // Fetch the room status using the room number
//     const roomStatus = await RoomStatus.findOne({ roomNo });

//     // If the room status is not found, return an error
//     if (!roomStatus) {
//       return res.status(404).json({ message: 'Room status not found' });
//     }

//     // Update the room status fields
//     roomStatus.bookingId = bookingId || roomStatus.bookingId;
//     roomStatus.primaryGuestId = primaryGuestId || roomStatus.primaryGuestId;
//     roomStatus.totalAmount = totalAmount || roomStatus.totalAmount;
//     roomStatus.paidAmount = paidAmount || roomStatus.paidAmount;
//     roomStatus.balanceAmount = balanceAmount || roomStatus.balanceAmount;
//     roomStatus.checkoutDuration = checkoutDuration || roomStatus.checkoutDuration;
   

//     // Save the updated room status
//     const updatedRoomStatus = await roomStatus.save();

//     // Fetch and include booking details if available
//     if (updatedRoomStatus.bookingId) {
//       const bookingDetails = await BookingDetails.findById(updatedRoomStatus.bookingId).select('name checkOutDateTime');
//       updatedRoomStatus.bookingDetails = bookingDetails;
//     }

//     res.status(200).json({ message: 'Room status updated successfully', data: updatedRoomStatus });
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating room status', error: error.message });
//   }
// };
const RoomStatus = require('../Models/roomStatusModel');
const Room = require('../Models/roomsModel');
const Hotel = require('../Models/hotelsModel');
const BookingDetails = require('../Models/bookingDetailsModel');
const PrimaryGuest = require('../Models/primaryGuestModel'); 
// Fetch all room statuses with booking details and primary guest details
exports.getAllRoomStatus = async (req, res) => {
  try {
    // Fetch all room statuses
    const rooms = await RoomStatus.find();

    // Populate room data with booking details and primary guest details
    const detailedRooms = await Promise.all(
      rooms.map(async (room) => {
        const roomDetails = { ...room._doc }; // Clone room object for modification

        // Fetch booking details if bookingId is available
        if (room.bookingId) {
          const bookingDetails = await BookingDetails.findOne({ bookingId: room.bookingId });
          if (bookingDetails) {
            roomDetails.bookingDetails = bookingDetails;

             // Fetch balanceAmount from BookingDetails
             const balanceAmount = bookingDetails.balance;
             roomDetails.balanceAmount = balanceAmount;  // Update balanceAmount in RoomStatus
             
             const paidAmount = bookingDetails.paidAmount;
             roomDetails.paidAmount = paidAmount
            // Fetch primary guest details if primaryGuestId is available in the booking
            const primaryGuest = await PrimaryGuest.findOne({ guestId: bookingDetails.primaryGuest_Id });
            if (primaryGuest) {
              roomDetails.primaryGuest = primaryGuest;
            }
          }
        }

        return roomDetails;
      })
    );

    res.status(200).json({
      message: 'Rooms with detailed information fetched successfully',
      data: detailedRooms,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching room statuses',
      error: error.message,
    });
  }
};

// Create a new room status record 
exports.createRoomStatus = async (req, res) => { 
  try {
    const { roomNo } = req.body;

    // Fetch the room details using the room number
    const room = await Room.findOne({ roomNo });
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }

    // Fetch the hotel details using the hotel ID from the room
    const hotel = await Hotel.findOne({ hotelId: room.hotelId });
    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }

    // Create a new room status record
    const newRoomStatus = new RoomStatus({
      hotelId: room.hotelId,
      roomId: room.roomId,
      roomNo: room.roomNo,
      roomStatus: 'vacant', // Default status
      bookingId: null,
      primaryGuestId: null,
      tarrif: null,
      paidAmount: null,
      balanceAmount: null,
      checkoutDuration: null,
      CheckOutDateTime:null,
      pmytotalAmount:null
    });


    // const primaryGuest = await PrimaryGuest.findOne({ guestId: roomStatus.primaryGuestId });
    // console.log("primary...",primaryGuest);
    

    

    // Save the record to the database
    const createdRoom = await newRoomStatus.save();
    res.status(201).json({ message: 'Room status created successfully', data: createdRoom });
  } catch (error) {
    res.status(500).json({ message: 'Error creating room status', error: error.message });
  }
};
// 
// Function to update room status
// exports.updateRoomStatus = async (req, res) => {
//   try {
//     const { roomNo, status } = req.body;

//     // Validate status
//     if (!['vacant', 'housekeeping'].includes(status)) {
//       return res.status(400).json({ message: 'Invalid status' });
//     }

//     // Fetch the room status using the room number
//     const roomStatus = await RoomStatus.findOne({ roomNo });
//     if (!roomStatus) {
//       return res.status(404).json({ message: 'Room status not found' });
//     }

//     // Update the room status
//     roomStatus.roomStatus = status;

//     // Clear specific fields if the status is housekeeping
//     if (status === 'housekeeping') {
//       roomStatus.bookingId = null;
//       roomStatus.primaryGuestId = null;
//       roomStatus.tarrif = null;
//       roomStatus.paidAmount = null;
//       roomStatus.balanceAmount = null;
//       roomStatus.checkoutDuration = null;
//       roomStatus.CheckOutDateTime = null;
//       roomStatus.pmytotalAmount  = null;
//     }

//     // Fetch booking details and checkout date/time if bookingId is available
//     if (roomStatus.bookingId) {
//       const bookingDetails = await BookingDetails.findOne({ bookingId: roomStatus.bookingId });
//       if (bookingDetails) {
//         roomStatus.tarrif = bookingDetails.tarrif; 
//         roomStatus.balance = bookingDetails.balance;
//         roomStatus.pmytotalAmount = bookingDetails.pmytotalAmount;
//         roomStatus.CheckOutDateTime = bookingDetails.CheckOutDateTime; // Add checkoutDateTime from bookingDetails

//         console.log("ttttttttt",roomStatus.CheckOutDateTime);
//         console.log("yyyyy",roomStatus.tarrif);
        
        
//       }

//     }
// // Fetch and add booking details if `bookingId` is available
// // if (roomStatus.bookingId) {
// //   const bookingDetails = await BookingDetails.findOne({ bookingId: roomStatus.bookingId });
// //   if (bookingDetails) {
// //     // Add `checkoutDateTime` from bookingDetails to room status
// //     roomStatus.checkoutDateTime = bookingDetails.checkoutDateTime;
// //     console.log("Checkout DateTime:", roomStatus.checkoutDateTime);
// //   } else {
// //     roomStatus.checkoutDateTime = null;
// //   }
// // }

// // // Fetch and add primary guest details if `primaryGuestId` is available
// // if (roomStatus.primaryGuestId) {
// //   const primaryGuest = await PrimaryGuest.findOne({ guestId: roomStatus.primaryGuestId });
// //   if (primaryGuest) {
// //     // Add the primary guest's name to room status
// //     roomStatus.primaryGuestName = primaryGuest.name;
// //     console.log("Primary Guest Name:", roomStatus.primaryGuestName);
// //   } else {
// //     roomStatus.primaryGuestName = null;
// //   }
// // }

// // Save the updated room status
// const updatedRoomStatus = await roomStatus.save();


    

//     res.status(200).json({ message: `Room status updated to ${status} successfully`, data: updatedRoomStatus });
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating room status', error: error.message });
//   }
// };
// Function to update room status
exports.updateRoomStatus = async (req, res) => {
  try {
    const { roomNo, status } = req.body;

    // Validate status
    if (!['vacant', 'housekeeping'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    // Fetch the room status using the room number
    const roomStatus = await RoomStatus.findOne({ roomNo });
    if (!roomStatus) {
      return res.status(404).json({ message: 'Room status not found' });
    }

    // Update the room status
    roomStatus.roomStatus = status;

    // Clear specific fields if the status is housekeeping
    if (status === 'housekeeping') {
      roomStatus.bookingId = null;
      roomStatus.primaryGuestName = null;
      roomStatus.tarrif = null;
      roomStatus.paidAmount = null;
      roomStatus.balanceAmount = null;
      roomStatus.checkoutDuration = null;
      roomStatus.CheckOutDateTime = null;
      roomStatus.pmytotalAmount = null;
    }

    // Fetch booking details if bookingId is available
    if (roomStatus.bookingId) {
      const bookingDetails = await BookingDetails.findOne({ bookingId: roomStatus.bookingId });
      if (bookingDetails) {
        // Assign booking details values to room status
        roomStatus.tarrif = bookingDetails.tarrif;
        roomStatus.paidAmount = bookingDetails.paidAmount;
        roomStatus.balanceAmount = bookingDetails.balance;
        roomStatus.pmytotalAmount = bookingDetails.pmytotalAmount;
        roomStatus.CheckOutDateTime = bookingDetails.CheckOutDateTime;
      }
    }

    // Save the updated room status
    const updatedRoomStatus = await roomStatus.save();

    res.status(200).json({
      message: Room `status updated to ${status} successfully`,
      data: updatedRoomStatus,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error updating room status',
      error: error.message,
    });
  }
};
exports.updateRoomStatusById = async (req, res) => {
  try {
    const { roomStatusId } = req.params; // Extract roomStatusId from URL
    const updateFields = req.body; // Fields to update are passed in the body

    // Validate if the record exists
    const roomStatusRecord = await RoomStatus.findOne({ roomStatusId });
    if (!roomStatusRecord) {
      return res.status(404).json({ message: 'Room status record not found.' });
    }

    // Update the record with the provided fields
    Object.keys(updateFields).forEach((field) => {
      roomStatusRecord[field] = updateFields[field];
    });

    // Save the updated record
    const updatedRoomStatus = await roomStatusRecord.save();

    res.status(200).json({
      message: 'Room status updated successfully.',
      data: updatedRoomStatus,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error updating room status.',
      error: error.message,
    });
  }
};
