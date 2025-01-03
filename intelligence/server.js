// server.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./src/database/connection');

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// API Routes
app.use('/api/events', require('./routes/eventRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
