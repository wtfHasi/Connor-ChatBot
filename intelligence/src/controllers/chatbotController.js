const { getPrompt } = require('../utils/promptUtils');
const Event = require('../models/eventModel');

// Handle user chat
const handleChat = async (req, res) => {
    const { message } = req.body;

    try {
        // Example: Basic NLP matching (can integrate AI models later)
        if (message.toLowerCase().includes('reminder')) {
            return res.json({
                response: getPrompt('fetchReminders'),
            });
        } else if (message.toLowerCase().includes('hello')) {
            return res.json({
                response: getPrompt('greeting', req.user.name),
            });
        } else {
            return res.json({
                response: getPrompt('unknownCommand'),
            });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error processing the chat.' });
    }
};

// Fetch reminders for the logged-in user
const getReminders = async (req, res) => {
    try {
        const reminders = await Event.find({ userId: req.user._id });
        res.json(reminders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reminders.' });
    }
};

module.exports = { handleChat, getReminders };
