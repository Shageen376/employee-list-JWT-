// routes/auth.js
const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const auth = require('../middleware/auth');
const utils = require("../utils/jwtUtils")

const router = express.Router();

// Register Route
router.post('/register', registerUser);

// Login Route
router.post('/login', loginUser );

// Protected Route Example
router.get('/admin/products', utils.verifyToken, (req, res) => {
  res.json({ message: "Protected products page data" });
});

module.exports = router;
