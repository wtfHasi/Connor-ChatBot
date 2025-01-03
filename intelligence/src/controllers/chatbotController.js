const { Event } = require('../models/eventModel');
const { generateChatbotResponse } = require('../prompts/chatbotLogic');

const handleUserQuery = async (user, query) => {
    if (query.toLowerCase().includes('remind')) {
        const events = await Event.find({ userId: user._id });
        return formatEventsResponse(events);
    }

    // Handle general chatbot queries
    return await generateChatbotResponse(query);
};

const formatEventsResponse = (events) => {
    if (!events.length) return 'You have no upcoming events.';
    return events.map(e => `${e.title} on ${e.date} at ${e.time}`).join('\n');
};

module.exports = { handleUserQuery };
