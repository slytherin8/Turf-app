import express from "express";
const router = express.Router();

import Booking from "../models/Booking.js";
import Razorpay from "razorpay";
import crypto from "crypto";
import authMiddleware from "../middleware/authMiddleware.js";


// =======================
// CREATE RAZORPAY ORDER
// =======================
router.post("/create-order", authMiddleware, async (req, res) => {
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
  });

  try {
    const { bookingId, amount } = req.body;

    const razorpayOrder = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: bookingId,
    });

    res.json(razorpayOrder);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// =======================
// VERIFY PAYMENT
// =======================
router.post("/verify-payment", authMiddleware, async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      bookingId
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ message: "Invalid payment" });
    }

    // 🔥 Mark booking as paid ONLY if it belongs to logged-in user
    const booking = await Booking.findOneAndUpdate(
      { _id: bookingId, userId: req.user._id },
      { status: "paid" },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json({ success: true });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// =======================
// CREATE BOOKING
// =======================
router.post("/create", authMiddleware, async (req, res) => {
  try {
    const { turfName, location, courtType, date, time } = req.body;

    // 🔥 Check if slot already booked and paid
    const existingBooking = await Booking.findOne({
      turfName,
      date,
      time,
      status: "paid"
    });

    if (existingBooking) {
      return res.status(400).json({
        success: false,
        message: "Slot already booked",
      });
    }

    // 🔥 Use logged-in user from token
    const newBooking = new Booking({
      userId: req.user._id,
      turfName,
      location,
      courtType,
      date,
      time,
      status: "pending"
    });

    await newBooking.save();

    res.status(201).json({
      success: true,
      bookingId: newBooking._id,
      booking: newBooking,
      message: "Booking successful",
    });

  } catch (error) {
    console.log("BOOKING ERROR:", error);

    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Slot already booked",
      });
    }

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;