// src/routes/authRoutes.js
const express = require('express');
const { register, login } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: 'Protected route, user authenticated', userId: req.userId });
});

module.exports = router;
