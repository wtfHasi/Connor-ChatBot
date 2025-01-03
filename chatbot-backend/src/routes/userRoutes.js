const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController'); // Import controller functions
const protect = require('../middleware/authMiddleware'); // Import auth middleware

// Define user-related routes
router.post('/register', registerUser); // POST /register -> User registration
router.post('/login', loginUser);       // POST /login -> User login

//Exposes an API endpoint for the chatbot
router.get('/me', protect, async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;

