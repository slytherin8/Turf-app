import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Turf from './models/Turf.js';

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected for seeding'))
  .catch(err => console.error(err));

const seedTurfs = async () => {
  try {
    await Turf.deleteMany(); // optional (clears old data)

    await Turf.insertMany([
      {
        name: "Game Mini Turf",
        location: "Avadi, Chennai",
        rating: 4.5,
        reviews: 84,
        price: 80,
        specialPrice: "₹ 399 for 6 / hrs",
        image: "https://d3mt0x61rkkfy3.cloudfront.net/venue/749a413f-9480-417c-a785-50ebff383f45/original/1733395539-image_cropper_1733395530526.jpg",
        isRecommended: true,
      },
      {
          name: "My Turf",
          location: "Thiruvallur, Chennai",
          rating: 4.5,
          reviews: 84,
          price: 80,
          specialPrice: "₹ 399 for 6 / hrs",
          image: "https://d3mt0x61rkkfy3.cloudfront.net/venue/749a413f-9480-417c-a785-50ebff383f45/original/1733395539-image_cropper_1733395530526.jpg",
          isRecommended: true,
      },
      {
          name: "Namma Turf",
          location: "Avadi, Chennai",
          rating: 4.5,
          reviews: 84,
          price: 80,
          specialPrice: "₹ 499 for 6 / hrs",
          image: "https://d3mt0x61rkkfy3.cloudfront.net/venue/749a413f-9480-417c-a785-50ebff383f45/original/1733395539-image_cropper_1733395530526.jpg",
          isRecommended: true,
      }
    ]);

    console.log("Turfs seeded successfully 🌱");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedTurfs();
