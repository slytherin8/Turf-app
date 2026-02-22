import nodemailer from "nodemailer";
import crypto from "crypto";
import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import authMiddleware from "../middleware/authMiddleware.js";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
    const { username, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // ✅ Generate token HERE (not globally)
    const verificationToken = crypto.randomBytes(32).toString("hex");

    const user = await User.create({
      username,
      email,
      password,
      verificationToken,
      isVerified: false,
    });

    // ✅ Create verification link
    const verificationUrl = `${process.env.BASE_URL}/api/auth/verify/${verificationToken}`;

    // ✅ Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Verify Your Email",
      html: `
        <h2>Email Verification</h2>
        <p>Click the link below to verify your email:</p>
        <a href="${verificationUrl}">Verify Email</a>
      `,
    });

    res.status(201).json({
      message: "User registered. Please check your email to verify.",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/verify/:token", async (req, res) => {
  try {
    const user = await User.findOne({
      verificationToken: req.params.token,
    });

    if (!user) {
      return res.status(400).send("Invalid or expired token");
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();

    res.send("Email verified successfully. You can now login.");

  } catch (error) {
    res.status(500).send("Verification failed");
  }
});

router.get("/check-verification/:email", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });

    if (!user) {
      return res.status(404).json({ verified: false });
    }

    res.json({ verified: user.isVerified });

  } catch (error) {
    res.status(500).json({ verified: false });
  }
});

router.get("/check-email-verified", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ verified: false });
    }

    res.json({ verified: user.isVerified });

  } catch (error) {
    res.status(500).json({ verified: false });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("Login request body:", req.body);
  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  if (!user.isVerified) {
  return res.status(401).json({
    message: "Please verify your email before logging in",
  });
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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const emailExists = await User.findOne({ email: newEmail });
    if (emailExists) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // ✅ Generate token
    const token = crypto.randomBytes(32).toString("hex");

    user.pendingEmail = newEmail;
    user.emailChangeToken = token;
    await user.save();

    // ✅ LOCAL transporter (no global)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const verifyLink = `${process.env.BASE_URL}/api/auth/verify-email-change/${token}`;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: newEmail,
      subject: "Verify Your New Email",
      html: `
        <h2>Email Change Verification</h2>
        <p>Click below to verify your new email:</p>
        <a href="${verifyLink}">Verify Email</a>
      `,
    });

    res.json({
      message: "Verification email sent. Please verify to complete update.",
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/verify-email-change/:token", async (req, res) => {
  try {
    const user = await User.findOne({
      emailChangeToken: req.params.token,
    });

    if (!user) {
      return res.status(400).send("Invalid or expired token");
    }

    user.email = user.pendingEmail;
    user.pendingEmail = undefined;
    user.emailChangeToken = undefined;

    await user.save();

    res.send("Email updated successfully. You can now continue.");

  } catch (error) {
    res.status(500).send("Email verification failed");
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

router.post("/google", async (req, res) => {
  try {
    const { idToken } = req.body;

    if (!idToken) {
      return res.status(400).json({ message: "No token provided" });
    }
    console.log("Audience:", process.env.GOOGLE_CLIENT_ID);
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    

    const payload = ticket.getPayload();

    const { email, name, sub } = payload;

    // Find or create user
    let user = await User.findOne({ email });
if (!user) {
  const usernameFromEmail = email.split("@")[0];
  let existingUsername = await User.findOne({ username: usernameFromEmail });

if (existingUsername) {
  usernameFromEmail = usernameFromEmail + Date.now();
}
  user = await User.create({
    email,
    username: usernameFromEmail,
    isVerified: true,
    googleId: sub,
  });
}

const token = jwt.sign(
  { id: user._id },   // ✅ correct
  process.env.JWT_SECRET,
  { expiresIn: "7d" }
);

    res.json({
      token,
      user,
    });

  } catch (error) {
    console.error("Google Auth Error:", error);
    res.status(500).json({ message: "Google authentication failed" });
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
});

export default router;
