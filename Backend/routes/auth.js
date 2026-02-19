import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import authMiddleware from "../middleware/authMiddleware.js";
import bcrypt from "bcryptjs";
import { OAuth2Client } from "google-auth-library";


const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const router = express.Router();


router.post("/register", async (req, res) => {
  try {
  const { username, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = await User.create({ username, email, password });

res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("Login request body:", req.body);
  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.json({
    message: "Login successful",
    token,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
  });
});

router.put("/update-email", authMiddleware, async (req, res) => {
  try {
    const { newEmail } = req.body;

    if (!newEmail) {
      return res.status(400).json({ message: "New email is required" });
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Check if email already exists
    const emailExists = await User.findOne({ email: newEmail });
    if (emailExists) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.email = newEmail;
    await user.save();

    res.json({
      message: "Email updated successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


router.put("/change-password", authMiddleware, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Use your model method
    const isMatch = await user.matchPassword(currentPassword);
    if (!isMatch) {
      return res.status(400).json({ message: "Current password is incorrect" });
    }

    // ❌ DO NOT HASH HERE
    user.password = newPassword;

    await user.save();

    res.json({ message: "Password updated successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/me", authMiddleware, (req, res) => {
  res.json(req.user);
});

router.post("/google-login", async (req, res) => {
  try {
    const { idToken } = req.body;

    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name } = payload;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        username: name,
        email,
        password: "GOOGLE_AUTH", // dummy password
      });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );



 res.json({
  token,
  user: {
    id: user._id,
    username: user.username,
    email: user.email,
  },
});

  } catch (err) {
    console.error(err);
    res.status(401).json({ message: "Google auth failed" });
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
});

export default router;
