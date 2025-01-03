const templates = {
    // Greeting Template
    greeting: (userName) => 
        `Hi ${userName}! I'm here to help. What can I do for you today?`,
    
    // Reminder Creation Template
    reminderCreation: (eventName, eventDate) => 
        `Got it! I'll create a reminder for "${eventName}" on ${eventDate}. Let me confirm: Is this correct?`,

    // Reminder Retrieval Template
    fetchReminders: (reminders) => {
        if (!reminders || reminders.length === 0) {
            return "You don't have any upcoming reminders. Would you like to add one?";
        }
        const reminderList = reminders.map((r, index) => 
            `${index + 1}. "${r.title}" scheduled for ${r.date} at ${r.time || 'any time'}.`).join('\n');
        return `Here are your upcoming reminders:\n${reminderList}`;
    },

    // Reminder Deletion Template
    reminderDeletion: (eventName) => 
        `The reminder for "${eventName}" has been successfully deleted.`,

    // Unknown Command Template
    unknownCommand: () => 
        `I'm sorry, I didn't quite understand that. Could you rephrase or try asking something else?`,

    // Help Command Template
    help: () => 
        `I'm here to assist with the following:\n` +
        `1. Add reminders (e.g., "Add a meeting reminder for January 10th").\n` +
        `2. Fetch reminders (e.g., "What are my upcoming reminders?").\n` +
        `3. Delete reminders (e.g., "Remove the meeting reminder").\n` +
        `Feel free to ask!`,

    // Confirmation Template
    confirmation: () => 
        `Your request has been successfully handled! Let me know if there's anything else I can do.`,

    // Farewell Template
    farewell: () => 
        `Goodbye! Have a wonderful day! Feel free to call me back if you need anything.`
};

module.exports = templates;
