const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const connectDB = require('./src/config/db');
require('dotenv').config({ path: './.env' });

const userRoutes = require('./src/routes/userRoutes'); // Import user routes

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Use user routes
app.use('/api/users', userRoutes); // API prefix: /api/users

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
