require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors({
  origin: 'https://job-tracker-frontend-qhfdpgbqg-rahulsinghklrs-projects.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
app.use(express.json()); // Body parser for JSON

// ✅ Import and use the job routes only ONCE
const jobRoutes = require('./routes/jobs');
app.use('/api/jobs', jobRoutes);

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log(`Server running on port ${PORT}`); // ✅ Fixed line
})
.catch((err) => console.error(err));
