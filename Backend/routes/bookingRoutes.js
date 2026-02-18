import express from "express";
const router = express.Router();
import Booking from "../models/Booking.js";
import mongoose from "mongoose";
router.post("/create", async (req, res) => {
  try {
    const {
      userId,
      turfName,
      location,
      courtType,
      date,
      time,
    } = req.body;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User not logged in",
      });
    }

    const newBooking = new Booking({
      userId: new mongoose.Types.ObjectId(userId),
      turfName,
      location,
      courtType,
      date,
      time,
    });

    await newBooking.save();

    res.status(201).json({
      success: true,
      message: "Booking successful",
      booking: newBooking,
    });

  } catch (error) {
    console.log("BOOKING ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});



export default router;
