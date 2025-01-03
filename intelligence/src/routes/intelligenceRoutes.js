const express = require('express');
const { handleChat } = require('../controllers/intelligenceController');

const router = express.Router();

// Route for handling chatbot communication
router.post('/chat', handleChat);

module.exports = router;
