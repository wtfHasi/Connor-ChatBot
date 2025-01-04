const Conversation = require('../models/conversationModel');
const {
    getGreeting,
    getReminderCreation,
    getFetchReminders,
    getUnknownCommand,
} = require('../utils/promptUtils');

const { exec } = require('child_process');
const path = require('path');

const handleChat = (req, res) => {
    const { message } = req.body;  // Assuming the user message is sent in the body of the POST request
    const pythonScriptPath = path.join(__dirname, '../utils/cohereAI.py');
    console.log(pythonScriptPath);  // Log the path for debugging

    exec(`python ${pythonScriptPath} "${message}"`, (error, stdout, stderr) => {
        if (error) {
            console.error('Error executing Python script:', error);
            return res.status(500).json({ error: 'Failed to process the message.' });
        }
        if (stderr) {
            console.error('Python script stderr:', stderr);
            return res.status(500).json({ error: 'Error in processing message.' });
        }
        return res.json({ response: stdout.trim() });
    });
};

module.exports = { handleChat };
