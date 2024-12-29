const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const connectDB = require('./src/config/db');
require('dotenv').config({ path: './.env' });

const userRoutes = require('./src/routes/userRoutes'); // Import user routes

const app = express();

// CORS configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL, // Frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};
app.use(cors(corsOptions));

// Middleware
app.use(bodyParser.json());
app.use(express.json());

// Connect Database
connectDB();

// Use user routes
app.use('/api/users', userRoutes); // API prefix: /api/users

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
