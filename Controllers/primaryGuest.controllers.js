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
