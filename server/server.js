import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import contactRoutes from './routes/contact.js';
import videosRoutes from './routes/videos.js';
import { rateLimiter } from './middleware/rateLimiter.js';
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());
app.use(rateLimiter);

app.use('/api/contact', contactRoutes);
app.use('/api/videos', videosRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.use(errorHandler);

// MongoDB connection with graceful error handling
if (process.env.MONGO_URI && process.env.MONGO_URI !== 'mongodb://localhost:27017/kollage-studio') {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on('connected', () => {
    console.log('✓ MongoDB connected');
  });

  mongoose.connection.on('error', (error) => {
    console.warn('⚠ MongoDB connection error (non-critical):', error.message);
  });
} else {
  console.log('ℹ MongoDB disabled for local development (using mock mode)');
}

app.listen(PORT, () => {
  console.log(`✓ Server running on http://localhost:${PORT}`);
  console.log(`✓ Frontend available at http://localhost:5173`);
  console.log(`ℹ API endpoints ready at http://localhost:${PORT}/api`);
});

