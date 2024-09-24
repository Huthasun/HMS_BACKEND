// routes/roomStatusRoutes.js
const express = require('express');
const router = express.Router();
const roomStatusController = require('../Controllers/roomStatusControllers');

router.get('', roomStatusController.getAllRoomStatus);
router.post('/create', roomStatusController.createRoomStatus);

// Update room status
router.put('/update-status', roomStatusController.updateRoomStatus);
module.exports = router;
