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
      // Get page and limit from query parameters, set defaults if not provided
      const page = parseInt(req.query.page) || 1; // Default to page 1
      const limit = parseInt(req.query.limit) || 100; // Default to 100 records per page
      
      // Calculate the starting index of the records for the current page
      const startIndex = (page - 1) * limit;
  
      // Fetch the records from the database with pagination
      const guests = await Guest.find()
        .sort({ createdAt: -1 }) // Change this to the appropriate field
        .skip(startIndex)
        .limit(limit);
  
      // Get the total number of records
      const totalGuests = await Guest.countDocuments();

      if (guests.length === 0) {
        return res.status(404).json({ message: 'No guests found' });
      }
  
      // Send paginated response
      res.status(200).json({
        page,
        limit,
        totalGuests,
        totalPages: Math.ceil(totalGuests / limit),
        data: guests,
      });
    } catch (error) {
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
