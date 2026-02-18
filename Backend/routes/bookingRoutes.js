import express from "express";
const router = express.Router();
import Booking from "../models/Booking.js";
import mongoose from "mongoose";

router.post("/create", async (req, res) => {
  try {
    const { userId, turfName, location, courtType, date, time } = req.body;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User not logged in",
      });
    }

    // Check if the slot is already booked
    const existingBooking = await Booking.findOne({ turfName, date, time });
    if (existingBooking) {
      return res.status(400).json({
        success: false,
        message: "Slot already booked",
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

    // Handle duplicate key error just in case
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
