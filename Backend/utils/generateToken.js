import jwt from "jsonwebtoken";

export const generateToken = (res, user) => {
  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      username: user.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  // Send token as HTTP-only cookie
  res.cookie("token", token, {
    httpOnly: true,
    secure: false, // true in production (HTTPS)
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};
