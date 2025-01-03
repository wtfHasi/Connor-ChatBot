const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { handleChat, getReminders } = require('../controllers/chatbotController');

const router = express.Router();

// Route to handle user chat messages
router.post('/chat', protect, handleChat);

// Route to fetch reminders
router.get('/reminders', protect, getReminders);

module.exports = router;

