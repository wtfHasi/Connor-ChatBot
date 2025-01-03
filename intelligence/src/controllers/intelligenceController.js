const {
    getGreeting,
    getReminderCreation,
    getFetchReminders,
    getUnknownCommand,
} = require('../utils/promptUtils');

// Logic for handling chatbot interactions
const handleChat = async (req, res) => {
    const { message } = req.body; // Message sent by the user
    const userName = req.user?.name || "User"; // Optionally, use user data if needed

    if (message.toLowerCase().includes('hello')) {
        return res.json({ response: getGreeting(userName) });
    } else if (message.toLowerCase().includes('create reminder')) {
        const eventName = "Doctor's appointment"; // Placeholder, dynamically set later
        const eventDate = "2025-01-10"; // Placeholder, dynamically set later
        return res.json({ response: getReminderCreation(eventName, eventDate) });
    } else if (message.toLowerCase().includes('reminders')) {
        const reminders = [
            { title: "Doctor's appointment", date: "2025-01-10", time: "10:00 AM" },
        ];
        return res.json({ response: getFetchReminders(reminders) });
    } else {
        return res.json({ response: getUnknownCommand() });
    }
};

module.exports = { handleChat };
