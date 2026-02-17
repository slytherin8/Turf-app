import express from "express";
import Turf from "../models/Turf.js";

const router = express.Router();

/**
 * @route   GET /api/turfs/recommended
 * @desc    Get recommended turfs
 * @access  Public
 */
router.get("/recommended", async (req, res) => {
  try {
    const turfs = await Turf.find({ isRecommended: true });
    res.status(200).json(turfs);
  } catch (err) {
    console.error("Recommended turfs error:", err);
    res.status(500).json({ message: "Failed to fetch recommended turfs" });
  }
});

/**
 * @route   GET /api/turfs/nearby
 * @desc    Get nearby turfs based on location
 * @access  Public
 */
router.get("/nearby", async (req, res) => {
  try {
    const { location } = req.query;

    if (!location) {
      return res.status(400).json({
        message: "Location query parameter is required",
      });
    }

    const turfs = await Turf.find({
      location: { $regex: location, $options: "i" },
    });

    res.status(200).json(turfs);
  } catch (err) {
    console.error("Nearby turfs error:", err);
    res.status(500).json({ message: "Failed to fetch nearby turfs" });
  }
});

/**
 * @route   GET /api/turfs/:id
 * @desc    Get turf details by ID
 * @access  Public
 */
router.get("/:id", async (req, res) => {
  try {
    const turf = await Turf.findById(req.params.id);

    if (!turf) {
      return res.status(404).json({ message: "Turf not found" });
    }

    res.status(200).json(turf);
  } catch (error) {
    console.error("Turf detail error:", error);
    res.status(500).json({ message: "Error fetching turf details" });
  }
});

export default router;
