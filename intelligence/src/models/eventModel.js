const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    title: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
}, { collection: 'events' });

module.exports = mongoose.model('Event', eventSchema);
