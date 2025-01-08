const express = require('express');
const { handleChat } = require('../controllers/intelligenceController');
const Message = require('../../../chatbot-backend/src/models/message'); // Import the Message model
const protect = require('../../../chatbot-backend/src/middleware/authMiddleware'); // Adjust the path as needed

const router = express.Router();

// Apply `protect` middleware to secure chatbot routes
router.post('/chat', protect, handleChat);

// New route to fetch messages
router.get('/messages', protect, async (req, res) => {
  try {
    const messages = await Message.find({ user: req.user.id }).sort({ createdAt: 1 });
    res.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Failed to fetch messages.' });
  }
});

module.exports = router;