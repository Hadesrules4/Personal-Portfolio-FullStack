import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import skillRoutes from './routes/skillRoutes.js';
import messageRoutes from './routes/messageRoutes.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_URL?.split(',').map(s => s.trim()) || '*'}));
app.use(express.json({ limit: '1mb' }));

app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'portfolio-api' }));
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/messages', messageRoutes);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal server error' });
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(port, () => console.log(`API running on http://localhost:${port}`)))
  .catch(err => { console.error('MongoDB connection failed:', err.message); process.exit(1); });
