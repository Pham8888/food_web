// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/profile', authController.getProfile); // Lấy thông tin hồ sơ
router.put('/profile', authController.updateProfile); // Cập nhật hồ sơ

module.exports = router;