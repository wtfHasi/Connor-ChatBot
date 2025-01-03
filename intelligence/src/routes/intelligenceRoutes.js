const express = require('express');
const { handleChat } = require('../controllers/intelligenceController');
const protect = require('../../../chatbot-backend/src/middleware/authMiddleware'); // Adjust the path as needed

const router = express.Router();

// Apply `protect` middleware to secure chatbot routes
router.post('/chat', protect, handleChat);

module.exports = router;

