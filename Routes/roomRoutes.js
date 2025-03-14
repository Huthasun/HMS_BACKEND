const express = require('express');
const router = express.Router();
const roomController = require('../Controllers/roomControllers');

router.post('/create', roomController.createRoom);
router.get('/', roomController.getAllRooms);
router.get('/:roomId/price', roomController.getRoomPriceById);
module.exports = router;
