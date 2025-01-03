require('dotenv').config(); // Ensure this is at the top
const express = require('express');
const connectDB = require('./src/config/db');
const chatbotRoutes = require('./src/routes/intelligenceRoutes');

// Initialize the Express app
const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());
app.use('/api/intelligence', chatbotRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


