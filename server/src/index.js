import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';
import authRoutes from './routes/auth.routes.js';
import anchorRoutes from './routes/anchor.routes.js';
import eventRoutes from './routes/event.routes.js';
import subscriptionRoutes from './routes/subscription.routes.js';
import { errorHandler } from './middleware/error.middleware.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/anchors', anchorRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/subscriptions', subscriptionRoutes);

// Error handling
app.use(errorHandler);

// Start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});