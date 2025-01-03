const templates = require('../prompt/promptTemplates');

/**
 * Dynamically fetches the appropriate prompt based on type and parameters.
 * @param {string} type - The type of the prompt (e.g., 'greeting', 'reminderCreation').
 * @param {...any} params - Parameters required for the specific prompt template.
 * @returns {string} - The dynamically generated prompt.
 */
const getPrompt = (type, ...params) => {
    if (templates[type]) {
        return templates[type](...params);
    }
    return templates.unknownCommand();
};

/**
 * Fetches a greeting prompt for the user.
 * @param {string} userName - The name of the user.
 * @returns {string} - The greeting prompt.
 */
const getGreeting = (userName) => getPrompt('greeting', userName);

/**
 * Fetches a prompt for creating a reminder.
 * @param {string} eventName - The name of the event.
 * @param {string} eventDate - The date of the event.
 * @returns {string} - The reminder creation prompt.
 */
const getReminderCreation = (eventName, eventDate) => getPrompt('reminderCreation', eventName, eventDate);

/**
 * Fetches a prompt for retrieving reminders.
 * @param {Array} reminders - A list of reminders.
 * @returns {string} - The prompt listing the reminders or an empty state message.
 */
const getFetchReminders = (reminders) => getPrompt('fetchReminders', reminders);

/**
 * Fetches a prompt when the user input is not understood.
 * @returns {string} - The fallback prompt for unknown commands.
 */
const getUnknownCommand = () => getPrompt('unknownCommand');

/**
 * Fetches a prompt for chatbot help.
 * @returns {string} - The help prompt.
 */
const getHelpPrompt = () => getPrompt('help');

/**
 * Fetches a farewell prompt.
 * @returns {string} - The farewell prompt.
 */
const getFarewellPrompt = () => getPrompt('farewell');

module.exports = {
    getPrompt,
    getGreeting,
    getReminderCreation,
    getFetchReminders,
    getUnknownCommand,
    getHelpPrompt,
    getFarewellPrompt,
};
