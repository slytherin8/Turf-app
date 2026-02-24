import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
{
  username: { type: String },

  email: { type: String, required: true, unique: true },

  password: {
    type: String,
    required: function () {
      return !this.googleId;
    },
  },

  googleId: String,

  firstName: String,
  lastName: String,
  phone: String,
  gender: String,

  isVerified: {
    type: Boolean,
    default: false,
  },

  verificationToken: String,
  sessionToken: String,
  resetToken: String,
  resetTokenExpiry: Date,
  pendingEmail: String,
  emailChangeToken: String,
},
{ timestamps: true }
);

// Hash password before saving
userSchema.pre('save', async function () {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
});

// Compare password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);
export default User;
