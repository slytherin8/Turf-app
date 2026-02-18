const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

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

    const newBooking = new Booking({
      userId,
      turfName,
      location,
      courtType,
      date,
      time,
    });

    await newBooking.save();

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      booking: newBooking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Booking failed",
      error: error.message,
    });
  }
});

module.exports = router;
