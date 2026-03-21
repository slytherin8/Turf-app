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
    enum: ["pending", "paid", "cancelled"],
    default: "pending"
  },
  paymentId: {
    type: String,
  },
}, { timestamps: true });

// Compound index: prevents duplicate slot booking
bookingSchema.index({ turfName: 1, date: 1, time: 1 }, { unique: true });
const Booking = mongoose.model("Booking", bookingSchema);

export default Booking; 