const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Import User model
const { registerUser, loginUser } = require('../controllers/userController');
const protect = require('../middleware/authMiddleware');

// Define user-related routes
router.post('/register', registerUser); // POST /register -> User registration
router.post('/login', loginUser);       // POST /login -> User login

// Expose an API endpoint for the chatbot to use user details
router.get('/me', protect, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;


