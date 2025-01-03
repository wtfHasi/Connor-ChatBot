const express = require('express');
const connectDB = require('./src/config/db');
const chatbotRoutes = require('./src/routes/intelligenceRoutes');

require('dotenv').config(); // Load environment variables

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());
app.use('/api/intelligence', chatbotRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

