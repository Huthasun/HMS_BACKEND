const express = require('express');
const router = express.Router();
const roomController = require('../Controllers/roomControllers');

router.post('/', roomController.createRoom);
router.get('/', roomController.getAllRooms);

module.exports = router;
