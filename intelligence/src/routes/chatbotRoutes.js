const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { handleUserQuery } = require('../controllers/chatbotController');

const router = express.Router();

router.post('/query', protect, async (req, res) => {
    const { query } = req.body;

    try {
        const response = await handleUserQuery(req.user, query); // Pass user info
        res.status(200).json({ response });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
