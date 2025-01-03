const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        message: { type: String, required: true },
        response: { type: String, required: true },
        timestamp: { type: Date, default: Date.now },
    },
    { collection: 'conversations' }
);

const Conversation = mongoose.model('Conversation', conversationSchema);
module.exports = Conversation;
