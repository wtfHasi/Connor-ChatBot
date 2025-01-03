// /routes/eventRoutes.js
const express = require('express');
const {
    addEvent,
    getEventsForDate,
    getAllEvents,
    deleteEvent,
} = require('../database/eventController');

const router = express.Router();

router.post('/add', addEvent);              // Add a new event
router.get('/list', getEventsForDate);      // Get events for a specific date
router.get('/all', getAllEvents);           // Get all events for a user
router.delete('/:eventId', deleteEvent);    // Delete an event by ID

module.exports = router;
