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
    res.json(turfs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch turfs" });
  }
});

/**
 * @route   GET /api/turfs/:id
 * @desc    Get turf details
 */
router.get("/:id", async (req, res) => {
  try {
    const turf = await Turf.findById(req.params.id);
    if (!turf) {
      return res.status(404).json({ message: "Turf not found" });
    }
    res.json(turf);
  } catch (error) {
    res.status(500).json({ message: "Error fetching turf" });
  }
});

export default router;
