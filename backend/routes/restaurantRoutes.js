// backend/routes/restaurantRoutes.js
const express = require('express');
const router = express.Router();
const restaurantController = require('../controller/restaurantController');

router.get('/restaurants', restaurantController.getRestaurants);
router.get('/restaurants/:id', restaurantController.getRestaurantById);

module.exports = router;