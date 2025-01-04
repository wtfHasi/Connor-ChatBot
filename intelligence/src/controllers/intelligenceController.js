const Conversation = require('../models/conversationModel');
const {
    getGreeting,
    getReminderCreation,
    getFetchReminders,
    getUnknownCommand,
} = require('../utils/promptUtils');

const handleChat = async (req, res) => {
    const { message } = req.body;
    const userId = req.user.id; // Use decoded user ID from `protect` middleware

    let response = '';

    if (message.toLowerCase().includes('hello')) {
        response = getGreeting(req.user.name || 'User');
    } else if (message.toLowerCase().includes('create reminder')) {
        const eventName = "Doctor's appointment";
        const eventDate = "2025-01-10";
        response = getReminderCreation(eventName, eventDate);
    } else if (message.toLowerCase().includes('reminders')) {
        const reminders = [
            { title: "Doctor's appointment", date: "2025-01-10", time: "10:00 AM" },
        ];
        response = getFetchReminders(reminders);
    } else {
        response = getUnknownCommand();
    }

    try {
        // Skipping database saving for now
        // await Conversation.create({
        //     userId,
        //     message,
        //     response,
        // });

        return res.json({ response });
    } catch (err) {
        console.error('Error in handleChat:', err);
        return res.status(500).json({ error: 'An unexpected error occurred.' });
    }
};

module.exports = { handleChat };