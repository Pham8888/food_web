// backend/routes/menuRoutes.js
const express = require('express');
const router = express.Router();
const menuController = require('../controller/menuController');

router.get('/menu/:restaurantId', menuController.getMenu);

module.exports = router;