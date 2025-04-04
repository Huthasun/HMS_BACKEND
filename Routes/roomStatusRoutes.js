// routes/roomStatusRoutes.js
const express = require('express');
const router = express.Router();
const roomStatusController = require('../Controllers/roomStatusControllers');

router.get('', roomStatusController.getAllRoomStatus);
router.post('/create', roomStatusController.createRoomStatus);

// Update room status
router.put('/update-status', roomStatusController.updateRoomStatus);
// router.get('/details/:bookingId', roomStatusController.getRoomDetailsByBookingId);
router.put('/updateRoomStatus/:roomStatusId', roomStatusController.updateRoomStatusById);
module.exports = router;


// const express = require('express');
// const router = express.Router();
// const roomStatusController = require('../Controllers/roomStatusControllers');

// router.get('', roomStatusController.getAllRoomStatus);
// router.post('/create', roomStatusController.createRoomStatus);
// router.put('/update-status', roomStatusController.updateRoomStatus);
// router.put('/updateRoomStatus/:roomStatusId', roomStatusController.updateRoomStatusById);

// module.exports = router;