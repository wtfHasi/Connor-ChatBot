const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController'); // Import controller functions
const protect = require('../middleware/authMiddleware'); // Import auth middleware

// Define user-related routes
router.post('/register', registerUser); // POST /register -> User registration
router.post('/login', loginUser);       // POST /login -> User login

module.exports = router;

