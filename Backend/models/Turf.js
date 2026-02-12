import mongoose from "mongoose";

const turfSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    reviews: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String, // URL or base64
      required: true,
    },
    specialPrice: {
      type: String,
    },
    isRecommended: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Turf", turfSchema);
