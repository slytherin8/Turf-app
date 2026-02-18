import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  turfName: {
    type: String,
    required: true,
  },
  location: String,
  courtType: String,
  date: String,
  time: String,
  status: {
    type: String,
    default: "Booked",
  },
}, { timestamps: true });


const Booking = mongoose.model("Booking", bookingSchema);

export default Booking; 