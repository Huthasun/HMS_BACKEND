// const mongoose = require('mongoose');
// const Guest = require('../Models/primaryGuestModel');

// exports.createPrimaryGuest = async (req, res) => {
//     try {
//         const { name, gender, phoneNumber, guestIdType, guestIdNumber, address } = req.body;

//         console.log("Received data for primary guest:", req.body);

//         if (!name || !gender || !phoneNumber || !guestIdType || !guestIdNumber || !address) {
//             return res.status(400).json({ error: "All fields are required" });
//         }

//         const newGuest = new Guest({
//             name,
//             gender,
//             phoneNumber,
//             guestIdType,
//             guestIdNumber,
//             address
//         });

//         const savedGuest = await newGuest.save();

//         res.status(201).json({ message: "Primary guest created successfully", primaryGuest_Id: savedGuest.primaryGuest_Id });
//     } catch (error) {
//         console.error("Error creating primary guest:", error);
//         res.status(500).json({ error: error.message });
//     }
// };
const Guest = require('../Models/primaryGuestModel');

// Create primary guest details
exports.createPrimaryGuest = async (req, res) => {
    try {
        const { name, gender, phoneNumber, guestIdType, guestIdNumber, address } = req.body;

        console.log("Received data for primary guest:", req.body);

        // Validate required fields
        if (!name || !gender || !phoneNumber || !guestIdType || !guestIdNumber || !address) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Create and save new primary guest
        const newGuest = new Guest({
            name,
            gender,
            phoneNumber,
            guestIdType,
            guestIdNumber,
            address,
        });

        const savedGuest = await newGuest.save();

        // Send success response with generated primaryGuest_Id
        res.status(201).json({
            message: "Primary guest created successfully",
            primaryGuest_Id: savedGuest.primaryGuest_Id,
        });
    } catch (error) {
        console.error("Error creating primary guest:", error);
        res.status(500).json({ error: error.message });
    }
};
// exports.getAllGuests = async (req, res) => {
//     try {
//       const PriGuests = await Guest.find(); // Fetches all guest records from the database
//       res.status(200).json(PriGuests);
//     } catch (error) {
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   };
exports.getAllGuests = async (req, res) => {
    try {
      const guests = await Guest.find();
  
      if (guests.length === 0) {
        return res.status(404).json({ message: 'No guests found' });
      }
  
      res.status(200).json({ data: guests });
    } catch (error) {
      console.error('Error fetching guests:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

  exports.deleteGuest = async (req, res) => {
    try {
        const { primaryGuest_Id } = req.params;
        // Ensure to use the correct MongoDB identifier
        const deletedGuest = await Guest.findOneAndDelete({ primaryGuest_Id }); // Change to findOneAndDelete if needed
        if (!deletedGuest) {
            return res.status(404).json({ message: 'Guest not found' });
        }
        res.status(200).json({ message: 'Guest deleted successfully' });
    } catch (error) {
        console.error('Error deleting guest:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
