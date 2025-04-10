require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT; // Removed fallback 5000

// Middlewares
app.use(cors({
    origin: 'https://job-tracker-frontend-g55lu3xfr-rahulsinghklrs-projects.vercel.app',
    credentials: true
  }));
  
app.use(express.json());

// Routes
const jobRoutes = require('./routes/jobs');
app.use('/api/jobs', jobRoutes);

// MongoDB and Server start
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB connected");
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
})
.catch((err) => console.error("❌ MongoDB connection error:", err));
