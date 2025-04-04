// backend/routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controller/orderController');

router.post('/checkout', orderController.createOrder);

module.exports = router;