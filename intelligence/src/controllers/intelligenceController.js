const { exec } = require('child_process');
const path = require('path');
const Message = require('../../../chatbot-backend/src/models/message'); // Import the Message model

const handleChat = async (req, res) => {
    const { message } = req.body;
    const userId = req.user.id; // Assuming `protect` middleware adds the user object to `req`
    const pythonScriptPath = path.join(__dirname, '../utils/cohereAI.py');

    // Save the user message to the database
    const userMessage = new Message({ user: userId, text: message, isUser: true });
    await userMessage.save();

    exec(`python ${pythonScriptPath} "${message}"`, async (error, stdout, stderr) => {
        if (error) {
            console.error('Error executing Python script:', error);
            return res.status(500).json({ error: 'Failed to process the message.' });
        }
        if (stderr) {
            console.error('Python script stderr:', stderr);
            return res.status(500).json({ error: 'Error in processing message.' });
        }

        const botResponse = stdout.trim();

        // Save the bot response to the database
        const botMessage = new Message({ user: userId, text: botResponse, isUser: false });
        await botMessage.save();

        res.json({ response: botResponse });
    });
};

module.exports = { handleChat };

