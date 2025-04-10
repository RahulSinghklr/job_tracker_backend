require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Step 1: Setup CORS options
const corsOptions = {
  origin: 'https://job-tracker-frontend-qhfdpgbqg-rahulsinghklrs-projects.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

// ✅ Step 2: Apply CORS middleware
app.use(cors(corsOptions));

// ✅ Step 3: Handle preflight requests

app.options('*', cors());


// ✅ Step 4: Other Middlewares
app.use(express.json()); // Body parser for JSON

// ✅ Step 5: Job Routes
const jobRoutes = require('./routes/jobs');
app.use('/api/jobs', jobRoutes);

// ✅ Step 6: MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch((err) => console.error(err));
