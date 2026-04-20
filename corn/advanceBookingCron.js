const BookingDetails = require("../Models/bookingDetailsModel");
const RoomStatus = require("../Models/roomStatusModel");
const moment = require("moment");

const activateAdvanceBookings = async () => {
  const start = moment().startOf("day").toDate();
  const end = moment().endOf("day").toDate();

  const bookings = await BookingDetails.find({
    bookingStatus: "Open",
    checkInDateTime: { $gte: start, $lte: end }
  });

  for (const booking of bookings) {
    await RoomStatus.findOneAndUpdate(
      { roomId: booking.roomId },
      {
        $set: {
          roomStatus: "occupied",
          primaryGuestName: booking.primaryGuestName,
          bookingId: booking.bookingId,
          CheckOutDateTime: booking.checkOutDateTime,
          pmytotalAmount: booking.pmytotalAmount
        }
      }
    );

    booking.bookingStatus = "Active";
    await booking.save();
  }

  console.log("Advance bookings activated for today");
};

module.exports = activateAdvanceBookings;
