import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.js';
import turfRoutes from './routes/turf.js';
import bookingRoutes from './routes/bookingRoutes.js';
dotenv.config();

const app = express();

app.use(cors({
  origin:true,
  credentials: true
}));

app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/turfs', turfRoutes);
app.use("/api/booking", bookingRoutes);



app.get('/', (req, res) => {
  res.send('Turf App Backend is running 🚀');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () =>
  console.log(`Server running on port ${PORT}`)
);